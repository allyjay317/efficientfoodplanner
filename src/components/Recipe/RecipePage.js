import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import IngredientList from "./IngredientList";
import RecipeHeader from "./RecipeHeader";
import StepList from "./StepList";

const RecipePage = ({ status, ...props }) => {
  const [recipe, setRecipe] = useState({
    name: "New Recipe",
    ingredients: [],
    steps: [],
  });

  useEffect(() => {
    if (props.recipe) {
      setRecipe(props.recipe);
    }
  }, [props.recipe]);

  const changeIngredients = (ingredients) => {
    setRecipe({ ...recipe, ingredients });
  };

  const changeSteps = (steps) => {
    setRecipe({ ...recipe, steps });
  };

  const changeName = (name) => {
    setRecipe({ ...recipe, name });
  };

  return (
    <div>
      <Grid container>
        <Grid item xs="12">
          <RecipeHeader
            status={status}
            changeName={changeName}
            name={recipe.name}
          />
        </Grid>
        <Grid item xs="3">
          <IngredientList
            ingredients={recipe.ingredients}
            status={status}
            changeIngredients={changeIngredients}
          />
        </Grid>
        <Grid item xs="9">
          <StepList
            steps={recipe.steps}
            status={status}
            changeSteps={changeSteps}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipePage;
