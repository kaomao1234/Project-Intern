import {
  Box,
  Typography,
  FormControl,
  Table,
  TableHead,
  Button,
  TableRow,
  TableCell,
} from "@mui/material";
import { OrderStatus } from "../utils";
import { OrderDetailViewModel } from "../viewmodel";
import { OrderStatusDropdown, OrderItemsTableBody } from "../components";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
const OrderDetail = () => {
  const viewmodelRef = useRef(new OrderDetailViewModel);
  const viewmodel = viewmodelRef.current;
  const [stateObject, setStateObject] = useState(null);
  const router = useRouter();
  const handleStatusChange = async (event) => {
    viewmodel.updateStatus(router.query.selectedTable, { status: event.target.value });
    const response = await viewmodel.getOrderItemFromTable(router.query.selectedTable);
    setStateObject({ ...stateObject, orderItems: response });
  };

  const handleSubmitStatus = async () => {
    // Implement logic for handling the submit action here
    const responseStatus = await viewmodel.getOrderStatus(router.query.selectedTable);
    console.log("Submit status:", responseStatus);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const responseStatus = await viewmodel.getOrderStatus(
          router.query.selectedTable
        );
        const responseOrderItems = await viewmodel.getOrderItemFromTable(
          router.query.selectedTable
        );

        if (responseStatus != undefined && responseOrderItems != undefined) {
          setStateObject({
            status: responseStatus,
            orderItems: responseOrderItems,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [router.query.selectedTable, router.query, viewmodel]);

  if (!stateObject) {
    return (
      <Typography
        sx={{
          color: "black",
        }}
      >
        Loading...
      </Typography>
    );
  }
  return (
    <Box sx={{}}>
      <Box
        id="appbar"
        sx={{
          width: "100%",
          backgroundColor: "lightblue",
          height: "56px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          p: "8px",
          boxShadow: "5px 10px 15px gray;",
        }}
      >
        <Typography variant="h6">Order Detail</Typography>
      </Box>
      <Box
        id="body"
        sx={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Table sx={{ width: "700px", marginBottom: "10px" }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Menu Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <OrderItemsTableBody orderItems={stateObject.orderItems} />
        </Table>
        <OrderStatusDropdown
          status={stateObject.status}
          handleStatusChange={handleStatusChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitStatus}
          sx={{
            width: "150px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default OrderDetail;
