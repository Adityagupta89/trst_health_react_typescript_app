import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Card from "../Card";
import CircularBar from "../CirclePrograssBar";
import classes from "./Common.module.css";

const Common: React.FC<Props> = ({ day, week, date, cal }) => {
  const percent: number = Math.floor((cal / 1600) * 100);
  return (
    <Card className={classes.commondiet}>
      <Stack flexDirection="row" gap="1em">
        <Stack justifyContent="center">
          <CircularBar
            style={{
              width: "75px",
              height: "75px",
              textColor: "blue",
              pathColor: "#29b529",
              trailColor: "#c4c4c4",
            }}
            data={{
              percentage: percent,
            }}
          />
        </Stack>
        <Stack flex={1} justifyContent="space-evenly">
          <Typography>{day}</Typography>
          <Typography>{week}</Typography>
          <Typography>{date}</Typography>
        </Stack>
        <Stack flex={0.5} gap=".4em" sx={{ marginRight: "1em" }}>
          <Typography>({cal} of 1600 cal)</Typography>
          <Button variant="contained" sx={{ fontSize: ".8em", padding: "0" }}>
            View Notes
          </Button>
          <Button variant="contained" sx={{ fontSize: ".8em", padding: "0" }}>
            Add Notes
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

interface Props {
  day: string;
  week: string;
  date: string;
  cal: number;
}

export default Common;
