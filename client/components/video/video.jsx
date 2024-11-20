import React from 'react';

const Video = () => {
  return (
    <div>
      <section className="video-section prelative white p-8">
        <div className="section-padding video-overlay">
          <div className="row items-center">
            {/* Text Content */}
            <div className="col-lg-5  lg:mb-0" style={{marginTop:'6%'}}>
              <h2
                style={{
                  fontFamily: "'Merriweather', sans-serif", // Consistent font styling
                }}
                className="text-white font-bold text-3xl lg:text-4xl"
              >
                L'EHP Hasnaoui : un atout pour la santé des citoyens algériens
              </h2>
              <hr
                style={{
                  width: '100%',
                  height: '5px',
                  backgroundColor: '#23B6EA',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                className="my-4"
              />
              <p className="text-white text-lg lg:text-xl leading-relaxed">
                Découvrez notre établissement hospitalier privé et bénéficiez d'une prise en charge complète et de services de qualité, pensés pour votre bien-être.
              </p>
            </div>

            {/* Video Content */}
            <div className="col-lg-7">
              <video
                autoPlay
                controls
                muted
                loop
                style={{ height: 'auto', width: '100%' }}
                className="rounded-md shadow-lg"
                aria-label="Promotional video of EHP Hasnaoui"
              >
                <source src="ehph.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
