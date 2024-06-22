import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ModifyOffres=({id,titree,lieuu,postee,secteurr,diplomee,contratt,nbrpostee,descriptionn})=>{
  const [isClient, setIsClient] = useState(false);
  const [titre, setTitre] = useState(titree.replace(/"/g, ''));
  const [Lieu, setLieu] = useState(lieuu.replace(/"/g, ''));
  const [poste, setPoste] = useState(postee.replace(/"/g, ''));
  const [secteur, setSecteur] = useState(secteurr.replace(/"/g, ''));
  const [nbrposte, setNbrPoste] = useState(nbrpostee.replace(/"/g, ''));
  const [selectedState, setSelectedState] = useState(contratt.replace(/"/g, ''));
  const [selectedStates, setSelectedStates] = useState(diplomee.replace(/"/g, ''));
   const [editorContent, setEditorContent] = useState(descriptionn.replace(/"/g, ''));
   useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  const states = ['CDD', 'CDI'];
  
 
   
 
   const statess = [
    'Niveau secondaire',
    'Niveau terminal',
    'Formation Professionnelle',
    'Baccalauréat',
    'Universitaire sans diplôme',
    'TS BAC+2',
    'LICENCE (LMD), BAC+3',
    'Master 1, LICENCE BAC+4',
    'Master 2, Ingéniorat, BAC+5',
    'Magister BAC+7',
    'Doctorat',
    'Certification',
    'Non diplômante',
  ];

  
 
    const handleUpload = async () => {
       if(titre==''){
        toast.error("il faut remplir votre titre")
 
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

      if (!isClient) {
        return null; // Render nothing on the server
      }
    
      const modules = {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Offres d'emplois de l'id {id}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModalClickk}></button>
      </div>
      <div class="modal-body">
      <form encType="multipart/form-data">
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="titre" className="mt-4" style={{ float: 'left' }}>Titre<span style={{ color: 'red' }}>*</span>:</label>
                      <input type="text" id="titre" value={titre} onChange={handleInputChange(setTitre)} className="form-control" />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="lieu" className="mt-4" style={{ float: 'left' }}>Lieu<span style={{ color: 'red' }}>*</span>:</label>
                      <input type="text" id="lieu" value={Lieu} onChange={handleInputChange(setLieu)} className="form-control" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="poste" className="mt-4" style={{ float: 'left' }}>Niveau Poste<span style={{ color: 'red' }}>*</span>:</label>
                      <input type="text" id="poste" value={poste} onChange={handleInputChange(setPoste)} className="form-control" />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="secteur" className="mt-4" style={{ float: 'left' }}>Secteur<span style={{ color: 'red' }}>*</span>:</label>
                      <input type="text" id="secteur" value={secteur} onChange={handleInputChange(setSecteur)} className="form-control" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="diplome" className="mt-4" style={{ float: 'left' }}>Diplome<span style={{ color: 'red' }}>*</span>:</label>
                      <select id="diplome" value={selectedStates} onChange={handleInputChange(setSelectedStates)} className="form-select" required>
                        <option value="">--choisir un Diplome --</option>
                        {statess.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="nbrposte" className="mt-4" style={{ float: 'left' }}>Nombre poste<span style={{ color: 'red' }}>*</span>:</label>
                      <input type="number" id="nbrposte" value={nbrposte} onChange={handleInputChange(setNbrPoste)} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="type-contrat" style={{ float: 'left' }}>Type Contrat<span style={{ color: 'red' }}>*</span>:</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"><i className="icofont-shield-alt"></i></span>
                      <select id="type-contrat" value={selectedState} onChange={handleInputChange(setSelectedState)} className="form-select" required>
                        <option value="">--choisir un type --</option>
                        {states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <label style={{ float: 'left' }}>Discription : <b style={{ color: 'red' }}>*</b></label><br />
                  <ReactQuill
                    value={editorContent}
                    onChange={setEditorContent}
                    modules={modules}
                    formats={formats}
                    placeholder="Discription de l'actualités"
                    required
                  />
                  <ToastContainer />
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

export default ModifyOffres;