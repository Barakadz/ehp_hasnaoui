import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function SampleNextArrow({ className, onClick }) {
	return (
		<div
			className={className}
			style={{

				marginRight: "0px"
			}}
			onClick={onClick}
		>	<FaChevronRight color="white" size={35} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '10%', zIndex:'-1'  }} />
		</div>

	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{


				marginLeft: "0px",

				zIndex: "4444",
			}}
			onClick={onClick}
		>
			<FaChevronLeft color="white" size={35} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '10%'}} />
		</div>

	);
}



const Convention =()=>{
    const settings_convention = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		autoplaySpeed: 4500,
		arrows: true,
        nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}
		]
	};
    return(
        <><div ><center>
     		<div class="section-title mt-4 ">
			<h2>Organismes conventionés :</h2>
			<img src="section-img.png" alt="#"/>
 		</div></center>

        <div class="containner">
				<div class="row">
 
					<div class="col-lg-12 col-md-12 col-12">   <Slider {...settings_convention}>
						 
							<div class="single-clients wow fadeIn" data-wow-delay="0.2s">
								<img src="convention1.jpg" className='img-fluid' alt="#"/>
							</div>
							<div class="single-clients wow fadeIn" data-wow-delay="0.4s">
								<img src="convention2.jpg" className='img-fluid'alt="#"/>
							</div>
							<div class="single-clients wow fadeIn" data-wow-delay="0.6s">
								<img src="convention3.jpg"className='img-fluid' alt="#"/>
							</div>
							<div class="single-clients wow fadeIn" data-wow-delay="0.8s">
								<img src="convention4.jpg" className='img-fluid'alt="#"/>
							</div>
							<div class="single-clients wow fadeIn" data-wow-delay="1s">
								<img src="convention5.jpg" className='img-fluid'alt="#"/>
							</div>
					  </Slider>
					</div>
				</div>
			</div>
           
            </div>
            </>
    )
}

export default Convention;