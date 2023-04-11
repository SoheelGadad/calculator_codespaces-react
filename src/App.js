import './App.css';
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
    </Router>
  );
}

export default App;
