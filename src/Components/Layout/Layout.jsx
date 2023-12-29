import React from "react";
import Header from "../sections/Header";
import Routers from "../Routes/Routers";
import Footer from "../sections/Footer";
import MainContent from "../sections/MainContent";

const Layout = () => {
  return (
    <>
      <Header/>
      <div>
        <Routers/>
        <MainContent/>
      </div>
      <Footer/>
    </>
  );
};
export default Layout;