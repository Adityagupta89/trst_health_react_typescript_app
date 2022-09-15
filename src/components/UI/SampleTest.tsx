import { Button, Stack } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";

const SampleTest: React.FC<Props> = ({ test, status, time }) => {
  return (
    <Box
      sx={{
        marginLeft: "1.5em",
        display: "flex",
        gap: ".3em",
        width: "100%",
        height: "85%",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "1em" }}>{test} Test</Typography>
      <Typography sx={{ fontSize: "1em" }}>Sample {status}</Typography>
      <Stack flexDirection="row" gap="2em">
        <Typography sx={{ fontSize: "1em" }}>
          Expected result within {time}
        </Typography>
        <Button
          variant="outlined"
          sx={{ padding: "4px", borderRadius: "20px" }}
        >
          View Report
        </Button>
      </Stack>
    </Box>
  );
};
interface Props {
  test: string;
  status: string;
  time: string;
}
export default SampleTest;
