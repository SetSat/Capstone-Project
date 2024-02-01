import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/LoginSignin/Login";
import Signup from "./components/Signup/Signup";
import Navbars from './components/Navbar/Navbars'




function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
     <Navbars></Navbars>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
