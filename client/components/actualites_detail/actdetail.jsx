import axios from "axios";
import { useState, useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const ActDetail = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActualiteDetail = async () => {
      // Reset states when id changes
      setLoading(true);
      setError(null);

      // Only proceed if id exists
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://ehp-hasnaoui.com/api/act/${id}`);
        
        // Check if data is received
        if (response.data && response.data.length > 0) {
          setData(response.data);
        } else {
          setError(new Error("No data found"));
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching actualité details:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchActualiteDetail();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Chargement...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>Erreur de chargement : {error.message}</p>
      </div>
    );
  }

  // No data state
  if (data.length === 0) {
    return (
      <div className="text-center py-10">
        <p>Aucune actualité trouvée</p>
      </div>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <section className="news-single section" key={index}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="single-main">
                      <div className="news-head">
                        <img 
                          src={`https://ehp-hasnaoui.com/images_act/${item.image}`} 
                          alt={item.titre || "Image de l'actualité"}
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = '/placeholder-image.jpg'; // Fallback image
                          }}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <h2 className="news-title">{item.titre}</h2>
                      <div className="meta">
                        <div className="meta-left">
                          <span className="date flex items-center">
                            <MdDateRange color='#65ddd5' size={25} className="mx-2"/>
                            {item.date}
                          </span>
                        </div>
                      </div>
                      <div className="news-text">
                        <p 
                          dangerouslySetInnerHTML={{ 
                            __html: item.description 
                          }}
                        /> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="main-sidebar">
                 
                  <div className="single-widget category">
                    <h3 className="title">Nos Services :</h3>
                    <ul className="categor-list">
					<Link href="/service_urlogie">	<div className="d-flex flex-row gap-2"><img src="/neurone.png"className="h-50" alt="" srcset="" /><p className="mt-2">Urologie</p></div></Link>
										<Link href="/service_pediaterie">	<div className="d-flex flex-row gap-2"><img src="/pediatrie.png" alt=""className="h-50" srcset="" /><p className="mt-2">Pédiatrie-Néonatalogie</p></div></Link>
										<Link href="/service_traumatologie">	<div className="d-flex flex-row gap-2"><img src="/os.png"className="h-50" alt="" srcset="" /><p className="mt-2">Traumatologie-Orthopédie</p></div></Link>
										<Link href="/service_gastro">	<div className="d-flex flex-row gap-2"><img src="/gastro-enterologie.png"className="h-50" alt="" srcset="" /><p className="mt-2">Hepato-Gastro-Entérologie</p></div></Link>
										<Link href="/service_cardioloie_clinique">	<div className="d-flex flex-row gap-2"><img src="/cardiologiee.png"className="h-50" alt="" srcset="" /><p className="mt-2">Cardiologie Clinique</p></div></Link>
										<Link href="/service_gynecologie">	<div className="d-flex flex-row gap-2"><img src="/gynecologie.png"className="h-50" alt="" srcset="" /><p className="mt-2">Gynécologie Obstétrique</p></div></Link>
 
										<Link href="/service_reanimation">	<div className="d-flex flex-row gap-2"><img src="/reanimateur.png" className="h-50"alt="" srcset="" /><p className="mt-2">Réanimation-Anesthésie</p></div></Link>
										<Link href="/service_imagerie">	<div className="d-flex flex-row gap-2"><img src="/tomodensitometrieee.png"className="h-50" alt="" srcset="" /><p className="mt-2">Imagerie</p></div></Link>
										<Link href="/service_cardiovasculaire">	<div className="d-flex flex-row gap-2"><img src="/cardiologiez.png"className="h-50" alt="" srcset="" /><p className="mt-2">Chirurgie Cardio-Vasculaire</p></div></Link>
										<Link href="/service_laboratoireanalyse">	<div className="d-flex flex-row gap-2"><img src="/rapport-scientifique.png"className="h-50" alt="" srcset="" /><p className="mt-2">Laboratoire d\'analyses</p></div></Link>
										<Link href="/service_consultation">	<div className="d-flex flex-row gap-2"><img src="/dermatologie.png"className="h-50" alt="" srcset="" /><p className="mt-2">Consultation Générale</p></div></Link>
										<Link href="/service_chirugie">	<div className="d-flex flex-row gap-2"><img src="/equipe-medicale.png" alt="" srcset="" className="h-50" /><p className="mt-2">Chirurgie Générale & Viscérale</p></div></Link>
										
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ActDetail;