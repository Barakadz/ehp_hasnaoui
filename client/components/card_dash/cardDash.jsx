const CardDashboard=()=>{
    return(
<>
<div className="">

<div className="row">
    <div className=" cardd col-lg-3 d-flex">
        <div className="iconn blue">
        <i class="icofont-ui-calendar "></i>
        </div>
        <div>
            <h2>24</h2>
            <p>Rendez vous</p>
        </div>
    </div>
    <div className=" cardd col-lg-3 d-flex">
        <div className="iconn blue">
        <i class="icofont-ui-image "></i>
        </div>
        <div>
            <h2>10</h2>
            <p>Galerie</p>
        </div>
    </div>   <div className=" cardd col-lg-3 d-flex">
        <div className="iconn blue">
        <i class="icofont-ui-copy "></i>
        </div>
        <div>
            <h2>20</h2>
            <p>Actualités</p>
        </div>
    </div>
    <div className=" cardd col-lg-3 d-flex">
        <div className="iconn blue">
        <i class="icofont-search-job "></i>
        </div>
        <div>
            <h2>24</h2>
            <p>Offres d'emplois</p>
        </div>
    </div>
</div>


 </div>
</>
    )
}

export default CardDashboard;