import React, { useEffect } from "react";
import "../assets/demopro_files/bootstrap.min.css";
import "../assets/demopro_files/main.css";
import "../App.css";
import Typewriter from "typewriter-effect";

const Register = () => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="container">
      <div
        className="text-center"
        style={{
          backgroundColor: "white",
          width: "fit-content",
          padding: "10px 20px",
          borderRadius: 10,
          boxShadow: "0px 5px 25px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img src="./demopro_files/favicon.png" width={80} alt="" />
        <br />
        <br />
        <h4 id="type-text">
          <Typewriter
            options={{
              strings: "Become a contributor",
              autoStart: true,
              delay: 40,
              cursor: "",
            }}
          />
        </h4>
        <br />
        <form>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Username"
          />
          <br />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <input
            className="login-input"
            type="text"
            name="fullName"
            placeholder="Full name"
          />
          <br />
          <br />
          <input type="radio" name="isAccepted" id="tos-radio" /> I am agree
          with the
          <a href="/" style={{ textDecoration: "none", fontWeight: 700 }}>
            {" "}
            Terms of Service
          </a>
          <br />
          <br />
          <input
            type="submit"
            defaultValue="Sign up"
            className="btn btn-primary"
            onclick="showLoadingModal()"
            style={{ textDecoration: "none" }}
          />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Register;
