import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import unitConverter from "../../utils/unitConverter";

const MealPlanIngredients = (props) => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const dict = {};
    props.ingredients.forEach((meal) => {
      meal.forEach((i) => {
        const exists = dict[i.name];
        if (exists) {
          dict[i.name] = unitConverter(exists, i);
        } else {
          dict[i.name] = [i];
        }
      });
    });
    setIngredients(Object.values(dict));
  }, [props.ingredients]);

  return (
    <Grid item xs={12}>
      <Typography>Total Ingredients Needed: {ingredients.length}</Typography>
      <ul>
        {ingredients.map((ingr) => {
          return (
            <li>
              {ingr.map((unit) => {
                const plural = unit.qty > 1;
                return `${unit.qty} ${plural ? unit.pluralUnit : unit.unit}, `;
              })}
              {ingr.length > 1 || ingr[0].qty > 1
                ? ingr[0].pluralName
                : ingr[0].name}
            </li>
          );
        })}
      </ul>
    </Grid>
  );
};

export default MealPlanIngredients;
