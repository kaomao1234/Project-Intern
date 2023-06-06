import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const OrderItemCard = ({ id, menuName, price, quantity, totalPrice }) => {
  return (
    <Card sx={{ marginBottom: "10px", width: "500px" }}>
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Order Item
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          ID: {id}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Menu Name: {menuName}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Price: {price}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Quantity: {quantity}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Total Price: {totalPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
