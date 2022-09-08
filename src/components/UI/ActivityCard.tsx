import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ActivityCard: React.FC<Props> = ({
  title,
  target,
  achieved,
  calories,
  images,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <Box sx={{ width: "40%", height: "100%", padding: ".5em" }}>
          <img src={images} alt="not found" width="100%" height="132px" />
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            gap: "1em",
            flexDirection: "column",
            alignItem: "center",
          }}
        >
          <Typography>{title}</Typography>
          <Typography>Target - {target}</Typography>
          <Typography>Achieved - {achieved}</Typography>
          <Typography>Calories Burnt - {calories}</Typography>
        </Box>
      </Box>
    </>
  );
};

interface Props {
  title: string;
  target: string;
  achieved: string;
  calories: string;
  images: any;
}

export default ActivityCard;
