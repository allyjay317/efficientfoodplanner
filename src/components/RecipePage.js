import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
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

import EditIcon from "@material-ui/icons/Edit";

const RecipePage = ({ status, ...props }) => {
  const [recipe, setRecipe] = useState({
    name: "New Recipe",
    ingredients: [],
    steps: [],
  });
  const [newIngredient, setNewIngredient] = useState({
    quantity: "",
    name: "",
  });
  const [newStep, setNewStep] = useState("");
  const [editName, setEditName] = useState(false);
  const [editingName, setEditingName] = useState(recipe.name);

  useEffect(() => {
    if (props.recipe) {
      setRecipe(props.recipe);
    }

    setEditingName("Macaroni");
  }, [props]);

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

  const onNameChange = (e) => {
    setEditingName(e.target.value);
  };

  const onNameKeyDown = (e) => {
    if (e.keyCode === 13 && editingName !== "") {
      setEditName(false);
      setRecipe({
        ...recipe,
        name: editingName,
      });
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs="12">
          {editName ? (
            <TextField
              value={editingName}
              onChange={onNameChange}
              onKeyDown={onNameKeyDown}
            ></TextField>
          ) : (
            <Typography variant="h1">{recipe.name}</Typography>
          )}

          {status === "create" && (
            <EditIcon onClick={() => setEditName(true)}></EditIcon>
          )}
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
                {status === "create" && (
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
