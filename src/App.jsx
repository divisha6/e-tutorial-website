import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import IntroPage from "./pages/IntroPage"

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <header className="App-header"> 
        <Navbar />
      </header>
      <Routes>
        <Route path= "/" element= {<IntroPage /> } />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Course />} />
      </Routes>
      
    </div>
  );
}

export default App;
