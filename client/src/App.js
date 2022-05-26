
import './App.css';
import React, {useState, useEffect} from "react";
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkoutPlan from './WorkoutPlan';
import Exercises from './Exercises'
import Favorites from './Favorites'


function App() {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  
 
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
}

function handleLogout() {
  setUser(null);
}



return (
  <div className="App">
    <p className="header">Sign up for free today</p>
    <BrowserRouter>
      <NavBar onLogout={handleLogout} user={user}/>
   
      <Routes>
        <Route exact path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />}/>
        <Route exact path ="/users/:id" element={<WorkoutPlan user={user} setUser={setUser} />}/>
        <Route exact path="/login" element={<Login onLogin={handleLogin} user={user}  />}/>
        <Route exact path="/workouts/:id" element={<Exercises />}/>
        <Route exact path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />}/>
      </Routes>
  
      </BrowserRouter>
  </div>
      )
}

export default App;
