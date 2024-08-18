import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

 // Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ModifyActualites=({id,image,type})=>{
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
    
  const [titree, setTitree] = useState('');

  const handleTitree = (event) => {
    setTitree(event.target.value);
 };
  
 const modules = {
  toolbar: [
    [{ header: '1'}, { header: '2'}, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered'}, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
    ['code-block'],                                      
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image',
  'align',
  'color', 'background',
  'code-block',
];
const [editorContent, setEditorContent] = useState('');

const handleChange = (value) => {
  setEditorContent(value);
};
if (!isClient) {
  return null; // Render nothing on the server
}
 

 
 const handleTypee = (event) => {
  setTypee(event.target.value);
};
   var typee = type.replace(/"/g,'' );
 
 
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

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Titre<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 <input type="text" value={titree} onChange={handleTitree} class="form-control" accept="image/*"/>

</div>


</div>
<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Type<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 
</div>


</div>















<label style={{float:'left'}}> Discription : <b style={{color:'red'}}>*</b></label><br></br>
      <ReactQuill value={editorContent} onChange={handleChange}  modules={modules}
        formats={formats} 
        placeholder="Discription de l'actualités" required/>

           
     

<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Image<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 
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

export default ModifyActualites;