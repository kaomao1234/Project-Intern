import {
  Modal,
  TextField,
  Box,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
const TableSelector = ({ table, onSelect }) => {
  const [selectTable, setSelectTable] = useState(table[0]);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  useEffect(() => setOpen(true), []);
  return (
    <Modal
      disableAutoFocus
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          borderRadius: "5px",
          width: "30%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          color: "black",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Select table
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let tableNumber = selectTable;
            onSelect(tableNumber);
            handleClose();
          }}
        >
          <TextField
            onChange={(e) => {
              setSelectTable(e.target.value);
            }}
            value={selectTable}
            variant="standard"
            select
            label="Select"
            helperText="Please select your table"
            sx={{
              width: "70%",
            }}
          >
            {table.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
          <Button sx={{ color: "black" }} type="submit">
            submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default TableSelector;
