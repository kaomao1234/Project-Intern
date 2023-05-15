import { Button, Box, Typography, Grid, IconButton } from "@mui/material";
import {
  SearchOutlined,
  QrCodeScannerOutlined,
  SettingsOutlined,
  LocalShippingOutlined,
  FastfoodOutlined,
  CakeOutlined,
  CoffeeOutlined,
  BakeryDiningOutlined,
  Pets,
} from "@mui/icons-material";
import {
  CuisineButton,
  LeadingImageButton,
  TextFieldIcon,
  MenuCard,
  MenulistGrid,
  OrderlistGrid,
  QuantityField,
} from "../components";
import { use100vh } from "react-div-100vh";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  remove,
  totalize,
  addTocart,
  removeFromcart,
} from "@/store/feature/homecontroller";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(totalize());
  const height = use100vh();
  const menuCart = useSelector((state) => state.homecontroller.menuCart);
  const total = useSelector((state) => state.homecontroller.totalPrice);
  const menu = useSelector((state) => state.homecontroller.menu);
  return (
    <Box
      sx={{
        height: `${height}px`,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          height: `${height}px`,
          width: "80px",
          backgroundColor: "white",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Pets
          sx={{
            color: "#F95F66",
            alignSelf: "center",
            height: "50px",
            width: "50px",
            marginTop: "20px",
          }}
        ></Pets>
        <CuisineButton icon={FastfoodOutlined} text="Food" />

        <CuisineButton icon={CoffeeOutlined} text="Drinks" />
        <CuisineButton icon={BakeryDiningOutlined} text="Snack" />
        <CuisineButton icon={CakeOutlined} text="Dessert" />
        <CuisineButton icon={LocalShippingOutlined} text="Package" />
      </Box>
      <Box
        sx={{
          paddingBottom: "20px",
          width: "100%",
          marginX: {
            xs: "0px",
            sm: "30px",
            md: "30px",
            lg: "30px",
          },
        }}
      >
        <Box
          sx={{
            marginTop: "10px",

            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px 20px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={6} lg={3}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "black",
                  }}
                >
                  Foods
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{
                    color: "grayText",
                  }}
                >
                  Crafting Memorable Dining Experiences
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextFieldIcon
                leftIcon={SearchOutlined}
                rightIcon={QrCodeScannerOutlined}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                variant="text"
                sx={{
                  color: "GrayText",
                  height: "40px",
                  ":hover": {
                    color: "#F95F66",
                    backgroundColor: "white",
                  },
                }}
              >
                <SettingsOutlined
                  sx={{
                    height: "30px",
                    width: "30px",
                  }}
                />
              </IconButton>
              <LeadingImageButton
                image="https://cdn.pixabay.com/photo/2016/12/09/09/52/girl-1894125_960_720.jpg"
                text="Username"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginX: "12px", marginTop: "20px" }}>
          <Grid container spacing={2} sx={{}}>
            <MenulistGrid>
              {menu.map((item, index) => (
                <MenuCard
                  model={item}
                  key={index}
                  onClick={() => console.log("Hello")}
                />
              ))}
            </MenulistGrid>
            <OrderlistGrid totalValue={parseFloat(total).toFixed(2)}>
              {menuCart.map((item, index) => (
                <QuantityField key={index} model={item} />
              ))}
            </OrderlistGrid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
