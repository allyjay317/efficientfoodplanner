import { Grid, Typography } from "@material-ui/core";
import React from "react";

const UserMealPlan = ({ mealPlan }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4">Your Meal Plan</Typography>
      <ul>
        {mealPlan.map((r) => (
          <li>{r}</li>
        ))}
      </ul>
    </Grid>
  );
};

export default UserMealPlan;
