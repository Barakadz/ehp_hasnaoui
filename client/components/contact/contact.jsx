const Contact=()=>{
    return(
        <>
            <section class="contact-us section">
			<div class="container">
				<div class="inner">
					<div class="row"> 
						<div class="col-lg-6">
							<div class="contact-us-left">
  								<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13044.387540437854!2d-0.6318223!3d35.1791377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f01f802624f5b%3A0x23bae99ee4007340!2sEtablissement%20Hospitalier%20Priv%C3%A9%20HASNAOUI!5e0!3m2!1sfr!2sdz!4v1713175879749!5m2!1sfr!2sdz" width="600" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 							</div>
						</div>
						<div class="col-lg-6">
							<div class="contact-us-form">
								<h2>Contactez-nous</h2>
								<p>Si vous avez des questions, n’hésitez pas à nous contacter.									.</p>
 							 
									 
									 
											<div class="row">
												<div class="col-lg-6">
													<div class="form-group mb-2">
														<input type="text" name="name" placeholder="Nom" required=""/>
													</div>
												</div>
												<div class="col-lg-6">
													<div class="form-group mb-2">
														<input type="email" name="email" placeholder="Mail" required=""/>
													</div>
												</div>
												<div class="col-lg-6">
													<div class="form-group mb-2">
														<input type="text" name="phone" placeholder="Téléphone" required=""/>
													</div>
												</div>
												<div class="col-lg-6">
													<div class="form-group mb-2">
														<input type="text" name="subject" placeholder="Sujet" required=""/>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="form-group">
														<textarea name="message" placeholder="Message" required="" rows="5"></textarea>
													</div>
												</div>
												 
										 
								 
									 
									 
									    <div class="g-recaptcha" 
                                data-sitekey="6Lc-K0ooAAAAANnZNCfPAiGdasl6jS7LzfgpZtnK" ></div>                        </div>
									</div>
									<div class="col-12"><div id="response" style={{color:'red'}}></div></div>
		
										<div class="col-12">
											<button class="btn btn-primary w-100 py-3" type="submit" data-i18n="msg_envoy">Envoyer le Message</button>
										</div>
									</div>
								
 							</div>
						</div>
					</div>
			 
				<div class="container contact-info">
					<div class="row">
				 
						<div class="col-lg-4 col-12 mb-3">
							<div class="single-info">
								<i class="icofont icofont-ui-call"></i>
								<div class="content">
									<a href="tel:048771441" target="_blank"><h3>048 77 14 41</h3></a>
									<a href="mailto:info@ehph-hasnaoui.com" target="_blank"><p>info@ehph-hasnaoui.com</p></a>
								</div>
							</div>
						</div>
						 
						<div class="col-lg-4 col-12 mb-3">
							<div class="single-info">
								<i class="icofont-google-map"></i>
								<div class="content">
									<a href="https://www.google.com/maps/place/Etablissement+Hospitalier+Priv%C3%A9+HASNAOUI/@35.1791377,-0.6318223,15z/data=!4m2!3m1!1s0x0:0x23bae99ee4007340?sa=X&ved=1t:2428&ictx=111" target="_blank">
										<h3>Bloc J05 MakamEl Chahid</h3>
									<p>Sidi Bel Abbes</p></a>
								</div>
							</div>
						</div>
					 
						<div class="col-lg-4 col-12 ">
							<div class="single-info">
								<i class="icofont icofont-wall-clock"></i>
								<div class="content">
									<h3>Samedi - Vendredi:</h3>
									<p>24/7</p>
 								</div>
							</div>
						</div>
 					</div>
				</div>
		 
		</section>
        </>
    )
}
export default Contact;