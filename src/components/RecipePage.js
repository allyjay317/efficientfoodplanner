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
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const RecipePage = ({ status }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    steps: [],
  });

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
  });

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
                      <Input name="quantity" />
                    </TableCell>
                    <TableCell>
                      <Input name="name" />
                    </TableCell>
                  </TableRow>
                )}
                <TableRow>
                  <Button>Add</Button>
                </TableRow>
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

          <ol></ol>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipePage;
