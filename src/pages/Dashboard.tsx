import React from "react";
import { Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const textfieldStyle = {
  display: "flex",
  alignItems: "flex-end",
  margin: "2em",
  width: "100%",
};

const searchBoxStyle = {
  display: "flex",
  alignItems: "flex-end",
  margin: "2em",
};

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

const Dashboard = () => {
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ width: "90%" }}
      >
        <Box sx={searchBoxStyle}>
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

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              ...textfieldStyle,
              border: "1px solid black",
              height: "50px",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon sx={{ fontSize: "3.5em" }} />
            <Typography>All Date</Typography>
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
        </Box>
      </Stack>
    </>
  );
};

export default Dashboard;
