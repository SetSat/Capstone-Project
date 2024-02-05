import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/LoginSignin/Login";
import Signup from "./components/Signup/Signup";
import Navbars from "./components/Navbar/Navbars";
import { DataProvider } from "./DataContext/DataContextProvider";
import Class from "./components/LoginSignin/class/Class";

function App() {
  return (
    <Router>
      <DataProvider>
        <Navbars></Navbars>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/class" element={<Class></Class>}></Route>
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
