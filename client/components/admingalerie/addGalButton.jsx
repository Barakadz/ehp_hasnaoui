import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import axios from 'axios';
 

const AddGalButton=()=>{
    
  //type
  const [selectedState, setSelectedState] = useState('');
  const [fileNameUpload, setFileNameUpload] = useState('');

  const states = [
    'Pédiatries et néonatologie',
    'Salle opératoire',
    'Stérilisation',
    'Laboratoire',
    'Imagerie',
    'Hospitalisation',
    'Les urgences' 

  ];

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };
  //image
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
    
    const handleUpload = async () => {
      if(!file){
toast.error("il faut choisir un fichier")
      } else if(selectedState==''){
        toast.error("il faut remplir votre contenu")
 
      }
      else{

     
        const formData = new FormData();
         formData.append('file',file);
 

        try {
          const response = await axios.post('https://www.ehp-hasnaoui.com/api/upload/galerie', formData);
           setFileNameUpload(response.data)
          
          } catch (error) {
          toast.error(error);
        }

 
  const apiUrl = 'https://www.ehp-hasnaoui.com/api/galerie/add';
  const requestData = {
    type: selectedState,
   image:fileNameUpload,
   
 


  };
  
  axios.post(apiUrl, requestData )
    .then(response => {
     toast.success('Galerie à été bien Ajouté')
     setTimeout(function() {
      location.reload();
  }, 2000); 
    })
    .catch(error => {
     console.error('An error occurred:', error);
    });

 
  }
      };
    return(
        <>
        <center>
        <button type="button" class="btn btn-primary p-2 m-2"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ajouter Galerie
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter Galerie</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <form   encType="multipart/form-data"  >
       
            <div class="form-group">



<label for="exampleInputEmail1" style={{float:'left'}} >Type<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
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
      <div class="modal-footer">
         <button type="submit"  class="btn btn-primary" onClick={handleUpload}>Ajouter</button>
      </div>
    </div>
  </div>
</div>

        </center>
        </>
    )
}

export default AddGalButton;