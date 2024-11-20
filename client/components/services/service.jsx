import React, { useState } from "react";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

const Services = ({ services }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleDescription = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const truncateText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    return (
        <section className="service-section prelative white p-8">
            <div className="section-padding service-overlay">
                <div className="row justify-content-center text-center presentation">
                    <h2 style={{ color: "#071939", fontWeight: "bold" }}>
                        Nos spécialités
                    </h2>
                    <p>
                        À l'Établissement Hospitalier Privé Hasnaoui, nous
                        proposons une expertise chirurgicale diversifiée, adaptée
                        aux besoins spécifiques de nos patients et réalisée avec
                        une précision et un professionnalisme exemplaires.
                    </p>
                    <div className="container">
                        <div className="row justify-content-center">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center text-center mx-2 p-4 chif my-4"
                                >
                                    <div className="chift">
                                        <img
                                            src={service.logo}
                                            className="img-fluid"
                                            alt="Salle d'operation"
                                            style={{
                                                maxHeight: "40px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                    <span
                                        className="counter fw-bold mt-4"
                                        style={{
                                            fontSize: "1.25rem",
                                            marginBottom: "10px",
                                            color: "#23B6EA",
                                        }}
                                    >
                                        {service.title}
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "1.09rem",
                                            lineHeight: "1.5",
                                            color: "black",
                                            textAlign: "justify",
                                        }}
                                    >
                                        {expandedIndex === index
                                            ? service.description
                                            : truncateText(service.description, 80)}
                                    </p>
                                    <button
                                        onClick={() => toggleDescription(index)}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {expandedIndex === index ? (
                                            <FaRegSquareMinus color="black" size="30" />
                                        ) : (
                                            <FaRegSquarePlus color="black" size="30" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
