const Login=()=>{
    return(
        <div class="containerAdmin">
	<div class="screen">
		<div class="screen__content"><img src="medeci.gif" width={150} className="img-fluid" alt="" srcset="" />
			<form class="login"><p>Connecter à votre compte</p>
				<div class="login__field">
                    
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Nom utilisateur"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Mot de passe"/>
				</div>
				<button class="button login__submit">
					<center><span class="text-center">Connexion</span></center>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login mt-4">
 			           <img src="Artboard 1 1.png" className="mt-4 img-fluid" alt="" />

				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    )
}

export default Login;