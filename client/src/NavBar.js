import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Nav.css';


function NavBar ({onLogout}) {
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
              <Link to="/login">Log In</Link>
              <Link to="/users/:id">Workout Plan</Link>
              <Link to="/favorites">Favorites</Link>
              <button className="logout" onClick={handleLogout}>Log out</button> 
         </div>
     )
}

export default NavBar;