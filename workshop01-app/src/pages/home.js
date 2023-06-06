import {
  Button,
  Box,
  Typography,
  Grid,
  IconButton,
  CardMedia,
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
  TextFieldIcon,
  MenuCard,
  MenuListGrid,
  OrderListGrid,
  OrderItemField,
  TableSelectorModal,
} from "../components";
import { use100vh } from "react-div-100vh";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useRouter, withRouter } from "next/router";
import { HomeViewModel } from "../viewmodel";
import { MenuItemModel, OrderItemModel } from "../model";
import { setState } from "../store/feature/home";
const Home = () => {
  const viewmodel = useRef(new HomeViewModel());
  const height = use100vh();
  const router = useRouter();
  const dispatch = useDispatch();

  console.log("Home:copy!!!");
  useEffect(() => {
    async function fetchData() {
      try {
        const menus = await viewmodel.current.readMenu();
        let orderItems = [];
        let calPrice = 0;
        if (router.query.selectedTable != undefined) {
          orderItems = await viewmodel.current.readOrderItem(
            router.query.selectedTable
          );
          const resultLst = Object.entries(orderItems);
          for (let index = 0; index < resultLst.length; index++) {
            const orderItem = resultLst[index];
            calPrice +=
              menus[orderItem[1].menuId].price * orderItem[1].quantity;
          }
        }
        dispatch(
          setState({
            menus: menus,
            totalPrice: calPrice,
            orderItems: orderItems,
            selectedTable: router.query.selectedTable || 0,
          })
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch, router.query.selectedTable, viewmodel]);

  const available = useSelector((state) => state.home.available);
  const menus = useSelector((state) => state.home.menus);
  const orderItems = useSelector((state) => state.home.orderItems);
  const totalPrice = useSelector((state) => state.home.totalPrice);
  const selectedTable = useSelector((state) => state.home.selectedTable);
  const calTotalPrice = async () => {
    const orderItems = await viewmodel.current.readOrderItem(selectedTable);
    let calPrice = 0;
    const resultLst = Object.entries(orderItems);
    for (let index = 0; index < resultLst.length; index++) {
      const orderItem = resultLst[index];
      calPrice += menus[orderItem[1].menuId].price * orderItem[1].quantity;
    }
    return calPrice;
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
    <Box
      sx={{
        height: `${height}px`,
        display: "flex",
        flexDirection: "row",
        overflow: "auto",
      }}
    >
      {router.query.selectedTable == undefined ? (
        <TableSelectorModal
          table={[1, 2, 3, 4, 5]}
          onSelect={async (table) => {
            const result = await viewmodel.current.readOrderItem(table);
            const calculatedTotalPrice = await calTotalPrice();
            dispatch(
              setState({
                selectedTable: table,
                orderItems: result,
                totalPrice: calculatedTotalPrice,
              })
            );
            viewmodel.current.createOrder(table);
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

        {/* <SideButton icon={CoffeeOutlined} text="Drinks" />
        <SideButton icon={LocalShippingOutlined} text="Package" /> */}
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
              <Button
                variant="contained"
                sx={{
                  padding: "10px 10px",
                  backgroundColor: "#F95F66",
                  height: "50px",
                  ":hover": {
                    backgroundColor: "#F95F66",
                  },
                }}
              >
                <CardMedia
                  image="https://cdn.pixabay.com/photo/2016/12/09/09/52/girl-1894125_960_720.jpg"
                  sx={{
                    margin: "0px 10px",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    marginX: "5px",
                  }}
                >
                  Username
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginX: "12px", marginTop: "20px" }}>
          <Grid container spacing={2} sx={{}}>
            <MenuListGrid>
              {Object.entries(menus).map((item, index) => {
                const menu = MenuItemModel.fromMap({
                  id: item[0],
                  name: item[1].name,
                  description: item[1].description,
                  price: item[1].price,
                  imageSrc: item[1].imageSrc,
                });
                return (
                  <MenuCard
                    key={index}
                    model={menu}
                    onClick={() => {
                      router.push(
                        `/menudetail?${new URLSearchParams({
                          selectedTable: selectedTable,
                          menu: JSON.stringify(menu.toMap()),
                        }).toString()}`
                      );
                    }}
                  />
                );
              })}
            </MenuListGrid>
            <OrderListGrid totalPrice={parseFloat(totalPrice).toFixed(2)}>
              {Object.entries(orderItems).map((item, index) => {
                const model = OrderItemModel.fromMap({
                  id: item[0],
                  orderId: item[1].orderId,
                  menuId: item[1].menuId,
                  quantity: item[1].quantity,
                });
                return (
                  <OrderItemField
                    onDeleteClick={() =>
                      viewmodel.current.deleteOrderItem(item[0])
                    }
                    onClick={async (model) => {
                      viewmodel.current.updateOrderItem(model);
                      const orderItems = await viewmodel.current.readOrderItem(
                        selectedTable
                      );
                      const calculatedTotalPrice = await calTotalPrice();
                      dispatch(
                        setState({
                          orderItems: orderItems,
                          totalPrice: calculatedTotalPrice,
                        })
                      );
                    }}
                    key={index}
                    model={model}
                    menu={menus[model.menuId]}
                  />
                );
              })}
            </OrderListGrid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(Home);
