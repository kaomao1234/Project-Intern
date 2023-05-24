import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  DeleteOutlineOutlined,
  Add,
  Remove,
  ModeEditOutline,
  MenuBookSharp,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
const orderitem = (props) => {
  let model =
    props.model == undefined
      ? {
          name: "Untitle",
          price: "100",
          quantity: "10",
        }
      : props.model;
  let menu = props.menu;

  return (
    <Box
      sx={{
        marginY: "15px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IconButton
        sx={{
          color: "#F95F66",
          ":hover": {
            color: "#F95F66",
            backgroundColor: "transparent",
          },
        }}
      >
        <DeleteOutlineOutlined />
      </IconButton>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
        }}
      >
        <Typography
          sx={{
            color: "black",
          }}
        >
          {menu.name}
        </Typography>
        <Typography
          sx={{
            color: "Graytext",
            fontSize: "13",
          }}
        >
          {menu.price}THB
        </Typography>
      </Box>
      <TextField
        id="input-with-sx"
        variant="outlined"
        value={model.quantity}
        sx={{
          "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F95F66",
            },
          width: "40%",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  if (model.quantity > 1) {
                    model.quantity--;
                  }
                  props.onClick(model);
                }}
              >
                <Remove />
              </IconButton>
              <IconButton
                onClick={() => {
                  if (model.quantity < 20) {
                    model.quantity++;
                  }
                  props.onClick(model);
                }}
              >
                <Add />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography
        variant="h7"
        fontWeight="bold"
        sx={{
          color: "#F95F66",
          width: "100px",
        }}
      >
        {parseFloat(model.quantity * menu.price).toFixed(2)}THB
      </Typography>
    </Box>
  );
};

export default orderitem;
