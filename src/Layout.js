import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

function Layout({ chidren }) {
  return (
    <>
      <Header />
      {chidren}
      <Footer />
    </>
  );
}

export default Layout;
