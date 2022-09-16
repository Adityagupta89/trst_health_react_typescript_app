import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Box, MenuItem, Stack, TextField } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ padding: "2em" }}>
        <Box sx={{ marginBottom: "1em" }}>
          <Typography>Add New Program</Typography>
        </Box>
        <Stack gap="2em">
          <TextField
            id="outlined-basic"
            label="Program Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ minWidth: "30vw", marginTop: "2em" }}
        >
          <Typography sx={{ width: "35%" }}>Vitals</Typography>
          <Stack flexDirection="row" gap="2em" sx={{ width: "65%" }}>
            <Typography>Tracking Device</Typography>
            <Typography>Tracking Interval</Typography>
            <Typography>Tracking Frequency</Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ marginTop: "1em" }}
        >
          <Typography sx={{ width: "35%" }}>Hearth Rate</Typography>
          <Stack flexDirection="row" sx={{ width: "65%" }} gap="2em">
            <TextField select label="Select" fullWidth>
              {[
                "Glucometer 250",
                "Blood Pressure cuff",
                "Weighing machine",
                "Pluse Oxymeter",
                "Themometer",
              ].map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField select label="Select" fullWidth>
              {["Daily", "Alternate Day", "Weekly", "Monthly"].map(
                (option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField type="text" />
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ marginTop: "1em" }}
        >
          <Typography sx={{ width: "35%" }}>Hearth Rate</Typography>
          <Stack flexDirection="row" sx={{ width: "65%" }} gap="2em">
            <TextField select label="Select" fullWidth>
              {[
                "Glucometer 250",
                "Blood Pressure cuff",
                "Weighing machine",
                "Pluse Oxymeter",
                "Themometer",
              ].map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField select label="Select" fullWidth>
              {["Daily", "Alternate Day", "Weekly", "Monthly"].map(
                (option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField type="text" />
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ marginTop: "1em" }}
        >
          <Typography sx={{ width: "35%" }}>Hearth Rate</Typography>
          <Stack flexDirection="row" sx={{ width: "65%" }} gap="2em">
            <TextField select label="Select" fullWidth>
              {[
                "Glucometer 250",
                "Blood Pressure cuff",
                "Weighing machine",
                "Pluse Oxymeter",
                "Themometer",
              ].map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select"
              fullWidth
              //   value={currency}
            >
              {["Daily", "Alternate Day", "Weekly", "Monthly"].map(
                (option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField type="text" />
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ marginTop: "1em" }}
        >
          <Typography sx={{ width: "35%" }}>Hearth Rate</Typography>
          <Stack flexDirection="row" sx={{ width: "65%" }} gap="2em">
            <TextField select label="Select" fullWidth>
              {[
                "Glucometer 250",
                "Blood Pressure cuff",
                "Weighing machine",
                "Pluse Oxymeter",
                "Themometer",
              ].map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField select label="Select" fullWidth>
              {["Daily", "Alternate Day", "Weekly", "Monthly"].map(
                (option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField type="text" />
          </Stack>
        </Stack>
        <Stack
          justifyContent="flex-end"
          flexDirection="row"
          sx={{ marginTop: "2em" }}
          gap="1em"
        >
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained">Save</Button>
        </Stack>
      </Box>
    </Dialog>
  );
}

const ProgramModal = () => {
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

export default ProgramModal;
