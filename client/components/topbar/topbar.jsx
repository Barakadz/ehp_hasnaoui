
const Topbar = () => {
	return (

		<>
			<div className="topbar">
				<div className="row">
					<div className="col-lg-6 col-md-4 col-12  ">
						<div class="d-flex infocontact">
							<div className="space"><a href="https://www.google.com/maps/place/Etablissement+Hospitalier+Priv%C3%A9+HASNAOUI/@35.1791377,-0.6318223,15z/data=!4m2!3m1!1s0x0:0x23bae99ee4007340?sa=X&amp;ved=1t:2428&amp;ictx=111" target="_blank"><i class="icofont-google-map"  ></i>Localisation</a> </div>
							<div className="space" ><a href="tel:048771441" ><i class="icofont-phone" ></i>048 77 14 41</a> </div>
							<div className="space"><a href="mailto:info@ehph-hasnaoui.com" >  <i class="icofont-email"  ></i>info@ehph-hasnaoui.com</a></div>


						</div>

					</div>
					<div className="col-lg-2 col-md-4 col-12  ">
						<img src="logo24.jpg" width={50} />
					</div>

					<div className="col-lg-4 col-md-4 col-12  ">
						<div className="d-flex infocontact">
							<div className="center"><i class="icofont-user-alt-2"></i><a>Mon compte</a></div>
						</div>
					</div>

				</div>

			</div>
		</>

	)
}

export default Topbar;