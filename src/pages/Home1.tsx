import { Box, Grid } from "@mui/material";
import React from "react";
import classes from "./Home1.module.css";
import PatientBox from "../components/UI/PatientBox";
import Dashboard from "./Dashboard";

const Home1 = () => {
  return (
    <Box>
      <Grid container className={classes.container}>
        <Grid item className={classes.containerbox}>
          <PatientBox
            heading="Patients"
            score={225}
            className={classes.card}
            bg="#71c771"
          />
        </Grid>
        <Grid item className={classes.containerbox}>
          <PatientBox
            heading="Providers"
            score={37}
            className={classes.card}
            bg="#ae5dae"
          />
        </Grid>
        <Grid item className={classes.containerbox}>
          <PatientBox
            heading="Health coaches"
            score={56}
            className={classes.card}
            bg="skyblue"
          />
        </Grid>

        <Grid item className={classes.containerbox}>
          <PatientBox
            heading="Subscription"
            score={135}
            className={classes.card}
            bg="#e0b76a"
          />
        </Grid>
        <Grid item className={classes.containerbox}>
          <PatientBox
            heading="Devices"
            score={36}
            className={classes.card}
            bg="#c1dbd5"
          />
        </Grid>
        <Grid item className={classes.containerbox}>
          <PatientBox
            heading="Programs"
            score={135}
            className={classes.card}
            bg="#bd8691"
          />
        </Grid>
      </Grid>

      <Box>
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Home1;
