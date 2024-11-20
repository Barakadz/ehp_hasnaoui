import { useState, useEffect } from "react";
import Link from "next/link";
import { ImHappy } from "react-icons/im";

const testimonials = [
  {
    id: 1,
    rating: "★ ★ ★ ★ ★",
    text: "J ai été a l hôpital hasnaoui, comme malade,  accueil satisfaisant, rien à dire, bravo",
    name: "Darine",
   
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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 2) % testimonials.length); // Move to the next two testimonials
  };

  return (
    <div className="testimonials-container text-white">
      <div className="container py-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4">
  <div className="d-flex flex-row align-items-start justify-center">
     <h6 className="text-primary">Témoignages</h6>
  </div>
 <h2 className="fw-bold">Ce que disent les gens</h2>
  <p className="text-justify">Nous nous engageons à fournir des soins de qualité, en veillant au bien-être et à la satisfaction de nos patients.</p>
  <hr className="w-100" style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />

  <div className="happy-patients mt-4 d-flex align-items-center">

    <div class="d-flex flex-row mb-3 gap-3">
      <ImHappy color="white" size={65} />
      <div class="d-flex align-items-start flex-column mb-3">
        <h3 className="text-info fw-bold">9980+</h3>
        <p>Patients Satisfaits</p>
      </div>
    </div>

  </div>

           
          </div>

          {/* Right Section - Two Testimonials Side by Side */}
          <div className="col-md-8 mt-4">
  <div className="testimonial-slide d-flex gap-4">
    {/* First Testimonial */}
    <div className="testimonial-card p-4">
      <div className="rating mb-3">{testimonials[currentSlide].rating}</div>
      <p>{testimonials[currentSlide].text}</p>
      <div className="user-info d-flex align-items-center mt-4">
      <div
    className="user-initials me-3 d-flex justify-content-center align-items-center"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#007bff", // Circle background color
      color: "#fff", // Text color
      fontWeight: "bold",
      fontSize: "18px",
      textTransform: "uppercase", // Ensure the letter is uppercase
    }}
  >
    {testimonials[currentSlide].name.charAt(0)} {/* First letter of the name */}
  </div>
        <div>
          <h6 className="mb-0 text-info fw-bold">{testimonials[currentSlide].name}</h6>
         </div>
      </div>
    </div>

    {/* Second Testimonial */}
    <div className="testimonial-card p-4">
      <div className="rating mb-3">{testimonials[(currentSlide + 1) % testimonials.length].rating}</div>
      <p>{testimonials[(currentSlide + 1) % testimonials.length].text}</p>
      <div className="user-info d-flex align-items-center mt-4">
      <div
    className="user-initials me-3 d-flex justify-content-center align-items-center"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#007bff", // Circle background color
      color: "#fff", // Text color
      fontWeight: "bold",
      fontSize: "18px",
      textTransform: "uppercase", // Ensure the letter is uppercase
    }}
  >
    {testimonials[(currentSlide + 1) % testimonials.length].name.charAt(0)} {/* First letter of the name */}
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
        borderRadius: "50%", // Makes it circular
        display: "inline-block", // Ensures it's a block-level element for width/height to apply
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
