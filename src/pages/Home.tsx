import { Box, Toolbar } from "@mui/material";
import React from "react";
import Navbar from "../components/UI/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../components/UI/Sidebar";
import PatientDetails from "./PatientDetails";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import images from "../images/avatar.jpeg";
import Avatar from "@mui/material/Avatar";
import Home1 from "./Home1";
import Dashboard from "./Dashboard";

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

const Home = () => {
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
      <Box component="main" sx={{ width: "100%", height: "100vh" }}>
        <Toolbar sx={{ marginBottom: ".7em" }} />
        <PatientDetails />
        {/* <Home1/> */}
        {/* <Dashboard /> */}
      </Box>
    </Box>
  );
};

export default Home;
