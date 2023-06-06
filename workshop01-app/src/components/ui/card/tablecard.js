import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const TableCard = ({ tableNumber, orderID, time, onButtonPress }) => {
  return (
    <Card sx={{ marginBottom: "10px", width: "500px" }}>
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Table {tableNumber}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Order ID: {orderID}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Time: {time}
        </Typography>
        <Button variant="contained" color="primary" onClick={onButtonPress}>
          Press
        </Button>
      </CardContent>
    </Card>
  );
};

export default TableCard;
