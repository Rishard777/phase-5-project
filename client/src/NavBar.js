import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Nav.css';


function NavBar ({onLogout, user}) {
   const nav = useNavigate()

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
       nav("/login")
      }

     return (
         <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/favorites">Favorites</Link>
              <Link to="/users/:id">Workout Plan</Link>
              {user ? <button className="logout" onClick={handleLogout}>Log out</button> : 
              <Link to="/login">Log In</Link>
              }
              
              
              
              
         </div>
     )
}

export default NavBar;