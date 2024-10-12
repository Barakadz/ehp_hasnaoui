const SpecialiteComponent=({image,titre,icon})=>{

    const style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', // Optional: Adjust as needed
        backgroundPosition: 'center', // Optional: Adjust as needed
         backgroundRepeat: 'no-repeat'
      };
    return(
<>
                    <div class="card"style={style}>
                        <div className="over">
                        <div class="content" >
                            <img src={icon} alt="icon"/>
                            <p style={{color:'white',textAlign:'center'}} >{titre}</p>
                        </div>
                        </div>
                    </div>
                  
                     </>
    );
}

export default SpecialiteComponent;