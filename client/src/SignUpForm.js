import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            username,
            password,
          }),
        })
        .then((r) => {
          if (r.ok) {
            r.json()
            .then((user) => onLogin(user));
            navigate("/")
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return (
        <div>
            <h1 className="signup_header">Sign Up</h1>
        <form>
        <input
            type="text"
            id="firstName"
            autoComplete="off"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="login_input"
            />
            <p></p>

            <input
            type="text"
            id="lastName"
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            className="login_input"
            />

            <p></p>

            <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="login_input"
            />

            <p></p>

            <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="login_input"
            />

            <p></p>

            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login_input"
            />

            <p></p>

            <button className="login_button" onClick={handleSubmit}>Create Account</button>

         {errors ? <div>{errors}</div> : null}
        </form>
        </div>
    )
}

export default SignUpForm