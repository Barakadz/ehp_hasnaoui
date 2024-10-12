import Link from "next/link";

 const Topbar = () => {
	return (

		<>
			<div className="topbar">
				<div className="row">
					<div className="col-lg-6 col-md-4 col-12  ">
						<div class="d-flex infocontact">
							<div className="space"><a href="https://www.google.com/maps/place/Etablissement+Hospitalier+Priv%C3%A9+HASNAOUI/@35.1791377,-0.6318223,15z/data=!4m2!3m1!1s0x0:0x23bae99ee4007340?sa=X&amp;ved=1t:2428&amp;ictx=111" target="_blank"><i class="icofont-google-map"  ></i>Localisation</a> </div>
							<div className="space" ><a href="tel:048771441" ><i class="icofont-phone" ></i>048 77 14 41</a> </div>
							<div className="space mobile"><a href="mailto:info@ehp-hasnaoui.com" >  <i class="icofont-email"  ></i>info@ehp-hasnaoui.com</a></div>


						</div>

					</div>
					<div className="col-lg-2 col-md-4 col-12  mobile">
						<center><img src="logo24.jpg" width={50} /></center>
					</div>

					<div className="col-lg-4 col-md-4 col-12  ">
						<div className="d-flex infocontact">
						 <Link legacyBehavior href="/login">
											<div className="center"><a><i class="icofont-user-alt-2"></i>Mon compte</a></div>		 

							</Link>
						</div>
					</div>

				</div>

			</div>
		</>

	)
}

export default Topbar;