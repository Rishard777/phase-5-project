import { useState } from "react";

function LoginForm( {onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([])

    function handleSignIn(e) {
        e.preventDefault();
        const user = {
          username: username,
          password
        }
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
        .then((r) => {
            if (r.ok) {
              r.json()
              .then((user) => onLogin(user));
           
            } else {
              r.json().then((err) => setError(err.error));
            }
          });
      }

return (
    <div>
      <h1>Log in</h1>
        <form>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />
            <p></p>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            <p></p>
            <button onClick={handleSignIn}>Login</button>

            {error ? <div>{error}</div> : null}
        </form>

        
    </div>
)

}
export default LoginForm;
