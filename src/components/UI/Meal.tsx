import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import classes from "./Meal.module.css";

const Meal: React.FC<Props> = ({ NextMeal, UpcomingMeal }) => {
  return (
    <Box className={classes.meal}>
      <Typography variant="h5" sx={{ marginLeft: ".7em" }}>
        Next Meal
      </Typography>
      <Box className={classes.nextmeal}>
        <Box className={classes.img}>
          <img
            src={NextMeal.image}
            alt="Not found"
            width="75px"
            height="75px"
          />
        </Box>
        <Box>
          <Typography>{NextMeal.status}</Typography>
          <Typography>{NextMeal.time}</Typography>
          <Typography>{NextMeal.cal}</Typography>
        </Box>
      </Box>
      <Typography variant="h6" sx={{ marginLeft: ".7em" }}>
        Upcoming Meal
      </Typography>
      <Box className={classes.lunchbox}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box>
            <Typography>{`${UpcomingMeal[0].status} Snacks`}</Typography>
          </Box>
          <Box>
            <Typography>{UpcomingMeal[0].time}</Typography>
            <Typography>{UpcomingMeal[0].cal}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box>
            <Typography>{`${UpcomingMeal[1].status} Snacks`}</Typography>
          </Box>
          <Box>
            <Typography>{UpcomingMeal[1].time}</Typography>
            <Typography>{UpcomingMeal[1].cal}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface Props {
  NextMeal: {
    image: any;
    status: string;
    time: string;
    cal: string;
  };
  UpcomingMeal: {
    status: string;
    time: string;
    cal: string;
  }[];
}

export default Meal;
