import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Common from "../components/UI/tracker/Common";
import GoalDiet from "../components/UI/tracker/GoalDiet";

const TrackerDiet = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "78vw",
        border: "1px solid black",
        padding: "2em",
        display: "flex",
        gap: "1em",
      }}
    >
      <Box sx={{ width: "39%", height: "100%" }}>
        <Stack
          flexDirection="row"
          justifyContent="flex-start"
          gap="2em"
          sx={{ marginLeft: "2em" }}
        >
          <Stack
            alignContent="center"
            flexDirection="row"
            justifyContent="center"
            sx={{
              border: "1px solid black",
              width: "40%",
              borderRadius: "20px",
              height: "40px",
              backgroundColor: "#1976d2",
            }}
          >
            <Typography variant="h4" sx={{ color: "white" }}>
              Diet
            </Typography>
          </Stack>
          <Stack flexDirection="row" gap=".5em">
            <Box sx={{ border: "1px solid black" }}>
              <FitnessCenterIcon fontSize="large" />
            </Box>
            <Box sx={{ border: "1px solid black" }}>
              <NightsStayIcon fontSize="large" />
            </Box>
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          gap="2.5em"
          sx={{ width: "90%", height: "80px", marginTop: "2em" }}
        >
          <Box>
            <CalendarMonthIcon sx={{ fontSize: "4em" }} />
          </Box>
          <Stack flexDirection="row" flex={1} justifyContent="space-between">
            <TextField
              type="date"
              label="from"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type="date"
              label="to"
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </Stack>
        <Stack gap="1em">
          <Common
            day="Day 2, Monday"
            week="Week 5"
            date="Today, Jun 2 2022"
            cal={1450}
          />
          <Common
            day="Day 2, Monday"
            week="Week 5"
            date="Today, Jun 2 2022"
            cal={1450}
          />
          <Common
            day="Day 2, Monday"
            week="Week 5"
            date="Today, Jun 2 2022"
            cal={1450}
          />
          <Common
            day="Day 2, Monday"
            week="Week 5"
            date="Today, Jun 2 2022"
            cal={1450}
          />
          <Common
            day="Day 2, Monday"
            week="Week 5"
            date="Today, Jun 2 2022"
            cal={1450}
          />
          <Common
            day="Day 2, Monday"
            week="Week 5"
            date="Today, Jun 2 2022"
            cal={1450}
          />
        </Stack>
      </Box>
      <Box sx={{ width: "59%", border: "1px solid black", height: "100%" }}>
        <GoalDiet />
      </Box>
    </Box>
  );
};

export default TrackerDiet;
