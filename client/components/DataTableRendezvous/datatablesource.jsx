








import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, CircularProgress, Button} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
 

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'nom', headerName: 'Nom', width: 10, editable: true },
  { field: 'prenom', headerName: 'Prénom', width: 150, editable: true },
  { field: 'mail', headerName: 'Mail', width: 150, editable: true },
  { field: 'tel', headerName: 'Téléphone', width: 150, editable: true },
  { field: 'service', headerName: 'Service', width: 150, editable: true },
  { field: 'confirmation', headerName: 'Confirmation', width:111, editable: true },

 
];

const DataTableRendezVous = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    const result = await MySwal.fire({
        title: 'Est-vous sûr de supprimer cette rendez vous ? ',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
      });
  
      if (result.isConfirmed) {
        MySwal.fire('Supprimer!', 'RendezVous à été Bien Supprimer.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
       // MySwal.fire('Cancelled', 'Your file is safe :)', 'error');
      }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 370,
      renderCell: (params) => {
        return (
          <div className=" ">
             <Button variant="contained" className="mx-2">Modifier</Button>
            <Button variant="contained" color="error"onClick={handleClick}>Supprimer</Button>
            <Button variant="contained"color="success"  className="mx-2"onClick={handleClick}>Confirmation</Button>

             <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Supprimer
            </div>
          </div>
        );
      },
    },
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.ehp-hasnaoui.com/api/auth/users', {
          params: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVocGhhc25hb3VpIiwiaWF0IjoxNzE1MTUzNjQ1fQ.BK-9ryCBATNfIspllQqGFAVRhubps3yNty2mXaS5nNs'
          }
        });  
                setRows(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) {
    return <CircularProgress />;
  }

  return (<>

    <h2 className='mx-4 my-4'>La Liste des Rendezvous :</h2>
    <Box sx={{ height: '100%', width: '100%' }}>
       
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
    </>
  );
};

export default DataTableRendezVous;
