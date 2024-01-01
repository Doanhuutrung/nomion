import React from "react";
import "./dist/App.css";
import Layout from "./Components/Layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import DaNonNuoc from "./Components/pages/DaNonNuoc";
import Home from "./Components/pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/danonnuoc" element={<DaNonNuoc/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
