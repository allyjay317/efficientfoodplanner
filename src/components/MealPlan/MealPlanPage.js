import React from "react";

import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import MealPlanDay from "./MealPlanDay";
import MealPlanRecipe from "./MealPlanRecipe";
import MealPlanIngredients from "./MealPlanIngredients";
import { useSelector } from "react-redux";

const MealPlanPage = () => {
  const mealPlan = useSelector((state) => state.mealPlan);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day) => (
                <MealPlanDay day={day} />
              ))}
            </TableHead>
            <TableBody>
              <TableRow>
                {mealPlan.map((meal) => (
                  <MealPlanRecipe meal={meal} />
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <MealPlanIngredients
          ingredients={mealPlan.map((meal) => meal.ingredients)}
        />
      </Grid>
    </Grid>
  );
};

export default MealPlanPage;
