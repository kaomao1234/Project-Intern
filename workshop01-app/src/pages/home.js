import {
  Button,
  Box,
  Typography,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  SearchOutlined,
  QrCodeScannerOutlined,
  SettingsOutlined,
  LocalShippingOutlined,
  FastfoodOutlined,
  CoffeeOutlined,
  Pets,
} from "@mui/icons-material";
import {
  SideButton,
  LeadingImageButton,
  TextFieldIcon,
  MenuCard,
  MenuListGrid,
  OrderListGrid,
  OrderItemField,
  TableSelectorModal,
} from "../components";
import { setSession } from "../store/feature/session";
import { use100vh } from "react-div-100vh";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useRouter, withRouter } from "next/router";
import { HomeViewModel } from "../viewmodel";
const viewmodel = new HomeViewModel();
const Home = () => {
  const height = use100vh();
  const table = [1, 2, 3, 4, 5];
  const totalPrice = 0;
  const router = useRouter();
  const dispatch = useDispatch();
  const [menus, setMenus] = useState(viewmodel.getMenus());
  const [orderItems, setOrderItems] = useState(viewmodel.getOrderItems());
  const tableNumber = useSelector((state) => state.session.value.table);
  viewmodel.observers.push(
    ...[
      () => setMenus(viewmodel.getMenus()),
      () => setOrderItems(viewmodel.getOrderItems()),
    ]
  );
  viewmodel.readMenu();
  tableNumber != undefined
    ? viewmodel.getOrderItemFromTableNumber(tableNumber)
    : null;
  // console.log(viewmodel.getMenus());
  return (
    <Box
      sx={{
        height: `${height}px`,
        display: "flex",
        flexDirection: "row",
        overflow: "auto",
      }}
    >
      {tableNumber == undefined ? (
        <TableSelectorModal
          table={table}
          onSelect={(table) => {
            // if()
            viewmodel.getOrderItemFromTableNumber(table);
            dispatch(setSession({ table: table }));
            viewmodel.createOrder(table);
          }}
        />
      ) : null}
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
        <SideButton icon={FastfoodOutlined} text="Food" />

        <SideButton icon={CoffeeOutlined} text="Drinks" />
        <SideButton icon={LocalShippingOutlined} text="Package" />
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
                justifyContent: "space-between",
              }}
            >
              <IconButton
                onClick={() => console.log()}
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
            <MenuListGrid>
              {menus.length == 0 ? (
                <Typography sx={{ color: "black" }}>No menus data</Typography>
              ) : (
                menus.map((item, index) => (
                  <MenuCard
                    key={index}
                    model={item}
                    onClick={() => {
                      router.push("/menudetail");
                      dispatch(setSession({ model: item.ToMap() }));
                    }}
                  />
                ))
              )}
            </MenuListGrid>
            <OrderListGrid totalValue={parseFloat(totalPrice).toFixed(2)}>
              {menus.lenght != 0
                ? orderItems.map((item, index) => (
                    <OrderItemField
                      onClick={(model) => viewmodel.updateOrderItem(model)}
                      key={index}
                      model={item}
                      menu={viewmodel.menus[item.menuId]}
                    />
                  ))
                : null}
            </OrderListGrid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(Home);
