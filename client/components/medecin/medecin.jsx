import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import your arrow icons

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
	className={className}
	style={{

		marginRight: "20px"
	}}
	onClick={onClick}
    >
	<FaArrowRight color="white" size={35} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '10%' }} />
	    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
	<div
	className={className}
	style={{


		marginLeft: "5px",

		zIndex: "4444",
	}}
	onClick={onClick}
>
	<FaArrowLeft color="white" size={35} style={{ padding: '9px', background: "linear-gradient(to right, #23B6EA, #66DED4)", borderRadius: '10%' }} />
</div>
  );
}

const Medecin = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
	<>
    <div className='container'>
       <div className='container'><div class="text-center mx-auto mb-2 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
				<h2>Notre équipe médicale :</h2>
				<img src="section-img.png" alt="#"/>            </div>
    <Slider {...settings}>
	
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="imagemedecin1.jfif" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr YOUSFI Asmaa</h5>
								<p class="text-primary mb-4 text-uppercase" >Medecin Généraliste </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
      
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="bentouch_omar.jfif" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr BENATTOUCHE Omar Farouk</h5>
								<p class="text-primary mb-4">Pharmacien </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
      
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="imagemedecin5.jfif" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
                            <h5>Dr. Ikhlaf Wassila</h5>	
							<p class="text-primary mb-4">Pharmacienne </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
      
       <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="IMG_9317.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
							<h5>Dr ABBAD Soufyane</h5>
								<p class="text-primary mb-4">Médecin Spécialiste en Pédiatrie et néonatologie </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
      

      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="IMG_9308.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr. Hasnaoui Amina</h5>
								<p class="text-primary mb-4">Réanimation-Anesthésie </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
  
       
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="imagemedecin2.jfif" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr. NEGADI Hadjer</h5>
								<p class="text-primary mb-4">Médecin généraliste </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
	  
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="benali.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr BENALI Asmaa</h5>
								<p class="text-primary mb-4">Médecin spécialiste en Cardiologie</p>
								 
							</div>
						</div>
					</div></div>   
      </div>
	  
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="lakhel.jpg" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr LEKHAL Ahmed Malik</h5>
								<p class="text-primary mb-4">Chirurgien Cardio Vasculaire </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
	  
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="atou.jfif" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr ATTOU Abdelkader</h5>
								<p class="text-primary ">Médecin Spécialiste En Dermatologie </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
	  
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="IMG_9267.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
							<h5>Dr HAMMAD Salim</h5>
								<p class="text-primary mb-4">Médecin Spécialste en Imagérie Médicale et Radiologie </p>
								 
							</div>
						</div>
					</div></div>   
      </div>    
     
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="IMG_9279.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>Dr LAZZAZ Anes</h5>
								<p class="text-primary mb-4">Pharmcien Spécialiste En Biologie Médicale </p>
								 
							</div>
						</div>
					</div></div>   
      </div>    
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="IMG_9283.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
							<h5>Dr HASNAOUI Ahmed </h5>
								<p class="text-primary mb-4">Médecin Spécialiste en Gynécologie obstétrique </p>
								 
							</div>
						</div>
					</div></div>   
      </div>    
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="IMG_9322.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
								<h5>DR SAOULI Tarik</h5>
								<p class="text-primary mb-4">Chiriurgien Général </p>
								 
							</div>
						</div>
					</div></div>   
      </div>    
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							<div class="overflow-hidden">
								<img class="img-fluid" src="IMG_9288.JPG" alt=""/>
							</div>
							<div class="team-text bg-light text-center p-4">
							<h5>Dr BENSAID Zouaouia </h5>
								<p class="text-primary mb-4">Médecin Spécialiste en Gynécologie obstétrique</p>
								 
							</div>
						</div>
					</div></div>   
      </div>    
	  
        

     



    </Slider></div>
    </div>




	<div className='container'>
       <div className='container'>
	   <div class="text-center mx-auto mb-2 mt-2 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
				<h2>Médecins conventionnés :</h2>
				<img src="section-img.png" alt="#"/>            </div>
    <Slider {...settings}>
 
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
						 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr MOUSSAOUI Fethi</h5>
								<p class="text-primary">CARDIOLOGUE </p> 
							</div>
						</div>
					</div></div>   
      </div>
      
      <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr OUKIL Amirouche</h5>
								<p class="text-primary">Chirurgie Cardio Vasculaire </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
      
     
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr BELHANDOUZ Lahcen </h5>
								<p class="text-primary">Chirurgie Générale</p>
							</div>
						</div>
					</div></div>   
      </div>
        
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr BENAROUSSI Sid Ahmed</h5>
								<p class="text-primary">Chirurgie Vasculaire</p>
								
							</div>
						</div>
					</div></div>   
      </div>
     

	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr MOUMENE Kheir Eddine </h5>
								<p class="text-primary  ">Chirurgie Viscérale</p>
							</div>
						</div>
					</div></div>   
      </div>
     
	 
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr BENATTOUCHE Omar Farouk </h5>
								<p class="text-primary ">Pharmacien</p>
								 
							</div>
						</div>
					</div></div>   
      </div>


	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. ALKHALILI Fadia</h5>
								<p class="text-primary">Gynécologie Obstétrique </p>
								  
							</div>
						</div>
					</div></div>   
      </div>


	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. BERREBAH Soumia</h5>
								<p class="text-primary">Gynécologie Obstétrique </p>
								 
							</div>
						</div>
					</div></div>   
      </div>


	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr EL ABBASSI Ismahen</h5>
								<p class="text-primary">Gynécologie Obstétrique </p>
								  
							</div>
						</div>
					</div></div>   
      </div>

	  
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. BELHADJ Nabila</h5>
								<p class="text-primary  ">Gynécologie Obstétrique </p>
								 
							</div>
						</div>
					</div></div>   
      </div>

	  
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. ALLOUANE Zoubida</h5>
								<p class="text-primary  ">Gynécologie Obstétrique  </p>
								   
							</div>
						</div>
					</div></div>   
      </div>

	  
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. MEZOUARI Yamina</h5>
								<p class="text-primary  ">Gynécologie Obstétrique </p>
								 
							</div>
						</div>
					</div></div>   
      </div>

	  
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. BENYELLES Nawel</h5>
								<p class="text-primary ">Gynécologie Obstétrique </p>
								
							</div>
						</div>
					</div></div>   
      </div>

	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. BOUABDALLAH Nawal</h5>
								<p class="text-primary  ">Gynécologie Obstétrique </p>
								 	
							</div>
						</div>
					</div></div>   
      </div>

	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. BOUHAFS Mustapha Nazim</h5>
								<p class="text-primary  ">Gynécologie Obstétrique </p>
								  	
							</div>
						</div>
					</div></div>   
      </div>

	  
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr.  SOULIMANE Amine</h5>
								<p class="text-primary ">Gynécologie Obstétrique </p>
								 
							</div>
						</div>
					</div></div>   
      </div>

	  
	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. ALLAL Adlane</h5>
								<p class="text-primary ">Gynécologie Obstétrique </p>
								 
							</div>
						</div>
					</div></div>   
      </div>


	  <div>
      <div class="single-pf"><div class="mx-2 wow fadeInUp" data-wow-delay="0.1s">
						<div class="team-item position-relative rounded overflow-hidden">
							 
							<div class="team-text bg-light text-center p-4">
							<h5>Dr. BENZEGUIR Chahinez </h5>
								<p class="text-primary ">Gynécologie Obstétrique </p>
								 
							</div>
						</div>
					</div></div>   
      </div>
    </Slider></div>
    </div>
</>	
  );
};

export default Medecin;
