import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
  // Slick slider settings
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="reviews" className="reviews">
        <div className="section-header">
          <h2>Clients Reviews</h2>
          <p>What our clients say about us</p>
        </div>

        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c1.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Tom Leakar</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c2.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Monirul Islam</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c3.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Shohrab Hossain</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c4.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Tom Leakar</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c1.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Tom Leakar</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c2.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Monirul Islam</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 7 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c3.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Shohrab Hossain</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 8 */}
          <div className="single-testimonial-box">
            <div className="testimonial-description">
              <div className="testimonial-info">
                <div className="testimonial-img">
                  <img
                    src={require("../../assets/images/clients/c4.png")}
                    alt="clients"
                  />
                </div>
                <div className="testimonial-person">
                  <h2>Tom Leakar</h2>
                  <h4>London, UK</h4>
                  <div className="testimonial-person-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-comment">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis eaque.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* <!-- statistics strat --> */}
      <section id="statistics" className="statistics">
        <div className="container">
          <div className="statistics-counter">
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-content">
                  <div className="counter">90</div>
                  <span>K+</span>
                </div>
                {/* <!--/.statistics-content--> */}
                <h3>listings</h3>
              </div>
              {/* <!--/.single-ststistics-box--> */}
            </div>
            {/* <!--/.col--> */}
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-content">
                  <div className="counter">40</div>
                  <span>k+</span>
                </div>
                {/* <!--/.statistics-content--> */}
                <h3>listing categories</h3>
              </div>
              {/* <!--/.single-ststistics-box--> */}
            </div>
            {/* <!--/.col--> */}
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-content">
                  <div className="counter">65</div>
                  <span>k+</span>
                </div>
                {/* <!--/.statistics-content--> */}
                <h3>visitors</h3>
              </div>
              {/* <!--/.single-ststistics-box--> */}
            </div>
            {/* <!--/.col--> */}
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-content">
                  <div className="counter">50</div>
                  <span>k+</span>
                </div>
                {/* <!--/.statistics-content--> */}
                <h3>happy clients</h3>
              </div>
              {/* <!--/.single-ststistics-box--> */}
            </div>
            {/* <!--/.col--> */}
          </div>
          {/* <!--/.statistics-counter--> */}
        </div>

        {/* <!--/.container--> */}
      </section>
      {/* <!--/.counter-->
    <!-- statistics end --> */}
    </>
  );
}

export default Review;
