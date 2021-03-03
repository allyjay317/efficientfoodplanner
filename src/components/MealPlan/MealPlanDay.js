import { TableCell, Typography } from "@material-ui/core";
import React from "react";

const MealPlanDay = ({ day }) => {
  return (
    <TableCell>
      <Typography>{day}</Typography>
    </TableCell>
  );
};

export default MealPlanDay;
