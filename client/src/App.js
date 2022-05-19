
import './App.css';
import React, {useState, useEffect} from "react";
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


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
        
    
         <Route exact path="/login" element={<Login onLogin={handleLogin} user={user} />}/>
          
      

      </Routes>
  
      </BrowserRouter>
      </div>
    )
 

// if(user){
//   return (
//     <div className="App">
//       Welcome!
//     </div>
//   )
// } else
// return (
//   <div className="App">
//     <Login  onLogin={handleLogin} history={history} />
//   </div>
// );
}

export default App;
