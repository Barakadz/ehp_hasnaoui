
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar=()=>{
	const router = useRouter();

    return(<div>
		<div><nav class="navbar navbar-expand-lg bg-white">
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
			  
			

			  <li class="nav-item"><Link legacyBehavior href="/">
				<a  className={router.pathname === '/' ? 'nav-link active' : 'nav-link'} aria-current="page"  >Accueil</a>
			 </Link> </li>
			  
			  <li class="nav-item">
				<a class="nav-link" href="#">A propos</a>
			  </li>
			  <li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				  Services
				</a>
				<ul class="dropdown-menu">
				  <li><a class="dropdown-item" href="#">Action</a></li>
				  <li><a class="dropdown-item" href="#">Another action</a></li>
				  <li><hr class="dropdown-divider"/></li>
				  <li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" aria-disabled="true">Visite vertuelle</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" aria-disabled="true">Galerie</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" aria-disabled="true">Actualités</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" aria-disabled="true">Cariéres</a>
			  </li>
			  <li class="nav-item"><Link legacyBehavior href="/contact">
				<a className={router.pathname === '/contact' ? 'nav-link active' : 'nav-link'}  aria-disabled="true">Contact</a>
				</Link>
			  </li>  			  

			</ul>
		</div>
			

 		  </div><div class="col-lg-2 col-12">			 
						  <button class="btn  " type="submit">Prendre un Rendez-vous</button>
</div>
		</div>
	  </nav></div> 



	  
</div>

                );
}

export default Navbar;