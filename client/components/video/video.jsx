 
const Video=()=>{
	 

    return(
        <div>
        	<section class="video-section prelative text-center white p-8">
			<div class="section-padding video-overlay" >
		 
				<video autoplay="true"   controls="true" muted="true" loop="true" style={{height:'auto',width:'100%'}} className="wow fadeIn" data-wow-delay="0.25s">
					<source src="ehph.mp4" type="video/mp4"/>
				</video>	
		 
			</div>
		  </section>
        </div>
    )
}

export default Video;