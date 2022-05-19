import React, {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavBar ({onLogout}) {
   const nav = useNavigate()

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
       nav("/login")
      }

     return (
         <div>
             <nav>
             
             <Link to="/">Home</Link>
            
            <Link to="/login">Log In</Link>
               
            <button onClick={handleLogout}>Log out</button>

             
                

            
             </nav>
         </div>
     )
}

export default NavBar;