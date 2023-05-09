import express from "express";
const app = express();
app.use(express.json());

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import pg from "pg";
const { Pool } = pg;

import cors from "cors";
app.use(cors());

import bcrypt from "bcrypt";

// Use this if you want to configure specific parameters with CORS
// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500",
//     methods: "GET",
//   })
// );

const port = process.env.PORT || 8000;

app.get("/api/scripts", async (req, res, next) => {
  console.log(process.env.DATABASE_URL);
  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query("SELECT * FROM script ORDER BY id ASC");
    res.send(rows);
    pool.end();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});

app.get("/api/scripts/:scriptId", async (req, res, next) => {
  let scriptId = req.params.scriptId;
  try {
    const query = {
      text: "SELECT * FROM script WHERE id = $1",
      values: [scriptId],
    };
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query(query);
    res.send(rows);
    pool.end();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});

app.post("/api/scripts", async (req, res, next) => {
  let scriptName = req.body.name;
  let image = req.body.image;
  let synopsis = req.body.synopsis;
  let downloadLink = req.body.download_link;
  let description = req.body.description;
  console.log(scriptName);

  const query = {
    text: "INSERT INTO script (name, download_link, image, synopsis, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    values: [scriptName, downloadLink, image, synopsis, description],
  };

  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query(query);
    if (rows.length === 0) {
      next({ status: 400, message: "Bad Request" });
    } else {
      res.send(rows);
    }
    pool.end();
  } catch (error) {
    alert(error.message);
    next({ status: 400, message: error.message });
  }
});

app.put("/api/scripts/:scriptId", async (req, res, next) => {
  let scriptId = req.params.scriptId;
  let scriptName = req.body.name;
  let downloadLink = req.body.download_link;
  let image = req.body.image;
  let synopsis = req.body.synopsis;
  let description = req.body.description;

  const query = {
    text: `UPDATE script SET (name, download_link, image, synopsis, description) = ($1, $2, $3, $4, $5) WHERE id = ${scriptId} RETURNING *`,
    values: [scriptName, downloadLink, image, synopsis, description],
  };

  console.log(query);

  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query(query);
    if (rows.length === 0) {
      next({ status: 400, message: "Bad Request" });
    } else {
      res.send(rows);
    }
    pool.end();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});

app.delete("/api/scripts/:scriptId", async function (req, res, next) {
  let scriptId = req.params.scriptId;
  const query = {
    text: "DELETE FROM script WHERE id = $1 RETURNING *",
    values: [scriptId],
  };

  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query(query);
    res.send(rows);
    pool.end();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});

app.post("/api/login", async function (req, res, next) {
  try {
    const email = req.body.email;
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query(`SELECT * FROM account`);
    let userInfo = {};
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].email === email) {
        console.log("password found");
        userInfo = rows[i];
        break;
      }
    }
    let result = await bcrypt.compare(req.body.pwd, userInfo.password);
    console.log(result);
    if (rows.length === 0) {
      next({ status: 400, message: "Bad Request" });
    } else {
      res.status(200).send(userInfo.role);
      // res.send(rows);
    }
    pool.end();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});

app.post("/api/register", async function (req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.pwd, 10);
    const id = Date.now();
    const email = req.body.email;
    const role = "user";
    const query = {
      text: "INSERT INTO account (id, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [id, email, hashedPassword, role],
    };
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query(query);
    if (rows.length === 0) {
      next({ status: 400, message: "Bad Request" });
    } else {
      res.send(rows);
    }
    pool.end();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});

app.use((req, res, next) => {
  next({ status: 404, message: "Not Found" });
});

app.use((error, req, res, next) => {
  res.status(error.status).send(error.message);
});

app.listen(port, function () {
  console.log(`fivem_scripts server is running on ${port}`);
});
