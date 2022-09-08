import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../UI/Card";
import { Box } from "@mui/material";
import classes from "./Overview.module.css";
import GlucoseChart from "../charts/glucose/GlucoseChart";
import { Button } from "@mui/material";
import CaloriesChart from "../charts/calories/CaloriesChart";
import ActivityCard from "../UI/ActivityCard";
import images1 from "../../images/walk.jpg";
import images2 from "../../images/cycle.jpg";
import images3 from "../../images/workout.jpg";
import images4 from "../../images/glucose.png";
import images5 from "../../images/fitbit.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Overview = () => {
  return (
    <Grid container spacing={2} sx={{ height: "100vh" }} direction="column">
      <Grid
        item
        sm={3}
        sx={{ width: "100%", display: "flex", overflow: "hidden" }}
      >
        <Grid container columns={18}>
          <Grid item xs={12} sm={9} md={5}>
            <Card className={classes.box}>
              <Box>
                <Box
                  sx={{
                    marginLeft: "1em",
                    display: "flex",
                    gap: ".5em",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "1em" }}>Blood Test</Typography>
                  <Typography sx={{ fontSize: "1em" }}>
                    Sample Collected
                  </Typography>
                  <Typography sx={{ fontSize: "1em" }}>
                    Expected result within 24Hrs
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card className={classes.box}>
              <Box>
                <Typography sx={{ width: "100%", marginLeft: "1em" }}>
                  Smart Scale
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "280px",
                    gap: "1em",
                    marginLeft: "1em",
                  }}
                >
                  <LocalShippingIcon sx={{ fontSize: "2.5em" }} />
                  <Box>
                    <Typography sx={{ fontSize: "1em" }}>Dispatched</Typography>
                    <Typography sx={{ fontSize: "1em" }}>
                      Estimated delivary in 2 days
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9} md={5}>
            <Card className={classes.box}>
              <img src={images4} width="50px" height="50px" />
              <Box sx={{ height: "50%" }}>
                <Typography sx={{ fontSize: "1.2em" }}>
                  Contineous Glucose Monitoring
                </Typography>
                <Typography
                  sx={{ fontSize: "1em", fontWeight: "200px" }}
                  variant="subtitle2"
                >
                  Connected on 12th June 2022
                </Typography>
              </Box>
            </Card>
            <Card className={classes.box}>
              <img
                src={images5}
                width="40px"
                height="40px"
                style={{ margin: ".7em" }}
              />
              <Box sx={{ height: "50%" }}>
                <Typography sx={{ fontSize: "1.1em" }}>Fitbit 02</Typography>
                <Typography
                  sx={{ fontSize: "1.0em", fontWeight: "200px" }}
                  variant="subtitle2"
                >
                  Connected on 12th June 2022
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card className={classes.box}>Body Weight</Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.box}>1500ml/2300ml</Card>
            <Card className={classes.box}>7000 of 10000 steps</Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sm={5}
        sx={{ width: "100%", display: "flex", overflow: "hidden" }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Glucose Monitoring</Typography>
              <Typography variant="subtitle1">Today v</Typography>
            </Box>
            <Card className={classes.box1}>
              <Box
                sx={{
                  justifyContent: "flex-start",
                  display: "flex",
                  height: "92%",
                }}
              >
                CGM
              </Box>
              <GlucoseChart className={classes.chart1} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "90%",
                  justifyContent: "center",
                  gap: "1em",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ padding: "0px", fontSize: ".7em" }}
                >
                  Comment
                </Button>
                <Button
                  variant="contained"
                  sx={{ padding: "0px", fontSize: ".7em" }}
                >
                  Add Steps
                </Button>
                <Button
                  variant="contained"
                  sx={{ padding: "0px", fontSize: ".7em" }}
                >
                  Add Meal
                </Button>
                <Button
                  variant="contained"
                  sx={{ padding: "0px", fontSize: ".7em" }}
                >
                  Add Medicine
                </Button>
              </Box>
            </Card>
            <Card className={classes.box2}>Blood Test</Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Sleep</Typography>
              <Typography variant="subtitle1">Last Night v</Typography>
            </Box>
            <Card className={classes.chartcard}>
              <GlucoseChart className={classes.chart2} />
              <Typography
                variant="h5"
                sx={{ width: "100%", marginLeft: "2em", fontWeight: "10" }}
              >
                (7.5 of 8 hrs sleep)
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Virtual Doctor</Typography>
            </Box>
            <Card className={classes.box3}>Blood Test</Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={4} sx={{ width: "100%", display: "flex" }}>
        <Grid container columns={16}>
          <Grid item xs={12} sm={10} md={6}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Calories Consumed</Typography>
              <Typography variant="subtitle1">Today v</Typography>
            </Box>
            <Card className={classes.chartcard}>
              <CaloriesChart className={classes.chart2} />
              <Typography
                variant="h5"
                sx={{ width: "100%", marginLeft: "2em", fontWeight: "10" }}
              >
                (1200 of 1350 Calories)
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Meals</Typography>
              <Typography variant="subtitle1">Today v</Typography>
            </Box>
            <Card className={classes.box3}>Blood Test</Card>
          </Grid>
          <Grid item xs={12} sm={16} md={6}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Activity</Typography>
              <Typography variant="subtitle1">Today v</Typography>
            </Box>
            <Card className={classes.activity}>
              <Card className={classes.activitycard}>
                <ActivityCard
                  title="Walking"
                  target="30 Mlns/100 Cal"
                  achieved="20 Mlns"
                  calories="80 Calories"
                  images={images1}
                />
              </Card>
              <Card className={classes.activitycard}>
                <ActivityCard
                  title="Cycling"
                  target="15 Mins/100 Cal"
                  achieved="20 Mins"
                  calories="100 Calories"
                  images={images2}
                />
              </Card>
              <Card className={classes.activitycard}>
                <ActivityCard
                  title="Workout-1"
                  target="12 Rep,3 Set/50 cal"
                  achieved="12 Reps,2 Set"
                  calories="40 Calories"
                  images={images3}
                />
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Overview;
