import { Box, Typography } from "@mui/material";
import React from "react";

const Devices: React.FC<Props> = ({ data, images }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "90px",
        alignItems: "center",
        marginLeft: "1em",
      }}
    >
      <img src={images} width="50px" height="50px" alt="" />
      <Box sx={{ height: "50%", margin: "0 1em" }}>
        <Typography sx={{ fontSize: "1.2em" }}>{data.name}</Typography>
        <Typography
          sx={{ fontSize: "1em", fontWeight: "200px" }}
          variant="subtitle2"
        >
          Connected on {data.date}
        </Typography>
      </Box>
    </Box>
  );
};
interface Props {
  data: {
    name: string;
    date: string;
  };
  images: any;
}

export default Devices;
