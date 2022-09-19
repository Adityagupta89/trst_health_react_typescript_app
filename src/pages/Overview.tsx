import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../components/UI/Card";
import { Box } from "@mui/material";
import classes from "./Overview.module.css";
import GlucoseChart from "../components/charts/GlucoseChart";
import { Button } from "@mui/material";
import CaloriesChart from "../components/charts/CaloriesChart";
import ActivityCard from "../components/UI/ActivityCard";
import images1 from "../images/walk.jpg";
import images2 from "../images/cycle.jpg";
import images3 from "../images/workout.jpg";
import images4 from "../images/glucose.png";
import images5 from "../images/fitbit.jpg";
import images7 from "../images/glasswater.png";
import images8 from "../images/food.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import images6 from "../images/bodyweight.jpg";
import data from "../constants/data";
import CustomizedProgressBars from "../components/UI/ProgressLineBar";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CircularBar from "../components/UI/CirclePrograssBar";
import Meal from "../components/UI/Meal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchChartData } from "../features/charts/ChartSlice";
import Devices from "../components/UI/Devices";
import SampleTest from "../components/UI/SampleTest";
import Slider from "react-slick";
import TrackDevice from "../components/UI/TrackDevice";

const settings = {
  dots: false,
  infinite: true,
  width: "100%",
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        right: "0",
        bottom: "1px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", left: "-8px" }}
      onClick={onClick}
    />
  );
}

const Overview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChartData());
  }, []);
  const Chartdata = useSelector((state) => state.chart.chartdata);
  return (
    <Grid container spacing={2} sx={{ height: "110vh" }} direction="column">
      <Grid
        item
        sm={3}
        sx={{ width: "100%", display: "flex", overflow: "hidden" }}
      >
        <Grid container columns={18}>
          <Grid item xs={12} sm={9} md={5}>
            <Card className={classes.samplecontainer}>
              <Box sx={{ width: "95%", margin: "auto", maxWidth: "70vw" }}>
                <Slider {...settings}>
                  <SampleTest status="Collected" test="Blood" time="24Hrs" />
                  <SampleTest status="Collected" test="Blood" time="24Hrs" />
                  <SampleTest status="Collected" test="Blood" time="24Hrs" />
                </Slider>
              </Box>
            </Card>
            <Card className={classes.box}>
              <Box sx={{ width: "95%", margin: "auto", maxWidth: "70vw" }}>
                <Slider {...settings}>
                  <TrackDevice
                    icon={<LocalShippingIcon sx={{ fontSize: "2.5em" }} />}
                    name="Smart Scale"
                    status="Dispatched"
                    time="2 days"
                  />
                  <TrackDevice
                    icon={<LocalShippingIcon sx={{ fontSize: "2.5em" }} />}
                    name="Smart Scale"
                    status="Dispatched"
                    time="2 days"
                  />
                  <TrackDevice
                    icon={<LocalShippingIcon sx={{ fontSize: "2.5em" }} />}
                    name="Smart Scale"
                    status="Dispatched"
                    time="2 days"
                  />
                </Slider>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9} md={5}>
            <Card className={classes.devices}>
              <Card className={classes.device}>
                <Devices
                  data={{
                    name: "Contineous Glucose Monitoring",
                    date: "12th June 2022",
                  }}
                  images={images4}
                />
              </Card>
              <Card className={classes.device}>
                <Devices
                  data={{ name: "Fitbit 02", date: "12th June 2022" }}
                  images={images5}
                />
              </Card>
              <Card className={classes.device}>
                <Devices
                  data={{ name: "Fitbit 02", date: "12th June 2022" }}
                  images={images5}
                />
              </Card>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card className={`${classes.box} ${classes.bodyweight}`}>
              <h4>Body Weight</h4>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <img
                    src={images6}
                    width="43px"
                    height="50px"
                    alt="not found"
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h5"> 97.03 </Typography>
                  <Typography variant="body2" sx={{ marginLeft: "1rem" }}>
                    {" "}
                    kgs
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.box}>
              <Box
                sx={{
                  border: "1px solid black",
                  borderRadius: "50px",
                  marginLeft: "1rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={images7}
                  alt="Not found"
                  width="60px"
                  height="60px"
                  style={{ marginTop: ".5em" }}
                />
              </Box>
              <Box sx={{ flex: "1", margin: "0 2rem", gap: ".5em" }}>
                <Typography
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  1500ml/2300ml
                </Typography>
                <CustomizedProgressBars
                  borderRadius="8px"
                  barColor="green"
                  value={Math.floor((1500 / 2300) * 100)}
                  height="20px"
                  width="100%"
                />
              </Box>
            </Card>
            <Card className={classes.box}>
              <Box sx={{ marginLeft: "1rem" }}>
                <DirectionsRunIcon
                  fontSize="large"
                  sx={{ height: "1.5em", width: "1.5em" }}
                />
              </Box>
              <Box sx={{ flex: "1", margin: "0 2rem", gap: ".5em" }}>
                <Typography
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  7000 of 10000 steps walked
                </Typography>
                <CustomizedProgressBars
                  borderRadius="8px"
                  barColor="grey"
                  value={Math.floor((7000 / 10000) * 100)}
                  height="20px"
                  width="100%"
                />
              </Box>
            </Card>
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
              <GlucoseChart
                className={classes.chart1}
                dataChart={data.GlucoseData}
              />
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
            <Card className={classes.box2}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: "1em",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginLeft: "1em" }}>
                  <CircularBar
                    style={{
                      width: "60px",
                      height: "60px",
                      textColor: "black",
                      pathColor: "green",
                      trailColor: "grey",
                    }}
                    data={{ percentage: 70 }}
                  />
                </Box>
                <Box
                  sx={{ flex: "1", display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="h6">Metabolic Health Score</Typography>
                  <Typography variant="h6">Day 92</Typography>
                  <Typography variant="h6">Normalizing Phase</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Sleep</Typography>
              <Typography variant="subtitle1">Last Night v</Typography>
            </Box>
            <Card className={classes.chartcard}>
              <GlucoseChart
                className={classes.chart2}
                dataChart={data.GlucoseData}
              />
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
              <CaloriesChart className={classes.chart2} dataChart={Chartdata} />
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
            <Card className={classes.box3}>
              <Meal
                NextMeal={{
                  cal: "500",
                  image: images8,
                  status: "Lunch",
                  time: "At 1:30 PM",
                }}
                UpcomingMeal={[
                  { cal: "250", status: "Evening", time: "at 5:30 PM" },
                  { cal: "450", status: "Evening", time: "at 9:30 PM" },
                ]}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={16} md={6}>
            <Box sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h6">Activity</Typography>
              <Typography variant="subtitle1">Today v</Typography>
            </Box>
            <Card className={classes.activity}>
              <Card className={classes.activitycard}>
                <ActivityCard
                  data={{
                    title: "Walking",
                    target: "30 Mlns/100 Cal",
                    achieved: "20 Mlns",
                    calories: "80 Calories",
                  }}
                  images={images1}
                />
              </Card>
              <Card className={classes.activitycard}>
                <ActivityCard
                  data={{
                    title: "Cycling",
                    target: "15 Mins/100 Cal",
                    achieved: "20 Mins",
                    calories: "100 Calories",
                  }}
                  images={images2}
                />
              </Card>
              <Card className={classes.activitycard}>
                <ActivityCard
                  data={{
                    title: "Workout-1",
                    target: "12 Rep,3 Set/50 cal",
                    achieved: "12 Reps,2 Set",
                    calories: "40 Calories",
                  }}
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
