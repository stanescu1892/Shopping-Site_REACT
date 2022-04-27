import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Link from "link-react";
import Header from "./components/header/Header";
import Shop from "./pages/shop/shop";

import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
   
    <Router>
       <Header/>
      <div>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
