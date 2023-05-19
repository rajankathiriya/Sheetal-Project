import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';

const Master = () => {
    const myNav = useNavigate()
    const subjectpage = () => {
        myNav("/subject")
    }
    const coursepage = () => {
        myNav("/course")
    }
    const feespage = () => {
        myNav("/fees")
    }
    const questiontype = () => {
        myNav("/questiontype")
    }
    const academicyear = () => {
        myNav("/academicyear")
    }
    const takenby = () => {
        myNav("/takenby")
    }
    const facultyregistration = () => {
        myNav('/facultyregistration');
    };
    return (
        <>
            <Helmet>
                {/* <title> Dashboard: Products | Minimal UI </title> */}
                <title> Shital Academy Vadodara </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Master
                </Typography>
                <div className="row">
                    <div className="col-sm-4">
                        <Button color="primary" variant="contained" type="submit" onClick={subjectpage} fullWidth>
                            <span> Subject</span>
                        </Button>
                    </div>
                    <div className="col-sm-4">
                        <Button color="primary" variant="contained" type="submit" onClick={coursepage} fullWidth>
                            <span> Course</span>
                        </Button>
                    </div>
                    <div className="col-sm-4">
                        <Button color="primary" variant="contained" type="submit" onClick={feespage} fullWidth>
                            <span> Fees Package</span>
                        </Button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <Button color="primary" variant="contained" type="submit" onClick={questiontype} fullWidth>
                            <span> Question type</span>
                        </Button>
                    </div>
                    <div className="col-sm-4">
                        <Button color="primary" variant="contained" type="submit" onClick={academicyear} fullWidth>
                            <span> Academic Year</span>
                        </Button>
                    </div>
                    <div className="col-sm-4">
                        <Button color="primary" variant="contained" type="submit" onClick={takenby} fullWidth>
                            <span> Taken By</span>
                        </Button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <Button color="primary" variant="contained" type="submit" onClick={facultyregistration} fullWidth>
                            <span> Faculty Registration</span>
                        </Button>
                    </div>
                </div>


            </Container>
        </>
    );
}

export default Master;


