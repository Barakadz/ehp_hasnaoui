
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
			  
			
			<li class="nav-item">
        <a class="nav-link mx-4" href="#">Link</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link mx-4" href="#">Link</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link mx-4" href="#">Link</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link mx-4" href="#">Link</a>
      </li>
			</ul>
		</div>
			

 		  </div><div class="col-lg-2 col-12">	<Link href="/rendez-vous"> 
						  <button class="btn  " type="submit">Prendre un Rendez-vous</button></Link>		
</div>
		</div>
	  </nav></div> 



	  
</div>

                );
}

export default Navbar;