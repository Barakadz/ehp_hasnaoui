import { useState, useEffect } from "react";
import { ImHappy } from "react-icons/im";

const testimonials = [
  {
    id: 1,
    rating: "★ ★ ★ ★ ★",
    text: `L'établissement hospitalier Hasnaoui offre une expérience médicale de qualité grâce à sa propreté, son personnel attentif et ses délais d'attente raisonnables.`,
    name: "Samy Ouis",
  },
  {
    id: 2,
    rating: "★ ★ ★ ★ ★",
    text: "Bonne continuation c'est un plus pour ouest machaallah",
    name: "Hichem",
  },
  {
    id: 3,
    rating: "★ ★ ★ ★ ★",
    text: "Une Famille, un Groupe et une Algérie moderne Félicitations et bonne continuation",
    name: "Abdelhak",
  },
  {
    id: 4,
    rating: "★ ★ ★ ★ ★",
    text: "Un plus pour notre ville. Des médecins engagés et un accueil à la hauteur.",
    name: "Redouane Bousmaha",
  },
];

const Avis = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container text-white">
      <div className="container py-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h6 className="text-primary">Témoignages</h6>
            <h2 className="fw-bold">Ce que disent les gens</h2>
            <p>Nous nous engageons à fournir des soins de qualité, en veillant au bien-être et à la satisfaction de nos patients.</p>
            <hr className="w-100" style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
            <div className="happy-patients mt-4 d-flex justify-content-center justify-content-md-start align-items-center gap-3">
              <ImHappy color="white" size={50} />
              <div>
                <h3 className="text-info fw-bold">+85%</h3>
                <p>Patients Satisfaits</p>
              </div>
            </div>
          </div>

          {/* Right Section - Responsive Testimonials */}
          <div className="col-12 col-md-8">
            <div className="testimonial-slide d-flex flex-column flex-md-row gap-4 justify-content-center">
              {/* First Testimonial */}
              <div className="testimonial-card p-4 flex-grow-1">
                <div className="rating mb-3">{testimonials[currentSlide].rating}</div>
                <p>{testimonials[currentSlide].text}</p>
                <div className="user-info d-flex align-items-center mt-4">
                  <div
                    className="user-initials me-3 d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {testimonials[currentSlide].name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="mb-0 text-info fw-bold">{testimonials[currentSlide].name}</h6>
                  </div>
                </div>
              </div>

              {/* Second Testimonial */}
              <div className="testimonial-card p-4 flex-grow-1">
                <div className="rating mb-3">{testimonials[(currentSlide + 1) % testimonials.length].rating}</div>
                <p>{testimonials[(currentSlide + 1) % testimonials.length].text}</p>
                <div className="user-info d-flex align-items-center mt-4">
                  <div
                    className="user-initials me-3 d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {testimonials[(currentSlide + 1) % testimonials.length].name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="mb-0 text-info fw-bold">{testimonials[(currentSlide + 1) % testimonials.length].name}</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="d-flex justify-content-center mt-3">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    cursor: "pointer",
                    width: "12px",
                    height: "12px",
                    margin: "0 5px",
                    backgroundColor: currentSlide === index ? "#007bff" : "#ddd",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avis;
