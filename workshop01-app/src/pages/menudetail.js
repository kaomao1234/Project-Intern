import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useRouter, withRouter } from "next/router";
import { useSelector } from "react-redux";
import { MenuDetailViewModel } from "@/viewmodel";
const viewmodel = new MenuDetailViewModel();
const MenuDetailPage = () => {
  const model = useSelector((state) => state.session.value.model);
  const tableNumber = useSelector((state) => state.session.value.table);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const router = useRouter();
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // Add logic to handle adding to cart with the selected quantity
    viewmodel.createOrderItem(model.id, quantity, tableNumber);
    router.push("/home");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          {model.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={model.imageSrc}
            alt={model.name}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Card>
          <CardContent>
            <Typography variant="body1">{model.description}</Typography>
            <Typography variant="h6">Price: {model.price}</Typography>
            <Typography variant="subtitle1">Ingredients:</Typography>
            <Grid container spacing={2} alignItems="center" sx={{ m: "10px" }}>
              <Grid item>
                <Typography variant="subtitle1">Quantity:</Typography>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  value={quantity}
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#F95F66",
                      },
                    width: "150px",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => handleQuantityChange(quantity - 1)}
                        >
                          <Remove />
                        </IconButton>
                        <IconButton
                          onClick={() => handleQuantityChange(quantity + 1)}
                        >
                          <Add />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withRouter(MenuDetailPage);
