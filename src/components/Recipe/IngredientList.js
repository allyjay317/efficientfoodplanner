import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const IngredientList = ({ ingredients, status, changeIngredients }) => {
  const [newIngredient, setNewIngredient] = useState({
    quantity: "",
    name: "",
  });

  const onIngredientChange = (e) => {
    setNewIngredient({
      ...newIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const onIngredientKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (newIngredient.name !== "" || newIngredient.quantity !== "") {
        changeIngredients([...ingredients, { ...newIngredient }]);
        setNewIngredient({ quantity: "", name: "" });
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell>Quantity</TableCell>
          <TableCell>Ingredient</TableCell>
        </TableHead>
        <TableBody>
          {ingredients.map((i) => {
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
  );
};

export default IngredientList;
