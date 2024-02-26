import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* child element rhega kchh v ho skta h text v h skta h */}
      <div className="content">{children}</div> 
      <Footer />
    </>
  );
};

export default Layout;
