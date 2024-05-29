
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar=()=>{
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
    return(<div>
		<div>
		<nav className={`navbar navbar-expand-lg bg-white ${isSticky ? 'fixed-top' : ''}`} style={{zIndex:'111'}}>
		<div class="container-fluid  ">
		<div class="col-lg-3 col-md-4 col-12 ">
			<div className="d-flex justify-content-between">
				<a class="navbar-brand" href="#">
			<img src="logo.png" width={240}/>
		  </a>
		  
		  <button class="navbar-toggler" style={{width:'fit-content',height:'fit-content'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
			</div>
			
	</div>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		  
	  <div class="col-lg-7 col-md-10 col-12">
			<ul class="navbar-nav mx-auto mb-2 ">
			  
			

			  <li class="nav-item  " ><Link legacyBehavior href="/">
				<a  className={router.pathname === '/' ? 'nav-link active' : 'nav-link '} aria-current="page"  >Accueil</a>
			 </Link> </li>
			  
			  <li class="nav-item  " ><Link legacyBehavior href="/apropos">
			  <a className={router.pathname === '/apropos' ? 'nav-link active' : 'nav-link'}  aria-disabled="true">A propos</a>

			</Link>
			  </li>
			  <li class="nav-item dropdown  ">
				<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				  Services
				</a>   
				
 {/* }
				 <ul class="dropdown-menu">
				  <li><a class="dropdown-item" href="#">Action</a></li>
				  <li><a class="dropdown-item" href="#">Another action</a></li>
				  <li><hr class="dropdown-divider"/></li>
				  <li><a class="dropdown-item" href="#">Something else here</a></li>
				  
				</ul> 
	{*/}
			  </li>
			 

			  <li class="nav-item  " ><Link legacyBehavior href="/visitevirtuelle">
				<a  className={router.pathname === '/visitevirtuelle' ? 'nav-link active' : 'nav-link '} aria-current="page"  >Visite virtuelle</a>
			 </Link> </li>




			  <li class="nav-item  "><Link legacyBehavior href="/galerie">
				<a className={router.pathname === '/galerie' ? 'nav-link active ' : 'nav-link  '}  aria-disabled="true">Galerie</a>
				</Link>
			  </li>  
			  <li class="nav-item  ">
			  <Link legacyBehavior href="/actualites">
				<a className={router.pathname === '/actualites' ? 'nav-link active ' : 'nav-link  '}  aria-disabled="true">Actualités</a>
				</Link>
			  </li>
			  <li class="nav-item dropdown  ">
			 
				
				<a className={router.pathname === '/emploi' || router.pathname === '/candidature' || router.pathname === '/stage' ? 'nav-link active ' : 'nav-link  '}  aria-disabled="true">Carrières <i class="icofont-rounded-down "></i></a>

				 <ul class="dropdown-menu">
				 <Link  href="/emploi"><li class="dropdown-item"  >Offres d'emplois</li></Link> 
				 <Link  href="/candidature"><li class="dropdown-item" >Candidature spontanée</li></Link> 
				 <Link  href="/stage"> <li class="dropdown-item" >Demande de stage</li></Link>
				  
				</ul> 
	 
			  </li>
			 
			  <li class="nav-item "><Link legacyBehavior href="/contact">
				<a className={router.pathname === '/contact' ? 'nav-link active' : 'nav-link'}  aria-disabled="true">Contact</a>
				</Link>
			  </li>  <div class="   ">				  
<Link href="/rendez-vous"> 
						  <button class="btn   btnmenu mt-2  " style={{whiteSpace:'nowrap'}} type="submit">Prendre un Rendez-vous</button></Link>		
</div> 
			</ul>
		</div>
			

 		  </div> 
		</div>
	  </nav></div> 



	  
</div>

                );
}

export default Navbar;