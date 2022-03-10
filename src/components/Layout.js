import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";



const Layout = (props) => {
  return (
    //Using React fragment
    <>
      <Navbar />

      <main className='main-content'>{props.children}</main>

      <Footer />
    </>
  );
};

export default Layout;
