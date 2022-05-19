import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login ({onLogin}, {user}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
       <div>
           {showLogin ? (
               <div>
                <LoginForm onLogin={onLogin} user={user} />
                <p>
                    Don't have an account?
                    <button onClick={() => setShowLogin(false)}>Sign up</button>
                </p>
               </div>
           ) : (
              <div>
              <SignUpForm onLogin={onLogin} />
              <p>
                  Already have an account?
                  <button onClick={() => setShowLogin(true)}>Log In</button>
              </p>
              </div> 
           )}
       </div>
    )
}

export default Login;