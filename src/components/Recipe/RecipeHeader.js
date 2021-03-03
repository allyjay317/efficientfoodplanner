import {
  Card,
  CardActionArea,
  CardMedia,
  TextField,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../../redux/Actions/recipeActions";

const RecipeHeader = ({ changeName, status }) => {
  const name = useSelector((state) => state.recipe.name);
  const dispatch = useDispatch();
  const [editName, setEditName] = useState(false);
  const [editingName, setEditingName] = useState(name);

  const onNameChange = (e) => {
    setEditingName(e.target.value);
  };

  useEffect(() => {
    setEditingName(name);
  }, [name]);

  const onNameKeyDown = (e) => {
    if (e.keyCode === 13 && editingName !== "") {
      setEditName(false);
      dispatch(updateName(editingName));
    }
  };

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            image="https://www.kitchentreaty.com/wp-content/uploads/2012/08/best-mac-and-cheese-recipe-20.jpg"
            style={{ height: "40vh" }}
          />
        </CardActionArea>
      </Card>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          top: "20vh",
          left: "50%",
          marginLeft: "-25%",
          textAlign: "center",
          width: "50%",
        }}
      >
        {editName ? (
          <TextField
            value={editingName}
            onChange={onNameChange}
            onKeyDown={onNameKeyDown}
            inputProps={{
              style: { fontSize: "5.75rem", textAlign: "center" },
            }}
            size="medium"
          ></TextField>
        ) : (
          <Typography variant="h1">{name}</Typography>
        )}

        {status === "create" && (
          <div>
            <EditIcon onClick={() => setEditName(true)}></EditIcon>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeHeader;
