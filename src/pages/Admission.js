import * as React from 'react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { GridRowModes, DataGridPro, GridToolbarContainer, GridActionsCellItem } from '@mui/x-data-grid-pro';
import {
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AdmiDialog from '../sections/@dashboard/Admission/AdmiDialog';
import AdmiEditForm from '../sections/@dashboard/Admission/AdmiEditForm';

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function Admission() {
  const [rows, setRows] = useState([]);
  const [edit, setEdit] = useState(-1);

  const [rowModesModel, setRowModesModel] = React.useState({});
  // ========================================================
  const [open, setOpen] = React.useState(false);
  const handleEditClick = (id) => () => {
    setOpen(true);
  };
  const handleEditClose = () => {
    setOpen(false);
  };
  // ========================================================

  const handleDeleteClick = (row) => () => {
    Swal.fire({
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        axios.delete(`https://desert-sand-reindeer-wrap.cyclic.app/api/admission/${row.row._id}`).then((r) => {
          setRows(rows.filter((rowd) => rowd.id !== row.id));
        });
      }
    });
  };

  const columns = [
    { field: 'name', headerName: 'Student name', width: 130 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    { field: 'medium', headerName: 'Medium', width: 100 },
    { field: 'course', headerName: 'Course', width: 150 },
    { field: 'startD', headerName: 'Start Date', width: 150 },
    { field: 'endD', headerName: 'End Date', width: 150 },
    { field: 'takenby', headerName: 'Taken BY', width: 150 },
    { field: 'rollNO', headerName: 'Roll No', width: 80 },
    { field: 'invoice', headerName: 'Invoice', width: 80 },
    { field: 'admission', headerName: 'Admission Date', width: 150 },
    { field: 'academicYear', headerName: 'Academic Year', width: 130 },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: (row) => {

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(row)}
            color="inherit"
          />,
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(row)} color="inherit" />,
        ];
      },
    },
  ];
  useEffect(() => {
    axios.get('https://desert-sand-reindeer-wrap.cyclic.app/api/admission').then((r) => {
      const d = r.data.map((value, index) => {
        value.id = index + 1;
        return value;
      });
      setRows(d);
    });
  }, [edit]);

  return (
    <>


      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Admission
          </Typography>
          <AdmiDialog changeEdit={setEdit} />
        </Stack>

        {/* ==================(edit popop)======================================== */}
        <Dialog
          open={open}
          onClose={handleEditClose}
          // fullScreen
          fullWidth
          maxWidth="lg"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Admission'}</DialogTitle>
          <DialogContent>

            <AdmiEditForm changeEdit={setEdit} handleEditClose={handleEditClose} />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="secondary" onClick={handleEditClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Card
          style={{ height: 500, width: '100%', backgroundColor: '#ffffff' }}
          sx={{ boxShadow: 3, borderRadius: '16px' }}
        >
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[10]} checkboxSelection />
        </Card>
      </Container>
    </>
  );
}
