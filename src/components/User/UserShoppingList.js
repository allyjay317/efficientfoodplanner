import { Grid, Typography } from "@material-ui/core";
import React from "react";

const UserShoppingList = ({ shoppingList }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4">Your Shopping List</Typography>
      <ul>
        {shoppingList.map((r) => (
          <li>
            {r.quantity} {r.name} - ${r.price.toFixed(2)}
          </li>
        ))}
      </ul>
      Total: ${shoppingList.reduce((res, i) => res + i.price, 0).toFixed(2)}
    </Grid>
  );
};

export default UserShoppingList;
