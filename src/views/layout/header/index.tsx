import React, { useEffect, useState } from "react";
import Toparea from "./toparea";

function Index() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // Check if the page has been scrolled down
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Toparea />

      <section className="top-area">
        <div className="header-area">
          {/* Start Navigation */}
          <nav
            className={`navbar navbar-default bootsnav navbar-scrollspy ${
              isSticky ? "sticky" : ""
            }`}
            data-minus-value-desktop="70"
            data-minus-value-mobile="55"
            data-speed="1000"
          >
            <div className="container">
              {/* Start Header Navigation */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">
                  list<span>race</span>
                </a>
              </div>
              {/* End Header Navigation */}

              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
              >
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className="scroll active">
                    <a href="#home">home</a>
                  </li>
                  <li className="scroll">
                    <a href="#works">how it works</a>
                  </li>
                  <li className="scroll">
                    <a href="#explore">explore</a>
                  </li>
                  <li className="scroll">
                    <a href="#reviews">review</a>
                  </li>
                  <li className="scroll">
                    <a href="#blog">blog</a>
                  </li>
                  <li className="scroll">
                    <a href="#contact">contact</a>
                  </li>
                </ul>
                {/*/.nav */}
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/*/.container*/}
          </nav>
          {/* End Navigation */}
        </div>
        {/*/.header-area*/}
        <div className="clearfix"></div>
      </section>
    </>
  );
}

export default Index;
