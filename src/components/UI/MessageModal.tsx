import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Stack } from "@mui/system";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  width: "150px",
  marginRight: "1em",
};

const message = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae animi aperiam consequatur quisquam necessitatibus architecto officia eos! Magni numquam, corporis minima voluptates quis magnam officiis illo libero nisi inventore labore?`;

const MessageModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Notes
          </Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            minRows={5}
            defaultValue={message}
            style={{
              width: "100%",
              height: "100px",
              marginTop: "2em",
              border: "2px solid black",
            }}
          />
          <Stack
            flexDirection="row"
            justifyContent="end"
            sx={{ marginTop: "1em" }}
          >
            <Button variant="outlined" sx={buttonStyle} onClick={handleClose}>
              Back
            </Button>
            <Button variant="contained" sx={buttonStyle}>
              Edit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default MessageModal;
