import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { ManageOrderViewModel } from "../viewmodel";

const OrderStatus = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  COOKING: "Cooking",
  READY: "Ready",
  OUT_FOR_DELIVERY: "Out for Delivery",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
  DELAYED: "Delayed",
  ON_HOLD: "On Hold",
  COMPLETED: "Completed",
};

let viewmodel = new ManageOrderViewModel();

const ManageOrder = () => {
  viewmodel.readOrderItems();
  viewmodel.readMenu();
  const [orders, setOrders] = useState([]);
  viewmodel.observers = [
    () => {
      let data = viewmodel.getOrderItems();
      if (JSON.stringify(data) != JSON.stringify(orders)) {
        setOrders(data);
      }
    },
  ];
  const handleStatusChange = (tableNumber, newStatus) => {
    // console.log(tableNumber, newStatus);
    viewmodel.updateOrder(tableNumber, { status: newStatus });
    // setOrders((prevOrders) =>
    //   prevOrders.map((order) =>
    //     order.id === orderId ? { ...order, status: newStatus } : order
    //   )
    // );
  };

  const handleSubmitStatus = (orderId) => {
    // Implement your logic for handling the submit action here
    console.log("Submit status for order:", orderId);
  };

  return (
    <Box
      sx={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}
      component={"div"}
    >
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body2">No orders available.</Typography>
      ) : (
        <List>
          {orders.map((order, index) => (
            <ListItem
              key={index}
              sx={{
                marginBottom: 2,
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "12px",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItemText
                primary={`Table Number: ${order.tableNumber}`}
                secondary={
                  <Box
                    component={"span"}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      component={"span"}
                      variant="body2"
                      sx={{ color: "#555555", marginBottom: 1 }}
                    >
                      <strong>Order ID:</strong> {order.orderId}
                    </Typography>
                    <Typography
                      component={"span"}
                      variant="body2"
                      sx={{ color: "#555555", marginBottom: 1 }}
                    >
                      <strong>Order Status:</strong> {order.status}
                    </Typography>
                    <Typography
                      component={"span"}
                      variant="body2"
                      sx={{ color: "#555555", marginBottom: 1 }}
                    >
                      <strong>Order Date and Time:</strong> {order.date}
                    </Typography>
                    <Typography
                      component={"span"}
                      variant="body2"
                      sx={{ color: "#555555", marginBottom: 1 }}
                    >
                      <strong>Total Price:</strong> ${order.totalPrice}
                    </Typography>
                  </Box>
                }
              />
              <FormControl>
                <Select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order.tableNumber, e.target.value)
                  }
                  sx={{
                    marginLeft: "auto",
                    minWidth: "120px",
                    color: "#555555",
                  }}
                >
                  {Object.values(OrderStatus).map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSubmitStatus(order.orderId)}
                sx={{ marginLeft: "20px" }}
              >
                Submit
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ManageOrder;
