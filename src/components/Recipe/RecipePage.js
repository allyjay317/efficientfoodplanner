import { Grid } from "@material-ui/core";
import React from "react";

import IngredientList from "./IngredientList";
import RecipeHeader from "./RecipeHeader";
import StepList from "./StepList";

const RecipePage = ({ status, ...props }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs="12">
          <RecipeHeader status={status} />
        </Grid>
        <Grid item xs="3">
          <IngredientList status={status} />
        </Grid>
        <Grid item xs="9">
          <StepList status={status} />
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipePage;
