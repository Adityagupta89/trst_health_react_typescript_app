import React from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./components/UI/Sidebar";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";
import images from "./images/avatar.jpeg";
import DietModal from "./components/UI/DietModal";
import Avatar from "@mui/material/Avatar";
import { Toolbar } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MessageModal from "./components/UI/MessageModal";
import InputAdornment from "@mui/material/InputAdornment";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { MenuItem } from "@mui/material";

const currencies = [
  {
    value: "Coach",
    label: "Coach",
  },
  {
    value: "Provider",
    label: "Provider",
  },
  {
    value: "Status",
    label: "Status",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const textfieldStyle = {
  display: "flex",
  alignItems: "flex-end",
  margin: "2em",
  width: "100%",
};

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

      <Box component="main" sx={{ width: "100%", height: "100vh" }}>
        <Toolbar />
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ width: "90%" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              margin: "2em",
              width: "100%",
            }}
          >
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search by Id or Name"
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Box>
          <Box sx={textfieldStyle}>
            <TextField
              id="input-with-icon-textfield"
              defaultValue="Coach"
              select
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={textfieldStyle}>
            <TextField
              id="input-with-icon-textfield"
              defaultValue="Provider"
              select
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={textfieldStyle}>
            <TextField
              id="input-with-icon-textfield"
              select
              sx={{ width: "100%" }}
              defaultValue="Status"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RadioButtonCheckedIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Stack>
        <DietModal />
        <MessageModal />
      </Box>
    </Box>
  );
};

export default App;
