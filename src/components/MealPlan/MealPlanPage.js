import React from "react";

import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import MealPlanDay from "./MealPlanDay";
import MealPlanRecipe from "./MealPlanRecipe";

const defaultMealPlan = [
  {
    name: "Orange Chicken",
    ingredients: ["orange", "chicken", "soy sauce"],
  },
  {
    name: "Orange Chicken",
    ingredients: ["orange", "chicken", "soy sauce"],
  },
  {
    name: "Orange Chicken",
    ingredients: ["orange", "chicken", "soy sauce"],
  },
  {
    name: "Orange Chicken",
    ingredients: ["orange", "chicken", "soy sauce"],
  },
  {
    name: "Orange Chicken",
    ingredients: ["orange", "chicken", "soy sauce"],
  },
  {
    name: "Orange Chicken",
    ingredients: ["orange", "chicken", "soy sauce"],
  },
  {
    name: "Orange Chicken",
    ingredients: ["orange", "chicken", "soy sauce"],
  },
];

const MealPlanPage = () => {
  return (
    <Grid container>
      <TableContainer>
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
              {defaultMealPlan.map((meal) => (
                <MealPlanRecipe meal={meal} />
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default MealPlanPage;
