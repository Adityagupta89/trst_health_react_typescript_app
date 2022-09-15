import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const TrackDevice: React.FC<Props> = ({ icon, name, status, time }) => {
  return (
    <Box>
      <Typography sx={{ width: "100%", marginLeft: "1em" }}>{name}</Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "1em",
          marginLeft: "1em",
        }}
      >
        {icon}
        <Stack flex="1" sx={{ width: "100%" }}>
          <Typography sx={{ fontSize: "1em" }}>{status}</Typography>
          <Stack flexDirection="row" gap=".5em" sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "1em" }}>
              Estimated delivary in {time}
            </Typography>
            <Button
              variant="outlined"
              sx={{ padding: "3px", borderRadius: "20px" }}
            >
              Track Order
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

interface Props {
  icon: any;
  name: string;
  status: string;
  time: string;
}

export default TrackDevice;
