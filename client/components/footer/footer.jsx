import Link from "next/link";


const Footer=()=>{
    return(
            <div  >
				 
            <footer id="footer" class="footer  wow fadeInUp mt-4" data-wow-delay="0.6s" style={{background:'linear-gradient(to left, #23B6EA, #66DED4)'}}>
			 
			 <div className="container p-4" >

				<div className="row">
					<div className="col-lg-4">
					<div class="single-footer">
					<h2>Plan du site :</h2>
					<div class="row">
									<div class="col-lg-6 col-md-6 col-12">
										<div>
										<Link href="/">	<li><i class="fa fa-caret-right" aria-hidden="true"></i>Accueil</li></Link>
										<Link href="/apropos">	<li><i class="fa fa-caret-right" aria-hidden="true"></i>A propos</li></Link>
										<Link href="">	<li><i class="fa fa-caret-right" aria-hidden="true"></i>Services</li></Link>
											<Link href="#"><li><i class="fa fa-caret-right" aria-hidden="true"></i>Visite virtuelle</li></Link>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
									 				
										<Link href="#">	<li><i class="fa fa-caret-right" aria-hidden="true"></i>Cariéres</li></Link>	

										<Link href="#">	<li><i class="fa fa-caret-right" aria-hidden="true"></i>Actualités</li></Link>
										<Link href="/contact">	<li><i class="fa fa-caret-right" aria-hidden="true"></i>Contact</li></Link>
 									 
										 
									</div>
								</div>
							 </div><br/> 
 							 
			 
 					
					</div>
					<div className="col-lg-4">
					<div class="single-footer">
								<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13044.387540437854!2d-0.6318223!3d35.1791377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f01f802624f5b%3A0x23bae99ee4007340!2sEtablissement%20Hospitalier%20Priv%C3%A9%20HASNAOUI!5e0!3m2!1sfr!2sdz!4v1713172662411!5m2!1sfr!2sdz" width="300" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

							</div>
					</div>
					<div className="col-lg-4">
					<div class="single-footer">
								<h2>Suivez-nous :</h2>
							 
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