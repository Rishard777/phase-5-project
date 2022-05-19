
import './App.css';
import React, {useState} from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
// import Home from './Home';
// import NavBar from './NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
}

if(user){
  return (
    <div className="App">
      Welcome!
    </div>
  )
} else
return (
  <div className="App">
    <Login  onLogin={handleLogin} />
  </div>
);
}

export default App;
