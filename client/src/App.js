
import './App.css';
import React, {useState, useEffect} from "react";
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkoutPlan from './WorkoutPlan';
import Exercises from './Exercises'


function App() {
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
    <BrowserRouter>
      <NavBar onLogout={handleLogout} user={user}/>
   
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path ="/users/:id" element={<WorkoutPlan user={user} setUser={setUser} />}/>
        <Route exact path="/login" element={<Login onLogin={handleLogin}  />}/>
        <Route exact path="/workouts/:id" element={<Exercises />}/>
      </Routes>
  
      </BrowserRouter>
  </div>
      )
}

export default App;
