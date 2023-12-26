import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/mainContent";
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
