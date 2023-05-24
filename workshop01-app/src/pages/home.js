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
  const router = useRouter();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [menus, setMenus] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const tableNumber = useSelector((state) => state.session.value.table);
  tableNumber != undefined
    ? viewmodel.getOrderItemFromTableNumber(tableNumber)
    : null;
  viewmodel.observers = [
    () => {
      let getMenu = viewmodel.getMenus();
      if (JSON.stringify(menus) != JSON.stringify(getMenu)) {
        setMenus(getMenu);
        console.log("call menu");
      }
    },
    () => {
      let getOrderItems = viewmodel.getOrderItems();
      if (JSON.stringify(orderItems) != JSON.stringify(getOrderItems)) {
        setOrderItems(getOrderItems);
        console.log("call orderitems");
      }
    },
    () => {
      let getTotalPrice = viewmodel.getTotalPrice();
      if (totalPrice != getTotalPrice) {
        setTotalPrice(getTotalPrice);
        console.log("call total price");
      }
    },
  ];
  viewmodel.readMenu();
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
                      console.log(item);
                      dispatch(setSession({ model: item.toMap() }));
                      router.push("/menudetail");
                    }}
                  />
                ))
              )}
            </MenuListGrid>
            <OrderListGrid totalValue={parseFloat(totalPrice).toFixed(2)}>
              {orderItems.length != 0 && menus.length != 0
                ? orderItems.map((item, index) => (
                    <OrderItemField
                      onDeleteClick={() =>
                        viewmodel.deleteOrderItem(item.id, tableNumber)
                      }
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
