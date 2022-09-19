import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Box, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import validationSchema from "../../validation/ProviderValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleClose = () => {
    onClose();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box>
        <Stack alignItems="center" gap=".5em" sx={{ marginTop: "1em" }}>
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            <PersonIcon />
          </Avatar>
          <Typography>Click to Add Profile Image</Typography>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="1em" sx={{ padding: "2em" }}>
            <Stack flexDirection="row" gap="1em">
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="Provider Type"
                  variant="outlined"
                  {...register("provider")}
                  error={errors.provider ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.provider?.message}
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="Display Name"
                  variant="outlined"
                  {...register("displayname")}
                  error={errors.displayname ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.displayname?.message}
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection="row" gap="1em">
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  {...register("firstname")}
                  error={errors.firstname ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.firstname?.message}
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  {...register("lastname")}
                  error={errors.lastname ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.lastname?.message}
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection="row" gap="1em">
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="Email "
                  variant="outlined"
                  {...register("email")}
                  error={errors.email ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.email?.message}
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  {...register("phonenumber")}
                  error={errors.phonenumber ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.phonenumber?.message}
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection="row" gap="1em">
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  {...register("city")}
                  error={errors.city ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.city?.message}
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                  {...register("state")}
                  error={errors.state ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.state?.message}
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <TextField
                id="outlined-basic"
                label="Speciality/Practice Type"
                variant="outlined"
                {...register("speciality")}
                error={errors.speciality ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.speciality?.message}
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="1em">
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="Role"
                  variant="outlined"
                  {...register("role")}
                  error={errors.role ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.role?.message}
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="NPI Number"
                  variant="outlined"
                  {...register("npi")}
                  error={errors.npi ? true : false}
                  fullWidth
                />
                <Typography variant="inherit" color="error">
                  {errors.npi?.message}
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <TextField
                label="Bio"
                variant="outlined"
                minRows={3}
                multiline={true}
                {...register("bio")}
                error={errors.bio ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.bio?.message}
              </Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="1em">
              <Typography>Upload Profile Picture</Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="primary"
                  type="file"
                  {...register("files")}
                  error={errors.files ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.files?.message}
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection="row" justifyContent="center" gap="1em">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Dialog>
  );
}

const ProviderModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default ProviderModal;
