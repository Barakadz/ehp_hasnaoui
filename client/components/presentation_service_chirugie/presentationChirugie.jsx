


const PresentationService=({title,description})=>{
    return(
        <>
          <div class="presentation">
                <h2>{title}</h2>
                <img src="section-img.png" alt="section img"/>
                <p>{description}</p>
            </div>
        </>
    )
}

export default PresentationService;