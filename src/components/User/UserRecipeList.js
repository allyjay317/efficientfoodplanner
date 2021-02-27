import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

const UserRecipeList = ({ recipeList, title }) => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Typography variant="h4">{title}</Typography>
      </Grid>

      {recipeList.map((r) => (
        <Grid item>
          <Card xs={1} style={{ width: "200px" }}>
            <CardActionArea>
              <CardMedia
                image={r.image}
                title={r.name}
                style={{ height: "200px" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography variant="h5">{r.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserRecipeList;
