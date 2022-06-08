import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddButton() {
  return (
    <Grid item xs={3}>
      <Button
        variant="outlined"
        sx={{ backgroundColor: "#cd452b", width: "100%", height: "16rem" }}
      >
        <AddIcon sx={{ color: "#ffffff", fontSize: "6rem" }}></AddIcon>
      </Button>
    </Grid>
  );
}

export default AddButton;
