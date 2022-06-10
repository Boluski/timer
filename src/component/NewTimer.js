import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";

const mainColor = { color: "#cd452b" };

const modalStyle = {
  border: "2px solid #cd452b",
  bgcolor: "background.paper",
  width: 800,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 1,
  p: 4,
};

function NewTimer(props) {
  return (
    <Modal open={props.buttonState} onClose={props.closeFunc}>
      <Box sx={modalStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={mainColor}>
              New timer
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ThemeProvider theme={props.themeStyle}>
              <TextField
                fullWidth
                color="pop"
                variant="outlined"
                label="Timer Name"
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={4}>
            <ThemeProvider theme={props.themeStyle}>
              <TextField
                fullWidth
                color="pop"
                type="number"
                variant="outlined"
                label="Hour"
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={4}>
            <ThemeProvider theme={props.themeStyle}>
              <TextField
                fullWidth
                color="pop"
                type="number"
                variant="outlined"
                label="Minute"
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={4}>
            <ThemeProvider theme={props.themeStyle}>
              <TextField
                fullWidth
                color="pop"
                type="number"
                variant="outlined"
                label="Second"
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={12}>
            <ThemeProvider theme={props.themeStyle}>
              <Button
                fullWidth
                color="pop"
                variant="contained"
                size="large"
                startIcon={<CheckIcon />}
              >
                Save
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default NewTimer;
