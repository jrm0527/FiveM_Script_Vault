import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../../../server/axios";
import styles from "./Register.module.css";

const USER_REGEX =
  /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className={styles.register}>
          <p
            ref={errRef}
            className={errMsg ? styles.errmsg : styles.offscreen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              E-mail:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? styles.valid : styles.hide}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? styles.hide : styles.invalid}
              />
            </label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? styles.instructions
                  : styles.offscreen
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <br />
              Must be a valid e-mail address.
              <br />
            </p>

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? styles.valid : styles.hide}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? styles.hide : styles.invalid}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? styles.instructions : styles.offscreen
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? styles.valid : styles.hide}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatch || !matchPwd ? styles.hide : styles.invalid
                }
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch
                  ? styles.instructions
                  : styles.offscreen
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className={styles.line}>
              {/*put router link here*/}
              <a href="/login">Sign In</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./Register.module.css";

// const Register = () => {
//   const [password, setPassword] = useState("");
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");

//   const recordName = (event) => {
//     setUserName(event.target.value);
//   };
//   const recordPassword = (event) => {
//     setPassword(event.target.value);
//   };
//   const recordEmail = (event) => {
//     setUserEmail(event.target.value);
//   };

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (!validateForm()) return;
//     const userData = {
//       name: userName,
//       email: userEmail,
//       password: password,
//     };

//     fetch("http://localhost:8000/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify(userData),
//     });
//   }

//   return (
//     <div className="Login">
//       <h1>Register</h1>
//       <div>
//         <label className={styles["user-labels"]} htmlFor="userName">
//           Name:
//         </label>
//       </div>
//       <div>
//         <input
//           type="text"
//           className={styles["input-text"]}
//           id="userName"
//           onChange={recordName}
//         />
//       </div>
//       <div>
//         <label className={styles["user-labels"]} htmlFor="userEmail">
//           Email:
//         </label>
//       </div>
//       <div>
//         <input
//           type="text"
//           className={styles["input-text"]}
//           id="userEmail"
//           onChange={recordEmail}
//         />
//       </div>
//       <div>
//         <label className={styles["user-labels"]} htmlFor="userPassword">
//           Password:
//         </label>
//       </div>
//       <div>
//         <input
//           type="text"
//           className={styles["input-text"]}
//           id="userPassword"
//           onChange={recordPassword}
//         />
//       </div>
//       <button type="submit" onClick={handleSubmit}>
//         Register
//       </button>
//       <div className={styles.parent}>
//         <Link className={styles.link} to="/login">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Register;
