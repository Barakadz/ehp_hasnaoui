import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios'; // Import axios
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ marginRight: '20px' }}
      onClick={onClick}
    >
      <FaArrowRight
        color="white"
        size={35}
        style={{
          padding: '9px',
          background: 'linear-gradient(to right, #23B6EA, #66DED4)',
          borderRadius: '10%',
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ marginLeft: '5px', zIndex: '1' }}
      onClick={onClick}
    >
      <FaArrowLeft
        color="white"
        size={35}
        style={{
          padding: '9px',
          background: 'linear-gradient(to right, #23B6EA, #66DED4)',
          borderRadius: '10%',
        }}
      />
    </div>
  );
}

const Medecin = () => {
  const [medecins, setMedecins] = useState([]); // State to hold API data
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch data from API
    const fetchMedecins = async () => {
      try {
        const response = await axios.get('https://ehp-hasnaoui.com/api/medecin/');
        setMedecins(response.data); // Save data in state
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchMedecins();
  }, []);

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
      { breakpoint: 2000, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 300, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
	<>
    <div className="container">
      <div className="text-center mx-auto mb-2 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
        <h2>Notre équipe médicale :</h2>
        <img src="section-img.png" alt="#" />
      </div>
      <Slider {...settings}>
        {medecins.map((medecin, index) => (
          <div key={index}>
            <div className="single-pf">
              <div className="mx-2 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={`./medecin/${medecin.image} `}alt={medecin.username} />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>{medecin.username}</h5>
                    <p className="text-primary mb-4">{medecin.poste}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    


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
    </div></div>
</>	
  );
};

export default Medecin;
