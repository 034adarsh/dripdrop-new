import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/Home"
import Drip from "./pages/Drip";
import Drop from "./pages/Drop";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [usertype,setUsertype] = useState("")
  const handleLoggedIn = () =>{
    if(!loggedIn){
      setLoggedIn(true);
    return;
  }
}
  const type = (t)=>{
        setUsertype(t)
        console.log(t)
  }
  
  return (
    <div className="App">

    <Navigation loggedIn={loggedIn} usertype={usertype}
    />
      <Routes>
          <Route exact path="/" element={<Home loggedIn={loggedIn}/>} />
          <Route exact path="/login" element={<Login loggedIn={loggedIn} handleLoggedIn={handleLoggedIn}/>} />
          <Route exact path="/register" element={<Register loggedIn={loggedIn} type={type}/>} />
          <Route exact path="/drip" element={<Drip usertype={usertype} loggedIn={loggedIn}/>}  />
          <Route exact path="/drop" element={<Drop usertype={usertype} loggedIn={loggedIn}/>} />
        </Routes>
    </div>
  );
}

export default App;