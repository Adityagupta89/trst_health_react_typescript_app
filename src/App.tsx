import React from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./components/UI/Sidebar";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";
import images from "./images/avatar.jpeg";
import Avatar from "@mui/material/Avatar";

const App: React.FC = () => {
  const heading: any[] = [
    {
      name: "Dashboard",
      icon: <InboxIcon />,
    },
    {
      name: "Provider",
      icon: <MailIcon />,
    },
    {
      name: "Patients",
      icon: <MailIcon />,
    },
    {
      name: "Appointments",
      icon: <InboxIcon />,
    },
    {
      name: "Care Program",
      icon: <InboxIcon />,
    },
    {
      name: "Devices",
      icon: <InboxIcon />,
    },
    {
      name: "Settings",
      icon: <InboxIcon />,
    },
    {
      name: "SignOut",
      icon: <InboxIcon />,
    },
  ];
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
      <Sidebar head={heading} />
    </Box>
  );
};

export default App;
