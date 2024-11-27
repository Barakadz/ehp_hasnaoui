import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AddButton from './addActButton';
import ModifyActualites from './modifyAct';
  
 

const ActualitesAdmin = () => {
  const [ImageAct, setImage] = useState('');
  const [TypeAct, setType] = useState('');
  const [IdGal, setId] = useState('');

  const [data, setData] = useState([]);

 const fetchData = async () => {
      try {
        //        const response = await axios.get('https://www.ehp-hasnaoui.com/api/act/');  

        const response = await axios.get('https://ehp-hasnaoui.com/api/act/tous/');  
        setData(response.data);
       } catch (error) {
        console.error('Error fetching data: ', error);
       }
    };
  useEffect(() => {
   
    fetchData();
  }, []);

  const handleAddUserClick = () => {
    // Logique pour afficher le modal
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  };
 

  const columns = [
    { field: 'id', title: 'id' },
    { field: 'titre', title: 'Titre' },
    { field: 'date', title: 'Description',hidden:true },

    { field: 'date', title: 'Date' },
    { field: 'image', title: 'Image',   
    
    render: rowData => (
      <img 
          src={`https://ehp-hasnaoui.com/images_act/${rowData.image}`} 
          alt="Actualites" 
          style={{ width: 100, borderRadius: '3%' }} 
      />
  ) 
    
  },    { field: 'type', title: 'Type' },

   ];
   const ModiyAct = (id,image,type) => {
    setImage(image)
    setType(type)
    setId(id)
      // Logique pour afficher le modal
    const modal = document.getElementById('exampleModall');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  };

  return (
    <> 
<AddButton/>< ModifyActualites
 id={IdGal} image={ImageAct} type={TypeAct}/>
     <ToastContainer />    
    <MaterialTable
    title="La liste Des Actualités"
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
        tooltip: 'Ajouter un Actualites',
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
        tooltip: 'Modifier cette Actualité',
        isFreeAction: false,
        onClick: (event, rowData) => ModiyAct(JSON.stringify(rowData.id),JSON.stringify(rowData.image),JSON.stringify(rowData.type),JSON.stringify(rowData.titre),JSON.stringify(rowData.date))
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
           //axios.delete(`https://www.ehp-hasnaoui.com/api/act/${id}`)

           axios.delete(`https://www.ehp-hasnaoui.com/api/act/${id}`)
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

export default ActualitesAdmin;






 