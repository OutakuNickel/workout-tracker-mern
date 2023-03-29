import React from "react";
import "./LogIn.css";
import { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const click = () => {
    console.log({
      Email: email,
      Password: password,
    });
  };

  return (
    <div
      className="Login"
      style={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        // backgroundColor: "#AD8A69",
      }}
    >
      <div
        className="login"
        style={{ width: "50%", display: "flex", justifyContent: "center" }}
      >
        <div
          className="LoginBox"
          style={{
            display: "flex",
            width: "546px",
            height: "431px",
            // backgroundColor: "#5F5050",
            flexDirection: "column",
            padding: "32px",
            borderRadius: "10px",
            // boxShadow: "10px 10px 40px 0px #000000",
          }}
        >
          <div
            className="Login Header"
            style={{
              marginBottom: "2.3vh",
              fontWeight: "900",
              fontSize: "40px",
              color: "black",
              // fontFamily: "Andale Mono, monospace",
            }}
          >
            LOG IN
          </div>
          <div
            className="Inputs"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "5vh", width: "100%", marginBottom: "7vh" }}>
              <form>
                <div className="group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required
                    className="Email"
                    value={email}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email</label>
                </div>
                <div className="group">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    required
                    className="Password"
                    value={password}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Password</label>
                </div>
              </form>
            </div>
          </div>
          <div
            className="Buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "end",
            }}
          >
            <div style={{ marginTop: "6vh" }}>
              <a
                href="url"
                style={{
                  color: "#3E7CF3",
                  fontWeight: "650",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Forgot Password?
              </a>
            </div>
            <button className="button" onClick={click} style={{}}>
              Login
            </button>
          </div>
          <div
            style={{
              marginTop: "2vh",
              color: "black",
              fontSize: "15px",
              fontWeight: "650",
            }}
          >
            New to WorkoutPlanner?
            <a
              href="url"
              style={{
                color: "#3E7CF3",
                fontWeight: "650",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
      <div
        className="picture"
        style={{ backgroundColor: "black", width: "50%", height: "100%" }}
      ></div>
    </div>
  );
}

export default LogIn;
