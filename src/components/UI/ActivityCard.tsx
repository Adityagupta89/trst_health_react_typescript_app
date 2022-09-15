import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import classes from "./ActivityCard.module.css";
const ActivityCard: React.FC<Props> = ({ data, images }) => {
  return (
    <>
      <Box className={classes.activitycard}>
        <Box className={classes.img}>
          <img src={images} alt="not found" width="100%" height="120px" />
        </Box>
        <Box className={classes.text}>
          <Typography>{data.title}</Typography>
          <Typography>Target - {data.target}</Typography>
          <Typography>Achieved - {data.achieved}</Typography>
          <Typography>Calories Burnt - {data.calories}</Typography>
        </Box>
      </Box>
    </>
  );
};

interface Props {
  data: {
    title: string;
    target: string;
    achieved: string;
    calories: string;
  };
  images: any;
}

export default ActivityCard;
