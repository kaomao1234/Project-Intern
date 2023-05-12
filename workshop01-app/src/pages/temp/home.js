import { Button, Box, Typography, Grid } from "@mui/material";
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
  AccountBalanceOutlined,
} from "@mui/icons-material";
import {
  CuisineButton,
  LeadingImageButton,
  TextFieldIcon,
  SelectCard,
} from "../components";
import { useEffect, useRef } from "react";
const Home = () => {
  const temp = [];
  for (let index = 0; index < 20; index++) {
    temp.push(<SelectCard></SelectCard>);
  }
  return (
    <div
      style={{
        height:"100%",
        overflow:"auto",
        display:"flex",
        flexDirection: "row",
        backgroundColor:"whitesmoke"
      }}
    >
      <Box
        sx={{
          // position: "fixed",
          // zIndex: "10",
          // top: "0",
          // left: "0",
          // bottom: "0",
          height:"auto",
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
          // paddingTop: { md: "130px" ,xs:"200px"},
          // paddingLeft: "80px",
          width: "100%",
         
        }}
      >
        <Box
          sx={{
            // position: "fixed",
            // top: "0",
            // right: "0",
            // zIndex: "10",
            // left: "80px",
            margin: "12px",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px 20px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={6} lg={3}>
              <Box>
                <Typography
                  variant="h4"
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
              lg={4}
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
              lg={4}
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: "GrayText",

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
              </Button>
              <LeadingImageButton
                image="https://cdn.pixabay.com/photo/2016/12/09/09/52/girl-1894125_960_720.jpg"
                text="Username"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginX: "12px" }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <Grid
                container
                spacing={4}
                sx={{
                  height: "80vh",
                  overflowY: "auto",
                  marginY: "5px",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                    backgroundColor: "#E4E5E9",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "8px",
                    backgroundColor: "#D5D6DA",
                  },
                }}
              >
                {temp}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}></Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
