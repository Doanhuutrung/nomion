import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./dist/App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Router>
      <div className="bg-body-mobile bg-cover bg-repeat-round md:bg-none">
        <Layout/>
      </div>
    </Router>
  );
}

export default App;
