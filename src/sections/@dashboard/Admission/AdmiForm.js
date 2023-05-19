import { Button, Checkbox, FormControlLabel, Grid, Icon, Radio, Autocomplete, styled, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import axios from 'axios';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const Course = [
  'Basic Grammar-5000',
  'CCC-4000',
  'CCC With Advance Tally-12500',
  'Data Science (Python and ML)-35000',
  'Full Stack Development-31000',
  'Full Stack Development (MERN)-40000',
  'IELTS-10000',
  'IELTS Advance-17000',
  'Programming C & C++-10000',
  'Programming in C-5000',
  'Programming in C++-5000',
  'Python-10000',
  'Smart Pro. NET-25000',
  'Spoken-5000',
  'Spoken English-10000',
  'Spoken English (8500) -8500',
  'Spoken English (9000)-9000',
  'Spoken+CCC-14000',
  'Spoken+CCC+ Tally-20500',
  'Spoken+ Tally-16500',
  'Tally ERP 9-6500',
  'Tally Prime-9000',
  'Tally+CCC-10500',
];

const AdmiForm = (props) => {
  const [open, setOpen] = useState(false);

  const [data, setdata] = useState({
    email: '',
    password: '',
    name: '',
    batch: '',
    medium: '',
    course: [],
    startD: '',
    endD: '',
    takenby: '',
    rollNO: '',
    invoice: '',
    admission: '',
    academicYear: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== data.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [data.password]);

  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    // --------------------------API----------------------------

    axios.post('https://desert-sand-reindeer-wrap.cyclic.app/api/admission', data).then((r) => {
      console.log(r.data);
      props.changeEdit(r.data._id);
    });
    setdata((e.target.value = ''));
    setOpen(props.handleClose);
  };

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null} autocomplete="off">
        <Grid container spacing={8}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }} autocomplete="off">
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Log-in Details
            </h4>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={data.email || ''}
              onChange={handleChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={data.password || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            {/* <TextField
              label="Roles "
              select
              value={data.roles || ''}
              variant="filled"
              onChange={handleChange}
              name="roles"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option> Student</option>
              <option> Faculty</option>
              <option> Admin</option>
            </TextField> */}

          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Details
            </h4>
            <TextField
              type="text"
              name="name"
              id="standard-basic"
              value={data.name || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Select Student "
              validators={['required']}
            />
            <TextField
              label="Medium "
              select
              value={data.medium || ''}
              variant="filled"
              onChange={handleChange}
              name="medium"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
            </TextField>
            <TextField
              label="Batch "
              select
              value={data.batch || ''}
              variant="filled"
              onChange={handleChange}
              name="batch"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option>Morning Batch</option>
              <option>Afternoon Batch</option>
              <option>Evening Batch</option>
            </TextField>
          </Grid>
          {/* --------------------------------------------------------------- */}
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Course Details
            </h4>
            {/* ================================================================== */}


            <Autocomplete
              multiple
              id="tags-standard"
              options={Course}
              getOptionLabel={(option) => option}
              disableCloseOnSelect
              renderOption={(props, option, { selected }) => (
                <MenuItem key={option} value={data.option} sx={{ justifyContent: 'space-between' }} {...props}>
                  {option}
                  {selected ? <CheckIcon color="info" /> : null}
                </MenuItem>
              )}
              onChange={(event, value) => setdata({ ...data, course: value })} // prints the selected value
              renderInput={(params) => <TextField {...params} variant="outlined" />}
            />

            {/* ================================================================== */}

            <TextField
              name="startD"
              label="Start Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={data.startD || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
            />
            <TextField
              name="endD"
              label="Expected End Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={data.endD || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
            />
          </Grid>
          {/* --------------------------------------------------------------- */}
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Admission Details
            </h4>
            <TextField
              label="Taken By"
              select
              variant="filled"
              value={data.takenby || ''}
              onChange={handleChange}
              name="takenby"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option>Counsellor Vadodara</option>
              <option>Counsellor Aanand</option>
              <option>Counsellor Ahmedabad</option>
              <option>Counsellor Bhavnagar</option>
            </TextField>
            <TextField
              type="number"
              name="rollNO"
              id="standard-basic"
              value={data.rollNO || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="ID Card/Roll No "
              validators={['required']}
            />
            <TextField
              type="number"
              name="invoice"
              id="standard-basic"
              value={data.invoice || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Invoice No"
              validators={['required']}
            />
            <TextField
              name="admission"
              label="Admission Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={data.admission || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
            />
            <TextField
              label="Academic Year "
              select
              value={data.academicYear || ''}
              variant="filled"
              onChange={handleChange}
              name="academicYear"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option>2018-2019</option>
              <option>2019-2020</option>
              <option>2020-2021</option>
              <option>2021-2022</option>
              <option>2022-2023</option>
              <option>2023-2024</option>
              <option>2024-2025</option>
              <option>2025-2026</option>
              <option>2026-2027</option>
            </TextField>
          </Grid>
        </Grid>

        <Button
          color="error"
          className="mx-2"
          variant="contained"
          type="submit"
          onClick={() => {
            setdata('');
          }}
        >
          <DeleteIcon />
          <span> Clear</span>
        </Button>

        <Button color="primary" className="mx-2" variant="contained" type="submit">
          <SendIcon />
          <span> Submit</span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default AdmiForm;
