 import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
 
// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


const AddButton=()=>{
  const [isClient, setIsClient] = useState(false);
  const [type, setIsType] = useState('');

  const handleType = (event) => {
    setIsType(event.target.value);
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
    
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
  //titre
  const [titre, setTitre] = useState('');
  const handleInputChangeTitre = (e) => {
    setTitre(e.target.value);
  };
  //image
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
    const [editorContent, setEditorContent] = useState('');

    const handleChange = (value) => {
      setEditorContent(value);
    };
    if (!isClient) {
      return null; // Render nothing on the server
    }
    const handleUpload = async () => {
      if(!file){
toast.error("il faut choisir un fichier")
      }else if(titre==''){
        toast.error("il faut remplir votre titre")
 
      }else if(editorContent==''){
        toast.error("il faut remplir votre contenu")
 
      }
      else{

     
        const formData = new FormData();
         formData.append('file',file);
 

        try {
          //          const response = await axios.post('https://www.ehp-hasnaoui.com/api/upload/actualites', formData);

          const response = await axios.post('https://ehp-hasnaoui.com/api/upload/actualites', formData);
          } catch (error) {
          toast.error(error);
        }

 
        //  const apiUrl = 'https://www.ehp-hasnaoui.com/api/act/add';

  const apiUrl = 'https://ehp-hasnaoui.com/api/act/add';
  const requestData = {
    titre: titre,
    description: editorContent,
   image:file.name,
   type:type
   
 


  };
  
  axios.post(apiUrl, requestData )
    .then(response => {
     toast.success('Actualités à été bien Ajouté')
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter une Actualités</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={handleCloseModalClick}></button>
      </div>
      <div class="modal-body">
            <form   encType="multipart/form-data"  >
       
        
            <div class="form-group">



<label for="exampleInputEmail1" style={{float:'left'}} >Titre<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"><i class="icofont-presentation-alt"></i></span>

    <input type="text" class="form-control" id="nom" name="nom"   placeholder="Enter Votre Titre" value={titre}  onChange={handleInputChangeTitre}  required/>
</div>

<ToastContainer />


</div>
<label style={{float:'left'}}> Discription : <b style={{color:'red'}}>*</b></label><br></br>
      <ReactQuill value={editorContent} onChange={handleChange}  modules={modules}
        formats={formats} 
        placeholder="Discription de l'actualités" required/>

<div class="form-group">

<label for="exampleInputEmail1" className='mt-4' style={{float:'left'}} >Image<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
 <input type="file" onChange={handleFileChange} class="form-control" accept="image/*"/>

</div>



</div>
<div class="form-group">



<label for="exampleInputEmail1" style={{float:'left'}} >Type<span  style={{color:'red'}}>*</span>:</label>

<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"><i class="icofont-presentation-alt"></i></span>

    <input type="text" class="form-control" id="type" name="type"   placeholder="Enter Votre Type" value={type}  onChange={handleType}  required/>
</div>

 

</div>
            </form>
      </div>
      <div class="modal-footer">
         <button type="submit"  class="btn btn-primary" onClick={handleUpload}>Ajouter</button>
         <button type="button" className=" btn btn-primary" style={{background:"#000"}}data-bs-dismiss="modal" onClick={handleCloseModalClick}>Fermer</button>

      </div>
    </div>
  </div>
</div>

        </center>
        </>
    )
}

export default AddButton;