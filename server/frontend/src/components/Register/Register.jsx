import React, { useState } from "react";
import "./Register.css"; // Optional: styling matching your theme
import user_icon from "../assets/person.png"; // Adjust path if needed, or omit icons
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();

    let register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "userName": userName,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
      }),
    });

    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The username is already registered. Please login or try another one.");
    } else {
      alert("Registration failed. Please check your details and try again.");
    }
  };

  return (
    <div className="register_container" style={{ width: "50%", margin: "5% auto" }}>
      <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <span className="text" style={{ fontSize: "30px", fontWeight: "bold" }}>Sign Up</span>
        <a href="/" onClick={gohome} style={{ alignSelf: "center", textDecoration: "none" }}>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>X</span>
        </a>
      </div>
      <hr />
      
      <form onSubmit={register}>
        <div className="inputs" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          {/* Username Input */}
          <div className="input">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input_field"
              onChange={(e) => setUserName(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

          {/* First Name Input */}
          <div className="input">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="input_field"
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

          {/* Last Name Input */}
          <div className="input">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="input_field"
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

          {/* Email Input */}
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input_field"
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

          {/* Password Input */}
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input_field"
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

        </div>

        {/* Submit Register Button */}
        <div className="submit_container" style={{ marginTop: "20px", textAlign: "center" }}>
          <input 
            className="submit" 
            type="submit" 
            value="Register" 
            style={{ padding: "10px 25px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;