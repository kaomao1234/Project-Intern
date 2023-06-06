import React, { useEffect, useState, memo } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";

const OrderItemsTableBody = ({ orderItems }) => {
    console.log("item:",orderItems);
  return (
    <TableBody>
      {!orderItems ? (
        <TableRow>
          <TableCell colSpan={6}>Loading...</TableCell>
        </TableRow>
      ) : (
        orderItems.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.menu}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.totalPrice}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          );
        })
      )}
    </TableBody>
  );
};

export default memo(OrderItemsTableBody);
