import React from "react";
import "./SignUp.css";
import { useState } from "react";

function SignUp() {
  const [last, setLast] = useState("");
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const click = () => {
    console.log({
      FirstName: first,
      LastName: last,
      Email: email,
      Password: password,
    });
  };
  // onChange = {(e) => e.target.value}
  // onChange((e) => setFirst(e.target.value))
  return (
    <div
      className="SignUp"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#AD8A69",
      }}
    >
      <div
        className="SignBox"
        style={{
          display: "flex",
          width: "546px",
          height: "675px",
          backgroundColor: "#5F5050",
          flexDirection: "column",
          padding: "32px",
          borderRadius: "10px",
          boxShadow: "10px 10px 40px 0px #000000",
        }}
      >
        <div
          className="Sign Header"
          style={{
            marginBottom: "2.3vh",
            fontWeight: "900",
            fontSize: "40px",
            color: "white",
            // fontFamily: "Andale Mono, monospace",
          }}
        >
          CREATE ACCOUNT
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
            <div
              className="Header1"
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "1.5vh",
              }}
            >
              First Name
            </div>
            <input
              className="FirstName"
              type="text"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              // placeholder="Enter your email"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#AD8A69",
                border: "none",
                borderRadius: "2px",
                outline: "none",
                color: "white",
              }}
            ></input>
          </div>
          <div style={{ height: "5vh", width: "100%", marginBottom: "7vh" }}>
            <div
              className="Header1"
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "1.5vh",
              }}
            >
              Last Name
            </div>
            <input
              className="LastName"
              type="text"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              // placeholder="Enter your password"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#AD8A69",
                border: "none",
                borderRadius: "2px",
                outline: "none",
                color: "white",
              }}
            ></input>
          </div>
          <div style={{ height: "5vh", width: "100%", marginBottom: "7vh" }}>
            <div
              className="Header1"
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "1.5vh",
              }}
            >
              Email
            </div>
            <input
              className="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // placeholder="Enter your password"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#AD8A69",
                border: "none",
                borderRadius: "2px",
                outline: "none",
                color: "white",
              }}
            ></input>
          </div>
          <div style={{ height: "5vh", width: "100%" }}>
            <div
              className="Header1"
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "1.5vh",
              }}
            >
              Password
            </div>
            <input
              className="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // placeholder="Enter your password"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#AD8A69",
                border: "none",
                borderRadius: "2px",
                outline: "none",
                color: "white",
              }}
            ></input>
          </div>
        </div>
        <div
          className="Buttons"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "end",
            marginTop: "8vh",
          }}
        >
          <button
            className="Log In Button"
            onClick={click}
            style={{
              height: "5vh",
              width: "100%",
              backgroundColor: "#AD8A69",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "700",
              fontSize: "24px",
              borderRadius: "2px",
              marginTop: "1.5vh",
            }}
          >
            CREATE ACCOUNT
          </button>
        </div>
        <div
          style={{
            marginTop: "2vh",
            color: "white",
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
  );
}

export default SignUp;
// onChange = {(e) => e.target.value}
//Pull usestate
//setFirstname(e.target.value)
