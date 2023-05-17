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
  MenulistGrid,
  OrderlistGrid,
  OrderItemField,
  // OrderItemField
} from "../components";
import { use100vh } from "react-div-100vh";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrder,
  createOrderItem,
  deleteOrderItem,
  totalPrice,
  updateOrderItem,
  deleteTableNumber,
} from "../store/feature/homecontroller";
import { useState, useEffect } from "react";
import { Modal } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(totalPrice());
  const height = use100vh();
  const menu = useSelector((state) => state.homecontroller.menu);
  const table = useSelector((state) => state.homecontroller.table);
  const totalprice = useSelector((state) => state.homecontroller.totalPrice);
  const [selectTable, setSelectTable] = useState(table[0]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => handleOpen(), []);
  return (
    <Box
      sx={{
        height: `${height}px`,
        display: "flex",
        flexDirection: "row",
        overflow: "auto",
      }}
    >
      <Modal
        disableAutoFocus
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            borderRadius: "5px",
            width: "30%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            color: "black",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select table
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let tableNumber = e.target.value;
              dispatch((disp) => {
                disp(deleteTableNumber(table.indexOf(tableNumber)));
                disp(createOrder(tableNumber));
              });
              handleClose();
            }}
          >
            <TextField
              onChange={(e) => {
                setSelectTable(e.target.value);
              }}
              value={selectTable}
              variant="standard"
              select
              label="Select"
              helperText="Please select your table"
              sx={{
                width: "70%",
              }}
            >
              {table.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <Button sx={{ color: "black" }} type="submit">
              submit
            </Button>
          </form>
        </Box>
      </Modal>
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
                  onClick={() => dispatch(createOrderItem(item.id))}
                />
              ))}
            </MenulistGrid>
            <OrderlistGrid
              totalValue={parseFloat(totalprice).toFixed(2)}
            ></OrderlistGrid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
