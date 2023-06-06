import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const AddMenuModal = ({ isOpen, onClose, onAddMenu }) => {
  const [newMenu, setNewMenu] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMenu((prevMenu) => ({
      ...prevMenu,
      [name]: value,
    }));
  };

  const handleAddMenu = () => {
    onAddMenu(newMenu);
    onClose();
  };

  return (
    <Modal
      disableAutoFocus
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={isOpen}
      onClose={onClose}
    >
      <Box
        sx={{
          borderRadius: "5px",
          width: "60%",
          height: "60%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          color: "black",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "scroll",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          Add Menu
        </Typography>
        <TextField
          name="name"
          label="Name"
          value={newMenu.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="price"
          label="Price"
          value={newMenu.price}
          onChange={handleInputChange}
          fullWidth
          type="number"
          margin="normal"
        />
        <TextField
          variant="filled"
          multiline
          name="description"
          label="Description"
          value={newMenu.description}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="image"
          label="Image Link"
          value={newMenu.image}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddMenu}
          disabled={
            !newMenu.name || !newMenu.price || !newMenu.detail || !newMenu.image
          }
        >
          Add
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default AddMenuModal;
