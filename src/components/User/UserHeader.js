import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

const UserHeader = ({ name }) => {
  return (
    <>
      <Grid item xs="12">
        <Typography variant="h1">Welcome {name}</Typography>
      </Grid>
      <Grid item xs="12">
        <Button>Create New Recipe</Button>
        <Button>Create New Meal Plan</Button>
        <Button>Confirm Prices in your area</Button>
      </Grid>
    </>
  );
};

export default UserHeader;
