import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import images from "../images/logo.png";
import validationSchema from "../validation/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const paperStyling = {
  width: "20vw",
  height: "45vh",
  margin: "10rem auto",
  padding: "20px",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://thinkitive-e6e60-default-rtdb.firebaseio.com/login.json", {
        username: data.username,
        password: data.password,
      })
      .then((data) => toast("Login Successfull"))
      .catch((err) => toast(err.message));
  };

  return (
    <>
      <ToastContainer />
      <Box>
        <Paper elevation={20} style={paperStyling}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/">
              <Avatar
                alt="not found"
                src={images}
                sx={{ width: "200px", height: "100px" }}
              />
            </Link>
            <h2 style={{ marginTop: ".5rem" }}>Login</h2>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
              <TextField
                id="username"
                sx={{ mt: "1rem" }}
                label="Username"
                InputLabelProps={{ shrink: true }}
                placeholder="Please enter username"
                variant="outlined"
                {...register("username")}
                error={errors.username ? true : false}
                fullWidth
              />
              <Typography variant="inherit" color="error">
                {errors.username?.message}
              </Typography>
              <TextField
                id="standard-basic2"
                sx={{ mt: "1.5rem" }}
                label="Password"
                placeholder="Please Enter Password"
                InputLabelProps={{ shrink: true }}
                type="password"
                variant="outlined"
                {...register("password")}
                error={errors.password ? true : false}
                fullWidth
              />
              <Typography variant="inherit" color="error">
                {errors.password?.message}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: "2em" }}
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </form>
          <Stack alignItems="flex-end" sx={{ marginTop: "1em" }}>
            <Link
              to="/forgotpassword"
              style={{ textDecoration: "none", color: "#edac47" }}
            >
              Forgot Password?
            </Link>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
