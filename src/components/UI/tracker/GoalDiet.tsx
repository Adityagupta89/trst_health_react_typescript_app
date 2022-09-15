import { Stack, Typography } from "@mui/material";
import React from "react";
import images1 from "../../../images/protein2.png";
import images2 from "../../../images/low-carb.png";
import images3 from "../../../images/fat.png";
import CustomizedProgressBars from "../ProgressLineBar";
import classes from "./GoalDiet.module.css";
import CircularBar from "../CirclePrograssBar";

const GoalDiet = () => {
  return (
    <Stack flexDirection="row" gap="2em" className={classes.goaldiet}>
      <Stack>
        <Typography variant="h3">Goal</Typography>
        <Typography variant="h5">Weight</Typography>
        <Typography variant="h5">Loss</Typography>
        <Typography variant="h5">Stay</Typography>
        <Typography variant="h5">Healthy</Typography>
      </Stack>
      <Stack flex={1} justifyContent="space-evenly">
        <Stack flexDirection="row">
          <Stack flexDirection="row" gap="1em" sx={{ width: "20%" }}>
            <img src={images1} alt="not found" width="40px" height="40px" />
            <Typography>Proteins</Typography>
          </Stack>
          <CustomizedProgressBars
            width="80%"
            height="20px"
            value={60}
            borderRadius="10px"
            barColor="#34cd87"
          />
        </Stack>
        <Stack flexDirection="row">
          <Stack flexDirection="row" gap="1em" sx={{ width: "20%" }}>
            <img src={images2} alt="not found" width="40px" height="40px" />
            <Typography>Carbos</Typography>
          </Stack>
          <CustomizedProgressBars
            width="80%"
            height="20px"
            value={60}
            borderRadius="10px"
            barColor="#34cd87"
          />
        </Stack>
        <Stack flexDirection="row">
          <Stack flexDirection="row" gap="1em" sx={{ width: "20%" }}>
            <img src={images3} alt="not found" width="40px" height="40px" />
            <Typography>Fats</Typography>
          </Stack>
          <CustomizedProgressBars
            width="80%"
            height="20px"
            value={60}
            borderRadius="10px"
            barColor="#34cd87"
          />
        </Stack>
      </Stack>
      <Stack>
        <CircularBar
          data={{
            percentage: 60,
          }}
          style={{}}
        />
      </Stack>
    </Stack>
  );
};

export default GoalDiet;
