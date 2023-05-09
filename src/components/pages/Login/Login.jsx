import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

import AuthContext from "../../../context/AuthProvider";
// import axios from "../../../api/posts";
const LOGIN_URL = "http://localhost:8000/api/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ email, pwd }),
      });
      // const response = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ email, pwd }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className={styles.login}>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </p>
        </section>
      ) : (
        <section className={styles.login}>
          <p
            ref={errRef}
            className={errMsg ? styles.errmsg : styles.offscreen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles["user-labels"]} htmlFor="userEmail">
              Email:
            </label>
            <input
              type="text"
              className={styles["input-text"]}
              id="userEmail"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label className={styles["user-labels"]} htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              className={styles["input-text"]}
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Register for an Account
            <br />
            <span className={styles.line}>
              <Link className={styles.link} to="/register">
                Register
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
