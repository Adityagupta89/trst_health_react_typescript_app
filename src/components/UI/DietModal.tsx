import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Grid } from "@mui/material";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  height: "30vh",
  overflow: "scroll",
  overflowX: "hidden",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

const headingStyle = {
  margin: "0px .5em",
  width: "20%",
};

const textfieldStyle = {
  margin: ".5em",
  width: "100%",
};

const currencies = [
  {
    value: "Breakfast",
    label: "Breakfast",
  },
  {
    value: "Lunch",
    label: "Lunch",
  },
  {
    value: "Snacks",
    label: "Snacks",
  },
  {
    value: "Dinner",
    label: "Dinner",
  },
];

const DietModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fields, setFields] = useState([0]);
  interface dietType {
    purpose: string;
    time: string;
    calories: number;
    protiens: number;
    fats: number;
    carbs: number;
    fiber: number;
  }
  const [dietData, setDietData] = useState<dietType[]>([
    {
      purpose: "",
      time: "",
      calories: 0,
      protiens: 0,
      fats: 0,
      carbs: 0,
      fiber: 0,
    },
  ]);
  const handleDiet = (e) => {
    const id = +e.target.id;
    const name = e.target.name;
    setDietData((prev) => {
      if (prev.length !== fields.length)
        return [
          ...prev,
          {
            purpose: "",
            time: "",
            calories: 0,
            protiens: 0,
            fats: 0,
            carbs: 0,
            fiber: 0,
            [name]: e.target.value,
          },
        ];
      return prev.map((diet, index) => {
        if (index === id)
          return {
            ...diet,
            [name]: e.target.value,
          };
        else return diet;
      });
    });
  };

  const deleteField = (e) => {
    const id = +e.target.id;
    console.log(id);
    setFields((prev) => prev.filter((field) => id !== field));
  };
  console.log(fields);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "1.5em" }}
          >
            Current diet plan
          </Typography>

          {fields.map((field) => (
            <Grid container sx={{ width: "55vw" }}>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  id={field.toString()}
                  name="purpose"
                  label="Purpose"
                  select
                  defaultValue="Breakfast"
                  onChange={handleDiet}
                  sx={textfieldStyle}
                  required
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  id={field.toString()}
                  label="Time"
                  defaultValue="Breakfast"
                  select
                  sx={textfieldStyle}
                  onChange={handleDiet}
                  name="time"
                  required
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item sm={6} md={1}>
                <TextField
                  sx={textfieldStyle}
                  label="Calories"
                  id={field.toString()}
                  name="calories"
                  onChange={handleDiet}
                  required
                />
              </Grid>
              <Grid item sm={6} md={1}>
                <TextField
                  sx={textfieldStyle}
                  label="Protiens"
                  id={field.toString()}
                  name="protiens"
                  onChange={handleDiet}
                  required
                />
              </Grid>
              <Grid item sm={6} md={1}>
                <TextField
                  sx={textfieldStyle}
                  id={field.toString()}
                  label="fats"
                  name="fats"
                  onChange={handleDiet}
                  required
                />
              </Grid>
              <Grid item sm={6} md={1}>
                <TextField
                  sx={textfieldStyle}
                  label="Carbs"
                  id={field.toString()}
                  name="carbs"
                  onChange={handleDiet}
                  required
                />
              </Grid>
              <Grid item sm={12} md={1}>
                <TextField
                  sx={textfieldStyle}
                  id={field.toString()}
                  label="Fiber"
                  name="fiber"
                  onChange={handleDiet}
                  required
                />
              </Grid>
              {field === fields.length - 1 && (
                <Button
                  variant="contained"
                  sx={{
                    width: "18%",
                    height: "56px",
                    padding: "0px",
                    marginLeft: "2em",
                    marginTop: ".6em",
                  }}
                  onClick={() => setFields((prev) => [...prev, prev.length])}
                >
                  Add More Food
                </Button>
              )}
              {field.toString() !== "0" && (
                <Button
                  variant="contained"
                  id={field.toString()}
                  sx={{
                    width: "12%",
                    height: "56px",
                    padding: "0px",
                    marginLeft: "2em",
                  }}
                  onClick={deleteField}
                  disabled={field.toString() === "0"}
                >
                  Delete
                </Button>
              )}
            </Grid>
          ))}
          <Stack
            flexDirection="row"
            justifyContent="center"
            sx={{ marginTop: "2em" }}
          >
            <Button
              variant="outlined"
              sx={{ marginRight: "1em" }}
              onClick={handleClose}
            >
              {"<< Back"}
            </Button>
            <Button variant="contained">{"Save & Next >>"}</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default DietModal;
