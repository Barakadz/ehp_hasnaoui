import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import axios from 'axios';
 

const AddMedecinButton=()=>{
    
    const [usernameMed, setUsernameMed] = useState('');

     const handleInputUsername = (event) => {
        setUsernameMed(event.target.value);
    };

 
    const [valeurMed, setValeurMed] = useState('');

     const handleInputValeur = (event) => {
        setValeurMed(event.target.value);
    };

    const [posteMed, setPosteMed] = useState('');

    const handlePoste = (event) => {
        setPosteMed(event.target.value);
   };
  //type
  const [selectedState, setSelectedState] = useState('');
 
  const states = [
    'Médecins non conventionnés',
    'Médecins conventionnés',
     

  ];

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };
  //image
  const [file, setFile] = useState(null);
var xx=''
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [fileNameUpload, setFileNameUpload] = useState('');

    const handleUpload = async () => {
        if(selectedState=='Médecins non conventionnés'){
   if(!file){
toast.error("il faut choisir un fichier")
      }
        }
     else if(selectedState==''){
        toast.error("il faut choisir le type")
 
      }
      else{

     
        const formData = new FormData();
         formData.append('file',file);
 

        try {
         // const response = await axios.post('https://www.ehp-hasnaoui.com/api/upload/galerie', formData);

         const response = await axios.post('https://www.ehp-hasnaoui.com/api/upload/medecin', formData);
           xx+=response.data
           } catch (error) {
          toast.error(error);
        }

 //  const apiUrl = 'https://www.ehp-hasnaoui.com/api/galerie/add';

 const apiUrl = 'https://www.ehp-hasnaoui.com/api/medecin/add';
  const requestData = {
    username:usernameMed,
    poste:posteMed,
    valeur:valeurMed,
    type: selectedState,
   image:xx 
   
 


  };
  
  axios.post(apiUrl, requestData )
    .then(response => {
     toast.success('Medecin à été bien Ajouté')
     setTimeout(function() {
      location.reload();
  }, 4000); 
    })
    .catch(error => {
     console.error('An error occurred:', error);
    });

 
  }
      };

      const handleCloseModalClick = () => {
        const modal = document.getElementById('exampleModal');
        if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
        }
      };
    return(
        <>
        <center>
     


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter Medecin</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModalClick}></button>
      </div>
      <div class="modal-body">
            <form   encType="multipart/form-data"  >
          <div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Nom & Prénom<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group ">
 <input type="text" value={usernameMed} onChange={handleInputUsername} class="form-control" accept="image/*"/>

</div>
</div>
<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Poste<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group ">
 <input type="text" value={posteMed} onChange={handlePoste} class="form-control" accept="image/*"/>

</div>


</div>
<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Valeur<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group  ">
 <input type="text" value={valeurMed} onChange={handleInputValeur} class="form-control" accept="image/*"/>

</div>


</div>




            <div class="form-group">


         
<label for="exampleInputEmail1" style={{float:'left'}} >Type<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group  ">
    <span class="input-group-text" id="basic-addon1"><i class="icofont-shield-alt"></i></span>
    <select id="state-select" value={selectedState} onChange={handleChange}className='form-select' required>
        <option value="">--choisir un type --</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
 
 </div>

<ToastContainer />


</div>
     

<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Image<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 <input type="file" onChange={handleFileChange} class="form-control" accept="image/*"/>

</div>



</div>

            </form>
      </div>
      <div class="modal-footer">         <button type="submit"  class="btn btn-primary" onClick={handleUpload}>Ajouter</button>

      <button type="button" className=" btn btn-primary" style={{background:"#000"}}data-bs-dismiss="modal" onClick={handleCloseModalClick}>Fermer</button>

      </div>
    </div>
  </div>
</div>

        </center>
        </>
    )
}

export default AddMedecinButton;