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

const QuestionEditForm = (props) => {
  // const [state, setState] = useState({ date: new Date() });
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState({
    qtype: "",
    question: '',
    answer: '',
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://desert-sand-reindeer-wrap.cyclic.app/api/question', data).then((r) => {
      props.changeEdit(r.data._id);
      setOpen(props.handleEditClose);

    });
    setdata((e.target.value = ''));
  };

  // const handleDateChange = (date) => setState({ ...state, date });

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null} autocomplete="off">
        <Grid container spacing={8}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Question & Answer
            </h4>
            <TextField
              label="Question Type"
              select
              value={data.qtype || ''}
              variant="filled"
              helperText="Please Select Question Type"
              onChange={handleChange}
              name="qtype"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option>Book1</option>
              <option>Book2</option>
            </TextField>
            <TextField
              type="text"
              name="question"
              id="standard-basic"
              value={data.question || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Question"
              validators={['required']}
            />
            <TextField
              type="text"
              name="answer"
              id="standard-basic"
              value={data.answer || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Answer"
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

export default QuestionEditForm;
