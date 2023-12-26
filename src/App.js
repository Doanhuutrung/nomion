import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import "./dist/App.css";

function App() {
  return (
    <Router>
      <div className="bg-body-mobile bg-cover bg-repeat-round md:bg-none">
        <Header/>
        <MainContent/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
