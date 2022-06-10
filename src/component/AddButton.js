import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import NewTimer from "./NewTimer";

const theme = createTheme({
  palette: { pop: { main: "#cd452b", contrastText: "#fff" } },
});
const style = { width: "100%", height: "16rem" };

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
      <NewTimer
        buttonState={button}
        closeFunc={buttonFalse}
        themeStyle={theme}
      />
    </>
  );
}

export default AddButton;
