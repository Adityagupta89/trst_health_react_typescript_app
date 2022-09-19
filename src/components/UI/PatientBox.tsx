import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const PatientBox: React.FC<Props> = ({ heading, score, className, bg }) => {
  return (
    <Box className={className} sx={{ backgroundColor: bg ? bg : "white" }}>
      <Box sx={{ width: "80%", height: "80%" }}>
        <Stack>
          <Typography variant="h4">{heading}</Typography>
        </Stack>
        <Stack alignItems="flex-end">
          <Typography variant="h4">{score}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

interface Props {
  heading: string;
  score: number;
  className?: string;
  bg: any;
}

export default PatientBox;
