import React, { useState } from "react";

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

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
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return (
        <div>
            <h1>Sign Up</h1>
        <form>
        <input
            type="text"
            id="firstName"
            autoComplete="off"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            />
            <p></p>

            <input
            type="text"
            id="lastName"
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            />

            <p></p>

            <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            />

            <p></p>

            <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />

            <p></p>

            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />

            <p></p>

            <button onClick={handleSubmit}>Create Account</button>

         {errors ? <div>{errors}</div> : null}
        </form>
        </div>
    )
}

export default SignUpForm