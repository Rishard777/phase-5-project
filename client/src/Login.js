import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './Login.css'
import image from "./photos/neckart.JPG";  
import image2 from "./photos/leg.JPG" 

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
                  <button className="signup_toggle" onClick={() => setShowLogin(true)}>Log In</button>
              </p>
              <img
                src={image2}
                className="loginPhoto" />
              </div> 
           )}
       </div>
    )
}

export default Login;