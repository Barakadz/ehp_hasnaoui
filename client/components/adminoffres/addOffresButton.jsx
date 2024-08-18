import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const AddOffresButton = () => {
  const [isClient, setIsClient] = useState(false);
  const [titre, setTitre] = useState('');
  const [Lieu, setLieu] = useState('');
  const [poste, setPoste] = useState('');
  const [secteur, setSecteur] = useState('');
  const [nbrposte, setNbrPoste] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedStates, setSelectedStates] = useState('');
   const [editorContent, setEditorContent] = useState('');

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

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
 

  const handleUpload = async () => {
    if (!selectedState) {
      toast.error("Il faut choisir le type");
      return;
    }

    if (selectedState === 'Médecins non conventionnés' && !file) {
      toast.error("Il faut choisir un fichier");
      return;
    }

    

    try {
       

      const requestData = {
        titre:titre, // replace with actual value
        lieu:Lieu,
        niveau_poste: poste, // replace with actual value
        secteur: secteur,
        diplome: selectedStates,
        nombre_poste:nbrposte,
        contrat:selectedState,
        description:editorContent,
      };

      await axios.post('https://www.ehp-hasnaoui.com/api/offres/add', requestData);
      toast.success('Offre d\'emploi ajoutée avec succès');
      setTimeout(() => {
        location.reload();
      }, 4000);
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'ajout de l\'offre');
    }
  };

  const handleCloseModalClick = () => {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
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

  return (
    <>
      <center>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Ajouter Offres d'emplois</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModalClick}></button>
              </div>
              <div className="modal-body">
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
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" onClick={handleUpload}>Ajouter</button>
                <button type="button" className="btn btn-primary" style={{ background: "#000" }} data-bs-dismiss="modal" onClick={handleCloseModalClick}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default AddOffresButton;
