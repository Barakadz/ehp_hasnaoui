import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
 


const DataTableRendezVous = () => {
   const [data, setData] = useState([]);

 const fetchData = async () => {
      try {
        const response = await axios.get('https://www.ehp-hasnaoui.com/api/auth/users', {
          params: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVocGhhc25hb3VpIiwiaWF0IjoxNzE1MTUzNjQ1fQ.BK-9ryCBATNfIspllQqGFAVRhubps3yNty2mXaS5nNs'
          }
        });  
        setData(response.data);
       } catch (error) {
        console.error('Error fetching data: ', error);
       }
    };
  useEffect(() => {
   
    fetchData();
  }, []);

   
 

  const columns = [
    { field: 'id', title: 'id',hidden:true },
    { field: 'nom', title: 'Nom' },
    { field: 'prenom', title: 'Prénom' },

    { field: 'mail', title: 'Mail' },
    { field: 'tel', title: 'Numero de Téléphone' },
    { field: 'service', title: 'Service' },
    { field: 'date_rendezvous', title: 'Date de RendezVous' },
    { field: 'heure', title: 'Heure' },
    { field: 'confirmation', title: 'Confirmation' },
    { field: 'numero_cni', title: 'numero_cni',hidden:true },
    { field: 'numero_securite', title: 'numero_securite',hidden:true },
    { field: 'date', title: 'date',hidden:true },
 
   ];
 

  return (
    <>     
    <MaterialTable
    title="La liste Des Rendez vous"
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
        icon: 'save',
        tooltip: 'Confirmer cette rendezvous',
        onClick: (event, rowData) =>{ const id=rowData.id;
          axios.put(`https://www.ehp-hasnaoui.com/api/auth/${id}`)
          .then(response => {

            toast.success(response.data);
          })
          .catch(error => {
            toast.error( error);
          });}  
      } , {
        icon: 'refresh',
        tooltip: 'Refresh Data',
        isFreeAction: true,
        onClick: () => fetchData(),
      }
    ]}
    detailPanel={rowData => {
      return (<>
       <p><b>Numero CNI :</b>{rowData.numero_cni}</p>
       <p><b>Numero Sécurité :</b>{rowData.numero_securite}</p>
       <p><b>Date :</b>{rowData.date}</p>
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
axios.delete(`https://www.ehp-hasnaoui.com/api/auth/${id}`)
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
              deleteText: 'Voulez-vous supprimer cette rendezvous?',
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
    />         <ToastContainer />
    </>
  );
};

export default DataTableRendezVous;
