import * as React from 'react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import { Card, Container, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const OnlineInquiry = () => {
  const [rows, setRows] = useState([]);
  const [edit, setEdit] = useState(-1);

  const [rowModesModel, setRowModesModel] = React.useState({});




  const handleDeleteClick = (row) => () => {
    Swal.fire({
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        axios.delete(`https://desert-sand-reindeer-wrap.cyclic.app/api/onlineinquiry/${row.row._id}`).then((r) => {
          setRows(rows.filter((rowd) => rowd.id !== row.id));
        });
      }
    });
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 160 },
    { field: 'subject', headerName: 'Subject', width: 190 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'message', headerName: 'Message', width: 230 },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: (row) => {

        return [
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(row)} color="inherit" />,
        ];
      },
    },
  ];

  useEffect(() => {
    axios.get('https://desert-sand-reindeer-wrap.cyclic.app/api/onlineinquiry').then((r) => {
      const d = r.data.map((value, index) => {
        value.id = index + 1;
        return value;
      });
      setRows(d);
      console.log(r);
    });
  }, [edit]);




  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Online Inquiry
          </Typography>
        </Stack>
        <Card
          style={{ height: 500, width: '100%', backgroundColor: '#ffffff' }}
          sx={{ boxShadow: 3, borderRadius: '16px' }}
        >
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[10]} checkboxSelection />
        </Card>
      </Container>
    </>
  );
};

export default OnlineInquiry;