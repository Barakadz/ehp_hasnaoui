import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


 import AddOffresButton from './addOffresButton';
import ModifyOffres from './modifyoffres';
  

const AdminOffres = () => {
  const [titre, setTitre] = useState('');
  const [lieu, setLieu] = useState('');
  const [poste, setPoste] = useState('');
  const [secteur, setSecteur] = useState('');
  const [diplome, setDiplome] = useState('');
  const [nbrposte, setNbrposte] = useState('');
  const [contrat, setContrat] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  const [data, setData] = useState([]);
  const ModiyOffress = (id,titre,lieu,poste,secteur,diplome,nbrposte,contrat,description) => {
    setTitre(titre)
    setLieu(lieu)
    setPoste(poste)
    setSecteur(secteur)
    setDiplome(diplome)
    setNbrposte(nbrposte)
    setContrat(contrat)
    setDescription(description)

     setId(id)
      // Logique pour afficher le modal
    const modal = document.getElementById('exampleModall');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  };
 const fetchData = async () => {
      try {
        //https://www.ehp-hasnaoui.com/api/galerie/
        const response = await axios.get('https://www.ehp-hasnaoui.com/api/offres/');  
        setData(response.data);
       } catch (error) {
        console.error('Error fetching data: ', error);
       }
    };
  useEffect(() => {
   
    fetchData();
  }, []);

   
 

  const columns = [
    { field: 'id', title: 'id' },
    { field: 'titre', title: 'Titre' },
    { field: 'lieu', title: 'Lieu' },
    { field: 'niveau_poste', title: 'Niveau poste' },
    { field: 'secteur', title: 'Secteur' }, 
    { field: 'diplome', title: 'Diplome' },
    { field: 'nombre_poste', title: 'Nombre poste' },
    { field: 'contrat', title: 'Contrat' },
    { field: 'description', title: 'Description',hidden:true },
    { field: 'date', title: 'Date' },
 
 
    
   ];
 
   const handleAddUserClick = () => {
    // Logique pour afficher le modal
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  };

 
  return (
    <> 
   
    
<AddOffresButton/>< ModifyOffres
 id={id} titree={titre} lieuu={lieu}postee={poste} secteurr={secteur} diplomee={diplome} 
 contratt={contrat} nbrpostee={nbrposte} descriptionn={description} />
     <ToastContainer />    
    <MaterialTable
    title="La liste Des Offres d'emplois"
    columns={columns}
    data={data}
    options={{
      search: true,
      paging: true,
      filtering: true,
      exportButton: true, headerStyle: {
        backgroundColor: '#01579b',
        color: '#FFF'
      },
      actionsColumnIndex: -1,
 
    }} 

    actions={[
      {
        icon: 'add',
        tooltip: 'Ajouter Offres',
        isFreeAction: true,
        onClick: handleAddUserClick,
      },
      {
        icon: 'refresh',
        tooltip: 'Refresh Data',
        isFreeAction: true,
        onClick: () => fetchData(),
      }
      ,
      {
        icon: 'edit',
        tooltip: 'Modifier offres',
        isFreeAction: false,
        onClick: (event, rowData) => ModiyOffress(JSON.stringify(rowData.id),JSON.stringify(rowData.titre),JSON.stringify(rowData.lieu),
        JSON.stringify(rowData.niveau_poste),JSON.stringify(rowData.secteur),JSON.stringify(rowData.diplome),
        JSON.stringify(rowData.nombre_poste),JSON.stringify(rowData.contrat),JSON.stringify(rowData.description)),
      } 
    ]}
   




    editable={{
     
      
      onRowDelete: oldData =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
           //id==> console.log(oldData.id)
           const id=oldData.id;
           //axios.delete(`https://www.ehp-hasnaoui.com/api/galerie/${id}`)

           axios.delete(`https://www.ehp-hasnaoui.com/api/offres/${id}`)
.then(response => {
toast.success(response.data)
})
.catch(error => {
toast.error(error)});
            resolve()
          }, 1000)
        }),
      }}
  
      detailPanel={rowData => {
        return (<>
         <p><b>Description :</b></p> 
         <div
            dangerouslySetInnerHTML={{ __html: rowData.description }}
          />
  </>
        )
      }}
  
 

    localization={{
      body: {
          emptyDataSourceMessage: "Pas d'enregistreent à afficher",
          addTooltip: 'Ajouter',
          deleteTooltip: 'Supprimer',
          editTooltip: 'Editer',
          filterRow: {
              filterTooltip: 'Filtrer'
          },
          editRow: {
              deleteText: 'Voulez-vous supprimer cette offres?',
              cancelTooltip: 'Annuler',
              saveTooltip: 'Enregistrer'
          }
      },
      grouping: {
          placeholder: "Tirer l'entête ...",
          groupedBy: 'Grouper par:'
      },
      header: {
          actions: 'Actions'
      },
      pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'lignes',
          labelRowsPerPage: 'lignes par page:',
          firstAriaLabel: 'Première page',
          firstTooltip: 'Première page',
          previousAriaLabel: 'Page précédente',
          previousTooltip: 'Page précédente',
          nextAriaLabel: 'Page suivante',
          nextTooltip: 'Page suivante',
          lastAriaLabel: 'Dernière page',
          lastTooltip: 'Dernière page'
      },
      toolbar: {
          addRemoveColumns: 'Ajouter ou supprimer des colonnes',
          nRowsSelected: '{0} ligne(s) sélectionée(s)',
          showColumnsTitle: 'Voir les colonnes',
          showColumnsAriaLabel: 'Voir les colonnes',
          exportTitle: 'Exporter',
          exportAriaLabel: 'Exporter',
          exportName: 'Exporter en CSV',
          searchTooltip: 'Chercher',
          searchPlaceholder: 'Chercher'
      }
  }}


  
    
    // Pass the theme object to the MaterialTable component
    />        
    </>
  );
};

export default AdminOffres;






 