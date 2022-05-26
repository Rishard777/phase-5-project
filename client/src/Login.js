import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './Login.css'
import image from "./photos/neckart.JPG";   

function Login ({onLogin}, {user} ) {
    const [showLogin, setShowLogin] = useState(true);

    return (
       <div>
           {showLogin ? (
               <div>
                <LoginForm onLogin={onLogin} user={user} />
                <p>
                    Don't have an account?
                    <button onClick={() => setShowLogin(false)} className="signup_toggle">Sign up</button>
                </p>
                <img
                src={image}
                className="loginPhoto" />
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