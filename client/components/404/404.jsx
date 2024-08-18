import Link from "next/link";

const Notfound=()=>{
    return(
        <div>
            	<section class="error-page section justify-content-center">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3 col-12">
 						<div class="error-inner">
							<h1>404<span>Oups, désolé, nous ne pouvons pas trouver cette page !</span></h1>
 							 
						</div>
 					</div>
				</div>
			</div>
		</section>	
        </div>
    )
}

export default Notfound;