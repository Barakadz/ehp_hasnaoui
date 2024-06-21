import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 


const MyLightbox = ({ images,title }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const settings_galeries = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
 
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
      <div className="gallery">
      <div class="container  mt-2">
				<div class="row ">
					<div class="col">
						<div class=" text-center mt-4">
							<h2>{title + ' :'}</h2>
							<img src="section-img.png" alt="#"/>
 						</div>
					</div>
				</div>
			</div>
        <Slider {...settings_galeries}>
        {images.map((image, index) => (<div className='mx-4'>
          <img
            key={index}
            src={`https://www.ehp-hasnaoui.com/uploads/galerie/${image}`}
            alt={`Image ${index}`}
            className=''
            onClick={() => openLightbox(index)}
            style={{
                cursor: 'pointer',
                maxWidth: '100%',
                maxHeight: '100%',
                marginRight: '10px',
                transition: 'opacity 0.3s',
                opacity: 1,
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = 0.6)}
              onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          /></div>
        ))}</Slider>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={`https://www.ehp-hasnaoui.com/uploads/galerie/${images[photoIndex]}`}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={title}

        />
      )}
    </>
  );
};

export default MyLightbox;
