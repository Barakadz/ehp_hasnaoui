 import { DataGrid } from "@mui/x-data-grid";
import { userColumns,userRows } from "./datatablesource";
import Button from '@mui/material/Button';

import { useState } from "react";
import Link from "next/link";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
 
const MySwal = withReactContent(Swal);

const DataTableRendezVous=()=>{
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
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 250,
          renderCell: (params) => {
            return (
              <div className=" ">
                 <Button variant="contained" className="mx-2">Modifier</Button>
                <Button variant="contained" color="error"onClick={handleClick}>Supprimer</Button>

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
    return(
        <>
       <div className="container">
        <h2>La liste des RendezVous :</h2>
       <div className="datatable" style={{backgroundColor:'white'}}>
      <div className="datatableTitle">
     
        <Link href="/users/new" >
          Ajouter un Rendezvous
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
        </div> 
        </>
    )
}

export default DataTableRendezVous;