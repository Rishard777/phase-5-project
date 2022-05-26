import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'


function LoginForm( {onLogin} ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([])
   

    const navigate = useNavigate();

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
             navigate("/")
            } else {
              r.json().then((err) => setError(err.error));
            }
          });
        }

return (
    <div>
      
      <h1 className="login_header">Log in</h1>
        <form className="login_form" onSubmit={handleSignIn}>
            <input
            className="login_input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />
            <p></p>
            <input
            className="login_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            <p></p>

            <button className="login_button">Login</button>

            {error ? <div>{error}</div> : null}
        </form>

        
    </div>
)

}
export default LoginForm;
