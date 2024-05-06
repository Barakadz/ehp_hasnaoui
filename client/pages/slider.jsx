import React, { useState } from 'react';
import Lightbox from 'react-images';

const MyLightbox = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.caption}
          onClick={() => openLightbox(index)}
          style={{ width: '200px', margin: '5px', cursor: 'pointer' }}
        />
      ))}
      <Lightbox
        images={images}
        isOpen={lightboxIsOpen}
        currentImage={currentImage}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default MyLightbox;
