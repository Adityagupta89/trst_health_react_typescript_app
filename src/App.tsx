import React from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import images from "./images/avatar.jpeg";
import Avatar from "@mui/material/Avatar";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        name="Aditya Gupta"
        icon={<MenuIcon />}
        profileIcon={
          <Avatar
            alt="Cindy Baker"
            src={images}
            sx={{ width: 50, height: 50 }}
          />
        }
      />
    </Box>
  );
};

export default App;
