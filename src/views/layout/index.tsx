import React from "react";
import Header from "./header";
import Footer from "./footer";

import Home from "../pages/Home";
import How from "../pages/How";
import Explore from "../pages/Explore";
import Review from "../pages/Review";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

function Index() {
  return (
    <>
      <Header />

      <Home />
      <How />
      <Explore />
      <Review />
      <Blog />
      <Contact />

      <Footer />
    </>
  );
}

export default Index;
