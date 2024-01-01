import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};
export default Layout;