import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


 

const AdminUserMobile = () => {
  const [username, setUsername] = useState('');
  const [poste, setPoste] = useState('');
  const [valeur, setValeur] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  const [id, setId] = useState('');

  const [data, setData] = useState([]);

 const fetchData = async () => {
      try {
        //https://www.ehp-hasnaoui.com/api/galerie/
        const response = await axios.get('https://www.ehp-hasnaoui.com/api/usermobile/');  
        setData(response.data);
       } catch (error) {
        console.error('Error fetching data: ', error);
       }
    };
  useEffect(() => {
   
    fetchData();
  }, []);

   
 

  const columns = [
    { field: 'id', title: 'Id' },
    { field: 'nom', title: 'Nom' },
    { field: 'prenom', title: 'Prenom' },
    { field: 'mail', title: 'Mail' },


    { field: 'telephone', title: 'Telephone' },
    { field: 'date_creation', title: 'Date inscri' },
    { field: 'users_approuve', title: 'User Approuve' },
    
    
   ];
 
   const handleAddUserClick = () => {
    // Logique pour afficher le modal
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  };

  const ModiyMedcinn = (id,username,poste,valeur,type,image,) => {
    setImage(image)
    setUsername(username)
    setPoste(poste)
    setValeur(valeur)
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
 
     <ToastContainer />    
    <MaterialTable
    title="La liste Des Utilisateurs"
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
      ,
      {
        icon: 'edit',
        tooltip: 'Modifier Utilisateur',
        isFreeAction: false,
        onClick: (event, rowData) => ModiyMedcinn(JSON.stringify(rowData.id),JSON.stringify(rowData.username),JSON.stringify(rowData.poste),
        JSON.stringify(rowData.valeur),JSON.stringify(rowData.type),JSON.stringify(rowData.image),
      ),
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

           axios.delete(`https://www.ehp-hasnaoui.com/api/medecin/${id}`)
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
              deleteText: 'Voulez-vous supprimer cette Utilisateur?',
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

export default AdminUserMobile;






 