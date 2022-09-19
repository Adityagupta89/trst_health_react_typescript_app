import React from "react";
import Tabbar from "../components/UI/Tabbar";
import Avatar from "@mui/material/Avatar";
import images from "../images/avatar.jpeg";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const PatientDetails = () => {
  return (
    <Box>
      <Box sx={{ margin: "1.5em", display: "flex" }}>
        <Avatar
          alt="Cindy Baker"
          src={images}
          sx={{ width: 100, height: 100 }}
        />
        <Box sx={{ margin: "1em" }}>
          <Typography
            variant="h5"
            sx={{
              typography: { lg: "h5", sm: "body1", xs: "body1" },
            }}
          >
            Mrs. Della O'Kon
          </Typography>
          <Typography
            variant="h5"
            sx={{
              typography: { lg: "h5", sm: "body1", xs: "body1" },
            }}
          >
            Male 37 Years
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "80%",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              borderRadius: "5px",
              border: "1px solid black",
              padding: "0.4em",
              typography: { lg: "h5", sm: "body1", xs: "body1" },
            }}
          >
            View Patient Profile
          </Typography>
        </Box>
      </Box>
      <Tabbar />
    </Box>
  );
};

export default PatientDetails;
