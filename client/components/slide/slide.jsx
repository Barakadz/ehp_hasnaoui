// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
   return (   
    <div >
    <Slider {...settings}>

      <div >
      <div class="single-slider slid"   >
					<div class="container " >
						<div class="row ">
							<div class=" ">
								<div class="text " > <br/><br/><br/><br/><br/>
									<h1  >  <span className="spanslide">Sidi bel abbes</span></h1><br/>
									<h1 class="text-e">Le 1er Etablissement Hospitalier Privé , vous ouvre ses portes</h1><br/>
 									 
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>
      <div>
            <div class="single-slider slide"  >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="text">
                        <div class="text "><br/><br/><br/><br/><br/><br/>
                        
                          <h1 class="text-e">Nous sommes disponibles pour vous servir 7 jours sur 7 et 24 /24.</h1><br/>
                        
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      
      <div class="single-slider slideee" >
					<div class="container">
						<div class="row">
							<div class="col-lg-7">
								 
							</div>
						</div>
					</div>
				</div>
      







    </Slider></div>
  );
};

export default HeroSlider;
