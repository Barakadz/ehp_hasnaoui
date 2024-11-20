import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-white ${isSticky ? 'fixed-top' : ''}`} style={{ zIndex: 1030 }}>
        <div className="container-fluid">
          <div className="col-lg-3 col-md-4 col-12">
            <div className="d-flex justify-content-between">
              <Link href="/" className="navbar-brand">
                <img src="logo.png" width={240} alt="Logo" />
              </Link>

              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                style={{ width: 'fit-content', height: 'fit-content' }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-lg-7 col-md-10 col-12">
              <ul className="navbar-nav mx-auto mb-2">
                <li className="nav-item">
                  <Link href="/" legacyBehavior>
                    <a className={router.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                      Accueil
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/apropos" legacyBehavior>
                    <a className={router.pathname === '/apropos' ? 'nav-link active' : 'nav-link'}>
                      A propos
                    </a>
                  </Link>
                </li>

                {/* Services Mega Menu */}
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div className="dropdown-menu   " style={{ 
					width:'max-content',
                     borderTop: '2px solid #23B6EA',
                    borderRadius: '0',
                     right: '0',
					left: '25%',
                   }}>
                    <div className="container">
                      <div className="row my-4">
                        <div className="col-md-4 mb-3 mb-md-0">
                          <div className="list-group list-group-flush">
                            {[
                              { icon: '/neurone.png', text: 'Urologie',href:'/service_urlogie' },
                              { icon: '/pediatrie.png', text: 'Pédiatrie-Néonatalogie',href:'service_pediaterie'},
                              { icon: '/cardiologie.png', text: 'Cardiologie Interventionnelle',href:'' },
                              { icon: '/os.png', text: 'Traumatologie-Orthopédie',href:'' },
                              { icon: '/gastro-enterologie.png', text: 'Hepato-Gastro-Entérologie',href:'' }
                            ].map((item, index) => (
                              <Link href={item.href} key={index} className="list-group-item list-group-item-action border-0 ">
                                <div className="d-flex align-items-center text-nowrap">
                                  <img src={item.icon} alt="" className="me-2" style={{ width: '30px', height: '30px' }} />
                                  <span>{item.text}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                          <div className="list-group list-group-flush">
                            {[
                              { icon: '/cardiologiee.png', text: 'Cardiologie Clinique',href:'' },
                              { icon: '/gynecologie.png', text: 'Gynécologie Obstétrique' ,href:'/service_gynecologie'},
                              { icon: '/reanimateur.png', text: 'Réanimation-Anesthésie' ,href:''},
                              { icon: '/tomodensitometrieee.png', text: 'Imagerie' ,href:'/service_imagerie'},
                              { icon: '/dermatologie.png', text: 'Dermatologie' ,href:''}
                            ].map((item, index) => (
                              <Link href={item.href} key={index} className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-center">
								<img src={item.icon} alt="" className="me-2" style={{ width: '30px', height: '30px' }} />
								<span>{item.text}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="list-group list-group-flush">
                            {[
                              { icon: '/cardiologiez.png', text: 'Chirurgie Cardio-Vasculaire',href:'/service_cardiovasculaire'  },
                              { icon: '/rapport-scientifique.png', text: 'Laboratoire d\'analyses',href:'/'  },
                              { icon: '/equipe-medicale.png', text: 'Chirurgie Générale & Viscérale',href:'/service_chirugie' }
                            ].map((item, index) => (
                              <Link href={item.href} key={index} className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-center">
								<img src={item.icon} alt="" className="me-2" style={{ width: '30px', height: '30px' }} />
								<span>{item.text}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link href="/visitevirtuelle" legacyBehavior>
                    <a className={router.pathname === '/visitevirtuelle' ? 'nav-link active' : 'nav-link'}>
                      Visite virtuelle
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/galerie" legacyBehavior>
                    <a className={router.pathname === '/galerie' ? 'nav-link active' : 'nav-link'}>
                      Galerie
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/actualites" legacyBehavior>
                    <a className={router.pathname === '/actualites' ? 'nav-link active' : 'nav-link'}>
                      Actualités
                    </a>
                  </Link>
                </li>

                 
                <li className="nav-item">
                  <Link href="/contact" legacyBehavior>
                    <a className={router.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                      Contact
                    </a>
                  </Link>
                </li>

                <div className="mt-2 mx-4">
                  <Link href="/rendez-vous">
                    <button className="btn btnmenu" style={{ whiteSpace: 'nowrap' }}>
                      Prendre un Rendez-vous
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;