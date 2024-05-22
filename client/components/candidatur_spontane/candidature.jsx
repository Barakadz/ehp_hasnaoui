import React, { useCallback,useState } from 'react';
import { useDropzone } from 'react-dropzone';

const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  };
  

const CandidatureSpontane=()=>{
    const [selectedFiles, setSelectedFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFiles(acceptedFiles);

        // Vérifier que tous les fichiers sont au format PDF
        const pdfFiles = acceptedFiles.filter(file => file.type === 'application/pdf');
        if (pdfFiles.length !== acceptedFiles.length) {
          alert('Veuillez sélectionner uniquement des fichiers PDF.');
          return;
        }
    
        // Vous pouvez maintenant travailler avec les fichiers PDF
        console.log(pdfFiles);
      }, []);
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'application/pdf', // Limiter aux fichiers PDF
        maxSize: 2 * 1024 * 1024, // Limiter la taille à 2 Mo

      });
    return(
        <>

<div class="bg-light py-md-5">

  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-8">
        <div class="bg-white p-4 p-md-5 rounded shadow-sm">
          
          <form action="#!">




         
                                    <div class="row gy-3 gy-md-4 overflow-hidden">
                                        <div class="col-sm-5 col-md-6">
                                            <input type="hidden" name="id_anonnce" value="" />
                                            <div class="form-group">
                                               <label for="exampleInputEmail1"  >Nom :<span class="text-danger">*</span></label>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1"><i class="icofont-user-alt-4"></i></span>

                                                    <input type="text" class="form-control" id="nom" name="nom" maxlength="30" placeholder="Enter Votre Nom" required="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1"  >Prénom :<span class="text-danger">*</span></label>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1"><i class="icofont-user-alt-4"></i></span>
                                                    <input type="text" class="form-control" id="prenom" name="prenom" maxlength="40" placeholder="Enter Votre Prenom" required="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1"  >Mail :<span class="text-danger">*</span></label>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1"><i class="icofont-email"></i></span>
                                                    <input type="text" class="form-control" id="prenom" name="prenom" maxlength="40" placeholder="Enter Votre Prenom" required="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1"  >Numéro de téléphone :<span class="text-danger">*</span></label>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">
                                                    <i class="icofont-telephone"></i>
                                                        
                                                        </span>
                                                    <input type="text" class="form-control" id="prenom" name="prenom" maxlength="40" placeholder="Enter Votre Prenom" required="" />
                                                </div>
                                            </div>
                                        </div>

              

                                        <div>
      <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Glissez et déposez des fichiers ici, ou cliquez pour sélectionner des fichiers</p>
      </div>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name} - {file.size} bytes</li>
        ))}
      </ul>
    </div>










              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                  <label class="form-check-label text-secondary" for="iAgree">
                     En soumettant ce formulaire,<a href="#!" class="link-primary text-decoration-none">j'accepte que les informations saisies soient utilisées pour me recontacter
</a>
                  </label>
                </div>
              </div>
              <div class="col-12">
                <div class="d-grid">
                  <button class="btn btn-primary btn-lg" type="submit">Postuler</button>
                </div>
              </div>
            </div>
          </form>
           
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default CandidatureSpontane;