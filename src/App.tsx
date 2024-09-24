import React from "react";
import MainLayout from "./views/layout/index";

import "./assets/css/fonts/slick.svg";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootsnav.css";
import "./assets/css/flaticon.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/linearicons.css";
import "./assets/css/responsive.css";
import "./assets/css/slick-theme.css";
import "./assets/css/slick.css";
import "./assets/images/blog/b1.jpg";

// // Import jQuery
// import $ from "jquery";

// // Importing assets like images and fonts (ensure Webpack is configured to handle these).
// // import "./assets/css/ajax-loader.gif";
// import "./assets/css/fonts/slick.svg";

// // Import custom JavaScript (which likely depends on jQuery)
// import "./assets/js/bootsnav";
// import "./assets/js/custom";

// // Import Font Awesome CSS
// import "font-awesome/css/font-awesome.min.css";

// // Import custom App CSS
// import "./App.css";

// // Extend the global Window interface to include jQuery and $
// declare global {
//   interface Window {
//     jQuery: typeof $;
//     $: typeof $;
//   }
// }

// // Ensure jQuery is accessible globally if needed
// window.$ = window.jQuery = $;

function App() {
  return <MainLayout />;
}

export default App;
