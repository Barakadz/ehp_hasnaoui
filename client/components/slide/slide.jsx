// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'animate.css';
import { LiaFirstAidSolid } from "react-icons/lia";
import { BsPrescription2 } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";
import { FaHospitalUser } from "react-icons/fa";

function SampleNextArrow({ className, onClick }) {
	return (
		<div
			className={className}
			style={{

				marginRight: "60px"
			}}
			onClick={onClick}
		>	<FaChevronRight color="white" size={40} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '50%' }} />
		</div>

	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{


				marginLeft: "40px",

				zIndex: "110",
			}}
			onClick={onClick}
		>
			<FaChevronLeft color="white" size={40} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '50%' }} />
		</div>

	);
}

function SampleNextArrowQalite(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{ marginRight: '20px' }}
			onClick={onClick}
		>		<FaChevronRight color="white" size={40} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '10%' }} />
		</div>
	);
}

function SamplePrevArrowQalite(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{ zIndex: '110', marginRight: '130px' }}
			onClick={onClick}
		>
			<FaChevronLeft color="white" size={40} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '10%' }} />
		</div>
	);
}
const HeroSlider = () => {
	const settings = {

		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4500,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,


	};
	const settings_qualite = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4500,
		arrows: true,
		nextArrow: <SampleNextArrowQalite />,
		prevArrow: <SamplePrevArrowQalite />,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 300,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};
	return (
		<div >
			<Slider {...settings}>

				<div >
				<div class="single-slider slid ">
  <div class="container d-flex align-items-center justify-content-center h-100">
    <div class="row">
      <div class="col">
        <div class="text animate__animated animate__fadeInUp animate__slow ">
          <h1><span class="spanslide  ">Sidi bel abbes</span></h1>
          <h1 class="text-e">L'établissement Hospitalier Privé HASNAOUI,  vous ouvre ses portes</h1>
        </div>
      </div>
    </div>
  </div>
</div>

				</div>
				<div>
					<div class="single-slider slide  "  >
					<div class="container d-flex align-items-center justify-content-center h-100">
							<div class="row">
								<div class="col-lg-7">
									<div class="text animate__animated animate__fadeInUp animate__slow animate__repeat-3">
 
											<h1 class="text-e">Nous sommes disponibles pour vous servir 7 jours sur 7 et 24 /24.</h1>


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
				<div class="single-slider slide_imagerie"  >
				<div class="container d-flex align-items-center justify-content-center h-100">
						<div class="row">
							<div class="col-lg-7">
								<div class="text animate__animated animate__fadeInUp animate__slow"> 
									<h1  >  <span class="text-e">Imagerie Médicale</span></h1> 
									<h1 class="text-e">Mammographie - Echographie - <br className='brbr'/>Radiologie - Scanner - IRM</h1> 



								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="single-slider slidd"  >
				<div class="container d-flex align-items-center justify-content-center h-100">
						<div class="row">
							<div class="col-lg-7">
								<div class="text animate__animated animate__fadeInUp animate__slow"> 
									<h1 class="text-e">La Seule salle Hybride en Algérie dotée de la dernière technologie<br /> d'équipements médicaux </h1>

								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="single-slider slidlab"  >
				<div class="container d-flex align-items-center justify-content-center h-100">
						<div class="row">
							<div class="col-lg-7">
								<div class="text animate__animated animate__fadeInUp animate__slow animate__repeat-2">
									 
									<h1  >  <span class="text-e ">Laboratoire d'analyses</span></h1> 
									<h1 class="text-e">Obtenez des résultats Fiables</h1> 


								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="single-slider slide_apropos" >
					<div class="container">
						<div class="row">
							<div class="col-lg-7">
								<div class="text">


								</div>
							</div>
						</div>
					</div>
				</div>



			</Slider>







			<section class="schedule">
				<div class=" container">
					<div class="schedule-inner" >
						<div class="row">
							<div class="" >	<Slider {...settings_qualite}>
								<div class="col-lg-12 col-md-6 col-12 wow fadeIn" data-wow-delay="0.1s">

									<div class="single-schedule first mx-2">
										<div class="inner">
 											<LiaFirstAidSolid color='white' size={50}/>
 											<div class="single-content">
												<h4>Satisfaction des parties intéressées :</h4>
												<p class="">Notre priorité absolue est d’assurer la satisfaction de nos patients en fournissant des services de qualité, efficaces et personnalisés. Nous tenons à établir une relation de confiance avec nos patients, en restant à leur écoute, en respectant leur dignité et leur confidentialité tout en répondant à leurs besoins individuels.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12 col-md-6 col-12  wow fadeIn" data-wow-delay="0.3s">

									<div class="single-schedule middle mx-2">
										<div class="inner">
										<FaHospitalUser color='white' size={50}/>
										<div class="single-content">

												<h4>Respect des exigences réglementaires  :</h4>
												<p>Nous nous engageons à respecter toutes les exigences légales, réglementaires et professionnelles applicables à notre domaine d’activité. Nous maintenons nos connaissances à jour et nous nous conformons aux normes et réglementations en vigueur dans le secteur de la santé.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div class="col-lg-12 col-md-6 col-12  wow fadeIn" data-wow-delay="0.5s">

									<div class="single-schedule middle mx-2">
										<div class="inner">
											 <MdOutlineSecurity color='white' size={50}/>

											<div class="single-content">

												<h4>Sécurité des Patients, des Travailleurs et de l'Environnement :</h4>
												<p >L'EHP Hasnaoui place la sécurité et la protection de la santé de ses patients et travailleurs au cœur de ses préoccupations. En identifiant et en réduisant proactivement les risques d’incidents, d’accidents et d'impact environnemental.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12 col-md-6 col-12  wow fadeIn" data-wow-delay="0.7s">
									<div class="single-schedule middle mx-2">
										<div class="inner">
											 <FaMedal color='white' size={50}/>
											<div class="single-content">

												<h4>Amélioration continue :</h4>
												<p>
													Nous nous engageons à améliorer continuellement nos processus, nos services et notre système de gestion de la qualité. Nous évaluons régulièrement nos performances, en consultons nos travailleurs, identifions les opportunités d’amélioration et mettons en œuvre des actions pour garantir nos prestations de soins.</p>
											</div>
										</div>
									</div>
								</div>
							</Slider>
							</div>
						</div>
					</div>
				</div>
			</section>





		</div>
	);
};

export default HeroSlider;
