import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const ModifyMedecin=({id,image,type,usernameee,posteee,valeurrr})=>{
    
  const [usernamee, setUsernamee] = useState(usernameee);

  const handleInputUsernamee = (event) => {
     setUsernamee(event.target.value);
 };


 const [valeurr, setValeurr] = useState(valeurrr);

  const handleInputValeurr = (event) => {
     setValeurr(event.target.value);
 };

 const [postee, setPostee] = useState(posteee);

 const handlePostee = (event) => {
     setPostee(event.target.value);
};
   var typee = type.replace(/"/g,'' );

  //type
  const [selectedItem, setItem] = useState(typee);
 
 

  const statess = [
    'Médecins non conventionnés',
    'Médecins conventionnés',
     

  ];

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };
  //image
  const [file, setFile] = useState(null);
var xx=''
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
 
    const handleUpload = async () => {
      if(!file){
toast.error("il faut choisir un fichier")
      } else if(selectedItem==''){
        toast.error("il faut remplir choisir un type")
 
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
 image = image.replace(/"/g, '');

 //  const apiUrl = 'https://www.ehp-hasnaoui.com/api/galerie/add';
   const apiUrl = `https://www.ehp-hasnaoui.com/api/medecin/${id}`;
  const requestData = {
    username:usernamee,
    valeur:valeurr,
    poste:postee,
    type: selectedItem,
   image:xx,
   imagePrecedent:image,
 
 


  };
  
  axios.put(apiUrl, requestData )
    .then(response => {
     toast.success('Medecin à été bien Modified')
     setTimeout(function() {
      location.reload();
  }, 4000); 
    })
    .catch(error => {
     console.error('An error occurred:', error);
    });

 
  }
      };

      const handleCloseModalClickk = () => {
        const modal = document.getElementById('exampleModall');
        if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
        }
      };
    return(
        <>
        <center>
     


<div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Medecin de l'id {id}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModalClickk}></button>
      </div>
      <div class="modal-body">
            <form   encType="multipart/form-data"  >

            <div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Nom & Prénom<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 <input type="text" value={usernamee} onChange={handleInputUsernamee} class="form-control" accept="image/*"/>

</div>
</div>
<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Poste<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 <input type="text" value={postee} onChange={handlePostee} class="form-control" accept="image/*"/>

</div>


</div>
<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Valeur<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 <input type="text" value={valeurr} onChange={handleInputValeurr} class="form-control" accept="image/*"/>

</div>


</div>
















            <div class="form-group">



<label for="exampleInputEmail1" style={{float:'left'}} >Type<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"><i class="icofont-shield-alt"></i></span>
    <select id="stateselect" value={selectedItem} onChange={handleChangeItem}className='form-select' required>
    {statess.map((statOption) => (
  <option key={statOption} value={statOption}  >
    {statOption }
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
      <div class="modal-footer">         <button type="submit"  class="btn btn-primary"  onClick={handleUpload}>Modifier</button>

      <button type="button" className=" btn btn-primary" style={{background:"#000"}}data-bs-dismiss="modal" onClick={handleCloseModalClickk} >Fermer</button>

      </div>
    </div>
  </div>
</div>

        </center>
        </>
    )
}

export default ModifyMedecin;