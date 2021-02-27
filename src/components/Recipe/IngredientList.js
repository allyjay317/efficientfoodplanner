import {
  Button,
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
  const [editIngredient, setEditIngredient] = useState(-1);
  const [editData, setEditData] = useState({ quantity: "", name: "" });

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

  const onEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const onEditKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (editData.name !== "" || editData.quantity !== "") {
        const edited = [...ingredients];
        edited[editIngredient] = editData;
        changeIngredients(edited);
        setEditIngredient(-1);
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
          {ingredients.map((i, index) => {
            return (
              <TableRow key={i.name}>
                {editIngredient === index ? (
                  <>
                    <TableCell>
                      <TextField
                        name="quantity"
                        onChange={onEditChange}
                        onKeyDown={onEditKeyDown}
                        value={editData.quantity}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="name"
                        onChange={onEditChange}
                        onKeyDown={onEditKeyDown}
                        value={editData.name}
                      />
                    </TableCell>
                    <Button
                      onClick={() => {
                        onEditKeyDown({ keyCode: 13 });
                      }}
                    >
                      Done
                    </Button>
                  </>
                ) : (
                  <>
                    <TableCell>{i.quantity}</TableCell>
                    <TableCell align="left">{i.name}</TableCell>
                    {status == "create" && (
                      <Button
                        onClick={() => {
                          setEditData(i);
                          setEditIngredient(index);
                        }}
                      >
                        Edit
                      </Button>
                    )}
                  </>
                )}
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
