import { TableCell, TableRow, Typography } from "@material-ui/core";
import React from "react";

const MealPlanRecipe = ({ meal }) => {
  return (
    <TableCell>
      <Typography>{meal.name}</Typography>
      <ul>
        {meal.ingredients.map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
    </TableCell>
  );
};

export default MealPlanRecipe;
