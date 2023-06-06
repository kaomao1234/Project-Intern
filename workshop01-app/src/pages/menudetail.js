import React, { useEffect, useRef, useState } from "react";
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
import { Add, Login, Remove } from "@mui/icons-material";
import { useRouter, withRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { MenuDetailViewModel } from "../viewmodel";
import { setState } from "../store/feature/menudetail";
const MenuDetailPage = () => {
  //   const [stateValue, setStateValue] = useState(null);
  const dispatch = useDispatch();
  const viewmodelRef = useRef(new MenuDetailViewModel());
  const viewmodel = viewmodelRef.current;
  const router = useRouter();

  useEffect(() => {
      if (Object.keys(router.query).length > 0) {
      dispatch(
        setState({
          menu: JSON.parse(router.query.menu),
          selectedTable: router.query.selectedTable,
        })
      );
    }
  }, [dispatch, router.query]);
  const menu = useSelector((state) => state.menudetail.menu);
  const quantity = useSelector((state) => state.menudetail.quantity);
  const selectedTable = useSelector((state) => state.menudetail.selectedTable);
  const available = useSelector((state)=>state.menudetail.available);
  const handleAddToCart = () => {
    // Add logic to handle adding to cart with the selected quantity
    viewmodel.createOrderItem(menu.id, quantity, selectedTable);
    router.push(`/home?selectedTable=${selectedTable}`);
  };
  const handleQuantityChange = (value) => {
    dispatch(
      setState({
        quantity: value,
      })
    );
  };
  if (!available) {
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          {menu.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={menu.imageSrc}
            alt={menu.name}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Card>
          <CardContent>
            <Typography variant="body1">
              {menu.description}
            </Typography>
            <Typography variant="h6">
              Price: {menu.price}
            </Typography>
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
                          onClick={() =>
                            handleQuantityChange(quantity - 1)
                          }
                        >
                          <Remove />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            handleQuantityChange(quantity + 1)
                          }
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
