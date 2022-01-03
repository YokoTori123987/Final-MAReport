import React from 'react';

function Hero1 (){
    return(
    <>
    {/*================ Hero Carousel start =================*/}
    <section className="section-margin mt-0">
        <div className="owl-carousel owl-theme hero-carousel">
          <div className="hero-carousel__slide">
            <img src="img/home/hero-slide1.png" alt="" className="img-fluid" />
            <a href="#" className="hero-carousel__slideOverlay">
              <h3>Air purification trees</h3>
              <p>Products</p>
            </a>
          </div>
          <div className="hero-carousel__slide">
            <img src="img/home/hero-slide2.png" alt="" className="img-fluid" />
            <a href="#" className="hero-carousel__slideOverlay">
              <h3>Air purification trees</h3>
              <p>Products</p>
            </a>
          </div>
          <div className="hero-carousel__slide">
            <img src="img/home/hero-slide3.png" alt="" className="img-fluid" />
            <a href="#" className="hero-carousel__slideOverlay">
              <h3>Air purification trees</h3>
              <p>Products</p>
            </a>
          </div>
        </div>
      </section>
    </>
    )
}
export default Hero1;