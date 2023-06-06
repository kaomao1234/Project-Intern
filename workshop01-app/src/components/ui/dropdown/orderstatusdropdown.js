import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { OrderStatus } from "../../../utils";

const OrderStatusDropdown = ({ status, handleStatusChange }) => {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
    handleStatusChange(event);
  };

  return (
    <FormControl sx={{ minWidth: "120px" }}>
      <Select value={selectedStatus} onChange={handleChange}>
        {Object.values(OrderStatus).map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OrderStatusDropdown;
