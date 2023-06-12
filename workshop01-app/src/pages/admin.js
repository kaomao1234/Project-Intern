import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { AdminViewModel } from "../viewmodel";
import { AddMenuModal, TableCard } from "../components";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  const [tables, setTables] = useState(null);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  let viewmodel = useRef(new AdminViewModel());
  const handleAddMenuOpen = () => {
    setIsAddMenuOpen(true);
  };

  const handleAddMenuClose = () => {
    setIsAddMenuOpen(false);
  };

  const handleAddMenu = (newMenu) => {
    // Here, you can implement the logic to add the menu item using the newMenu object
    // For example: viewmodel.addMenu(newMenu);
    viewmodel.addMenu(newMenu);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await viewmodel.getAllTables(); // Replace with your asynchronous function
        setTables(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  console.log("Admin:copy!!!");

  if (!tables) {
    // Render a loading state or return null while waiting for data
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
        <Typography variant="h6" sx={{}}>
          Tables with Orders
        </Typography>
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
        {Object.entries(tables).map((item, index) => (
          <TableCard
            key={index}
            tableNumber={item[0]}
            orderID={item[1].id}
            time={item[1].date}
            onButtonPress={() => {
              router.push(`/orderdetail?selectedTable=${item[0]}`);
            }}
          />
        ))}

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddMenuOpen}
          sx={{
            width: "150px",
            marginTop: "10px",
          }}
        >
          Add Menu
        </Button>
      </Box>

      <AddMenuModal
        isOpen={isAddMenuOpen}
        onClose={handleAddMenuClose}
        onAddMenu={handleAddMenu}
      />
    </Box>
  );
};

export default Admin;
