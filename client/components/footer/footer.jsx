import Link from "next/link";
import { BsInfoCircle } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";

import { BsTelephone } from "react-icons/bs";

const Footer=()=>{
    return(
            <div  >
				 
            <footer id="footer" class="footer    mt-4" data-wow-delay="0.6s" style={{background:'linear-gradient(to left, #0d1b2a, #265b94)'}}>
			 
			 <div className="container p-4" >

				<div className="row">
					<div className="col-lg-4">
					<div class="single-footer">
					<div className="d-flex flex-row">
					<span class="icon d-flex align-items-center justify-content-center"><BsInfoCircle color="white" size="28"/></span>
<h2>Info :</h2>
						</div> 
						<p>L'établissement Hospitalier Privé Hasnaoui vise à développer de vrais pôles d'excellence en s'appuyant sur des valeurs fortes. Il concourt à être parmi les meilleurs établissements de référence pluridisciplinaire.</p>
<div className="d-flex flex-row gap-4 ">
<RiMapPinLine color="white"  size="30"/>
<p>
Bloc J05 MakamEl Chahid
Sidi Bel Abbes</p>

</div>
<div className="d-flex flex-row gap-4 mt-1 ">
<BsTelephone 
color="white"  size="26"/>
<p>

048 77 14 41 / 05 60 60 28 29</p>

</div>
<div className="d-flex flex-row gap-4 ">
<IoMailOpenOutline color="white"  size="26"/>
<p>
Bloc J05 MakamEl Chahid
Sidi Bel Abbes</p>

</div>					

							 </div><br/> 
 							 
			 
 					
					</div>
					<div className="col-lg-5">
						<div class="row">
						<div class="single-footer">
					<div className="d-flex flex-row">
					<span class="icon d-flex align-items-center justify-content-center"><MdOutlineMedicalServices color="white" size="28"/></span>
<h2>Our services :</h2>
						</div> <div className="d-flex flex-column flex-md-row">


						<div class="col-lg-6 col-md-6 col-12">
										<div>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Urgences Médico Chirurgicals</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Pédiaterie-Néonatalogie</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Cardiologie Interventionnelle</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Traumatologie-Orthopédie</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Hepato-Gastro-Entérologie</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Laboratoire d'analyses</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Chirugie Générale & Viscérale</p></div></Link>

										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
									 				
									<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Cardiologie Clinique</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Chirugie Cardio-Vasculaire</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Gynécologie Obstétrique</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Réanimation-Anesthésie</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Imagerie</p></div></Link>
										<Link href="/">	<div className="d-flex flex-row gap-2"><MdKeyboardDoubleArrowRight size="30" color="white"/><p>Dermatologie</p></div></Link>
										
									</div>
						</div>
									
								</div>
					</div></div>
					<div className="col-lg-3">
					<div class="single-footer">
					<div className="d-flex flex-row">
					<span class="icon d-flex align-items-center justify-content-center"><AiOutlineAppstore
					color="white" size="28"/></span>
<h2>Suivez-nous :</h2>
						</div>
							 
								<div class="d-flex">
									<a href="https://www.facebook.com/p/Hasnaoui-Private-Hospital-61551679854551/"class="mx-2" target="_blank"> <img src="facebook.png" width="40px" height="40px" alt="" srcset=""/></a>
									<a href="https://www.instagram.com/hasnaoui_private_hospital/" target="_blank"class="mx-2"> <img src="instegram.png" width="40px" height="40px" alt="" srcset=""/></a>
									<a href="https://www.linkedin.com/company/hasnaoui-private-hospital/" target="_blank"class="mx-2"><img src="linkedin.png" width="40px"height="40px" alt="" srcset=""/> </a>
									<a href="https://twitter.com/EHPH_HASNAOUI" target="_blank"class="mx-2"><img src="tewitter.png" width="40px"height="40px" alt="" srcset=""/> </a>
 									<a href="https://vm.tiktok.com/ZMMqc5cpA/" target="_blank"class="mx-2"><img src="tiktok.png" width="40px"height="40px" alt="" srcset=""/> </a>
									<a href="https://www.youtube.com/@EHP-HASNAOUI" target="_blank"class="mx-2"><img src="youtube.png" width="40px"height="" style={{verticalAlign:'bottom !important'}}alt="" srcset=""/> </a>

								</div>
							</div><br/> 
 							 
							<Link href="/rendez-vous"><button  class="btn"  
                            >Prendre Rendez-vous</button></Link>
					 
					</div>
				</div>



				</div>
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-12">
							<div class="copyright-content">
								<p>Copyright © 2024 Groupe des Sociétés HASNAOUI. All Rights Reserved-Designed by GSH 
									<br></br><b style={{opacity:'0.05'}}>Développer par BARAKA ABBES IBRAHIM</b>
								  </p>
							</div>
						</div>
					</div>
				</div>
			</div>
 		</footer>
            </div>
    )
}

export default Footer;