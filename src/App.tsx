import React, { useEffect } from "react";
import MainLayout from "./views/layout/index";

import "./assets/css/fonts/slick.svg";
import "./assets/css/ajax-loader.gif";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootsnav.css";
import "./assets/css/flaticon.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/linearicons.css";
import "./assets/css/responsive.css";
import "./assets/css/slick-theme.css";
import "./assets/css/slick.css";
import "./assets/css/bootstrap.min.css";

import "./assets/js/bootsnav"; // Import Bootsnav
import "./assets/js/custom"; // Import custom scripts

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import $ from "jquery";
import "slick-carousel"; // Import Slick Carousel
import feather from "feather-icons"; // Import Feather Icons
import "jquery.counterup";

import "waypoints/lib/jquery.waypoints";

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
}

window.$ = window.jQuery = $;

function App() {
  useEffect(() => {
    feather.replace(); // Initialize Feather Icons
  }, []);

  return <MainLayout />;
}

export default App;
