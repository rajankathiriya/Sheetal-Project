import { Button, Checkbox, FormControlLabel, Grid, Icon, Radio, RadioGroup, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import axios from 'axios';
import { toast } from 'react-toastify';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const AcademicyearForm = (props) => {
  const [open, setOpen] = useState(false);

  const [data, setdata] = useState({
    academicyear: '',
    academicyearfromdate: '',
    academicyearenddate: '',
  });
  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    // --------------------------API----------------------------
    axios.post('https://desert-sand-reindeer-wrap.cyclic.app/api/academicyear', data).then((r) => {
      props.changeEdit(r.data._id);
    });
    setdata((e.target.value = ''));
    setOpen(props.handleClose);

  };

  // const handleDateChange = (date) => setState({ ...state, date });

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null} autocomplete="off">
        <Grid container spacing={8}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Academic Year
            </h4>
            <TextField
              type="text"
              name="academicyear"
              id="standard-basic"
              value={data.academicyear || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Academic Year"
              validators={['required']}
            />
            <TextField
              name="academicyearfromdate"
              label="Academic From Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={data.academicyearfromdate || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              validators={['required']}
            />
            <TextField
              name="academicyearenddate"
              label="Academic End Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={data.academicyearenddate || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              validators={['required']}
            />
          </Grid>
        </Grid>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-2">
              <Button
                color="error"
                variant="contained"
                type="submit"
                fullWidth
                onClick={() => {
                  setdata('');
                }}
              >
                <DeleteIcon />
                <span> Clear</span>
              </Button>
            </div>
            <div className="col-sm-6 mb-2">
              <Button color="primary" variant="contained" type="submit" fullWidth>
                <SendIcon />
                <span> Submit</span>
              </Button>
            </div>
          </div>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default AcademicyearForm;
