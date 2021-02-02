import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const RecipePage = ({ status }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    steps: [],
  });
  const [newIngredient, setNewIngredient] = useState({
    quantity: "",
    name: "",
  });
  const [newStep, setNewStep] = useState("");

  useEffect(() => {
    setRecipe({
      name: "Macaroni",
      ingredients: [
        { quantity: "1 package", name: "macaroni" },
        { quantity: "1/4 cup", name: "milk" },
        { quantity: "2tbsp", name: "butter" },
      ],
      steps: ["step1", "step2", "step3", "step4"],
    });
  }, []);

  const onIngredientChange = (e) => {
    setNewIngredient({
      ...newIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const onIngredientKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (newIngredient.name !== "" || newIngredient.quantity !== "") {
        setRecipe({
          ...recipe,
          ingredients: [...recipe.ingredients, { ...newIngredient }],
        });
        setNewIngredient({ quantity: "", name: "" });
      }
    }
  };

  const onStepChange = (e) => {
    setNewStep(e.target.value);
  };

  const onStepKeyDown = (e) => {
    if (e.keyCode === 13 && newStep !== "") {
      setRecipe({
        ...recipe,
        steps: [...recipe.steps, newStep],
      });
      setNewStep("");
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs="12">
          <Typography variant="h1">{recipe.name}</Typography>
        </Grid>
        <Grid item xs="3">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableCell>Quantity</TableCell>
                <TableCell>Ingredient</TableCell>
              </TableHead>
              <TableBody>
                {recipe.ingredients.map((i) => {
                  return (
                    <TableRow key={i.name}>
                      <TableCell>{i.quantity}</TableCell>
                      <TableCell align="left">{i.name}</TableCell>
                    </TableRow>
                  );
                })}
                {status == "create" && (
                  <TableRow>
                    <TableCell>
                      <TextField
                        name="quantity"
                        value={newIngredient.quantity}
                        onChange={onIngredientChange}
                        onKeyDown={onIngredientKeyDown}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="name"
                        value={newIngredient.name}
                        onChange={onIngredientChange}
                        onKeyDown={onIngredientKeyDown}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <ul></ul>
        </Grid>
        <Grid item xs="9">
          {recipe.steps.map((s, i) => {
            return (
              <Accordion>
                <AccordionSummary>Step {i + 1}</AccordionSummary>
                <AccordionDetails>
                  <Typography>{s}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
          {status === "create" && (
            <TextField
              name="step"
              onChange={onStepChange}
              onKeyDown={onStepKeyDown}
              value={newStep}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipePage;
