// BackToTop.js
import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
         setShowButton(true);
    
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      id="backToTop" href='tel:048771441'
      className=" btn-primary heartbeat" 
       style={{ display: showButton ? 'block' : 'none',borderRadius:'50%',background:'blue',padding:'20px' }}
    >
<i class="icofont-ui-call text-white"></i>    </a>
  );
};

export default BackToTop;
