import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function NavBar () {
     return (
         <div>
             <nav>
             <BrowserRouter>
            
             <Link to="/">Home</Link>

             <Link to="/login">Log In</Link>
             
             </BrowserRouter>
             </nav>
         </div>
     )
}

export default NavBar;