import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AddOffresButton from './addOffresButton';
   


const AdminOffres = () => {
   const [data, setData] = useState([]);

 const fetchData = async () => {
      try {
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
 

  return (
    <> 
<AddOffresButton/>
     <ToastContainer />    
    <MaterialTable
    title="La liste Des Offred'emplois"
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
        icon: 'refresh',
        tooltip: 'Refresh Data',
        isFreeAction: true,
        onClick: () => fetchData(),
      }
    ]}
   

    detailPanel={rowData => {
        return (<>
         <p><b>Description :</b>{rowData.description}</p>
      
  </>
        )
      }}


    editable={{
     
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);

            resolve();
          }, 1000)
        }),
      onRowDelete: oldData =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
           //id==> console.log(oldData.id)
           const id=oldData.id;
axios.delete(`https://www.ehp-hasnaoui.com/api/galerie/${id}`)
.then(response => {
toast.success(response.data)
})
.catch(error => {
toast.error(error)});
            resolve()
          }, 1000)
        }),
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
              deleteText: 'Voulez-vous supprimer cette Actualites?',
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






 