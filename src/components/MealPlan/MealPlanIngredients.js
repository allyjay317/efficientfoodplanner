import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const MealPlanIngredients = (props) => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const dict = {};
    props.ingredients.forEach((meal) => {
      meal.forEach((i) => {
        debugger;
        const exists = dict[i.name];
        if (exists) {
          dict[i.name] = { ...dict[i.name], qty: exists.qty + i.qty };
        } else {
          dict[i.name] = i;
        }
      });
    });
    setIngredients(Object.values(dict));
  }, [props.ingredients]);

  return (
    <Grid item xs={12}>
      <Typography>Total Ingredients Needed: {ingredients.length}</Typography>
      <ul>
        {ingredients.map((i) => {
          const plural = i.qty > 1;
          return (
            <li>
              {i.qty} {plural ? i.pluralUnit : i.unit}{" "}
              {plural ? i.pluralName : i.name}
            </li>
          );
        })}
      </ul>
    </Grid>
  );
};

export default MealPlanIngredients;
