import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: { pop: { main: "#cd452b", contrastText: "#fff" } },
});
const style = { width: "100%", height: "16rem" };

const modalStyle = {
  border: "2px solid #000",
  bgcolor: "background.paper",
  width: 400,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 1,
  p: 4,
};

function AddButton() {
  const [button, buttonState] = useState(false);
  function buttonTrue() {
    buttonState(true);
  }
  function buttonFalse() {
    buttonState(false);
  }
  return (
    <>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Button
            color="pop"
            variant="outlined"
            sx={style}
            onClick={buttonTrue}
          >
            <AddIcon sx={{ fontSize: "6rem" }}></AddIcon>
          </Button>
        </ThemeProvider>
      </Grid>

      <Modal open={button} onClose={buttonFalse}>
        <Box sx={modalStyle}>Modal is working.</Box>
      </Modal>
    </>
  );
}

export default AddButton;
