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
import MealPlanIngredients from "./MealPlanIngredients";

const defaultMealPlan = [
  {
    name: "Orange Chicken",
    ingredients: [
      {
        id: 1,
        name: "orange",
        qty: 1,
        unit: "Large",
        pluralUnit: "Large",
        pluralName: "Oranges",
      },
      {
        id: 2,
        name: "chicken",
        qty: 1,
        unit: "lb",
        pluralUnit: "lbs",
        pluralName: "chicken",
      },
      {
        id: 3,
        name: "soy sauce",
        qty: 1,
        unit: "tbsp",
        pluralUnit: "tbsps",
        pluralName: "soy sauce",
      },
    ],
  },
  {
    name: "Orange Chicken",
    ingredients: [
      {
        id: 1,
        name: "orange",
        qty: 1,
        unit: "Large",
        pluralUnit: "Large",
        pluralName: "Oranges",
      },
      {
        id: 2,
        name: "chicken",
        qty: 1,
        unit: "lb",
        pluralUnit: "lbs",
        pluralName: "chicken",
      },
      {
        id: 3,
        name: "soy sauce",
        qty: 1,
        unit: "tbsp",
        pluralUnit: "tbsps",
        pluralName: "soy sauce",
      },
    ],
  },
  {
    name: "Orange Chicken",
    ingredients: [
      {
        id: 1,
        name: "orange",
        qty: 1,
        unit: "Large",
        pluralUnit: "Large",
        pluralName: "Oranges",
      },
      {
        id: 2,
        name: "chicken",
        qty: 1,
        unit: "lb",
        pluralUnit: "lbs",
        pluralName: "chicken",
      },
      {
        id: 3,
        name: "soy sauce",
        qty: 1,
        unit: "tbsp",
        pluralUnit: "tbsps",
        pluralName: "soy sauce",
      },
    ],
  },
  {
    name: "Orange Chicken",
    ingredients: [
      {
        id: 1,
        name: "orange",
        qty: 1,
        unit: "Large",
        pluralUnit: "Large",
        pluralName: "Oranges",
      },
      {
        id: 2,
        name: "chicken",
        qty: 1,
        unit: "lb",
        pluralUnit: "lbs",
        pluralName: "chicken",
      },
      {
        id: 3,
        name: "soy sauce",
        qty: 1,
        unit: "tbsp",
        pluralUnit: "tbsps",
        pluralName: "soy sauce",
      },
    ],
  },
  {
    name: "Orange Chicken",
    ingredients: [
      {
        id: 1,
        name: "orange",
        qty: 1,
        unit: "Large",
        pluralUnit: "Large",
        pluralName: "Oranges",
      },
      {
        id: 2,
        name: "chicken",
        qty: 1,
        unit: "lb",
        pluralUnit: "lbs",
        pluralName: "chicken",
      },
      {
        id: 3,
        name: "soy sauce",
        qty: 1,
        unit: "tbsp",
        pluralUnit: "tbsps",
        pluralName: "soy sauce",
      },
    ],
  },
  {
    name: "Orange Chicken",
    ingredients: [
      {
        id: 1,
        name: "orange",
        qty: 1,
        unit: "Large",
        pluralUnit: "Large",
        pluralName: "Oranges",
      },
      {
        id: 2,
        name: "chicken",
        qty: 1,
        unit: "lb",
        pluralUnit: "lbs",
        pluralName: "chicken",
      },
      {
        id: 3,
        name: "soy sauce",
        qty: 1,
        unit: "tbsp",
        pluralUnit: "tbsps",
        pluralName: "soy sauce",
      },
    ],
  },
  {
    name: "Orange Chicken",
    ingredients: [
      {
        id: 1,
        name: "orange",
        qty: 1,
        unit: "Large",
        pluralUnit: "Large",
        pluralName: "Oranges",
      },
      {
        id: 2,
        name: "chicken",
        qty: 1,
        unit: "lb",
        pluralUnit: "lbs",
        pluralName: "chicken",
      },
      {
        id: 3,
        name: "soy sauce",
        qty: 1,
        unit: "tbsp",
        pluralUnit: "tbsps",
        pluralName: "soy sauce",
      },
    ],
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
      <MealPlanIngredients
        ingredients={defaultMealPlan.map((meal) => meal.ingredients)}
      />
    </Grid>
  );
};

export default MealPlanPage;
