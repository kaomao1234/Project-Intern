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
} from "@mui/icons-material";
const orderitem = (props) => {
  let model = props.model;
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
        onClick={props.onRemoveClick}
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
          {model.menuName}
        </Typography>
        <Typography
          sx={{
            color: "Graytext",
            fontSize: "13",
          }}
        >
          {model.price}THB
        </Typography>
      </Box>
      <TextField
        id="input-with-sx"
        variant="outlined"
        value={model.numberMenu}
        InputProps={{
          style: {
            ".Mui-focused":{
              borderColor:"red"
            },
            borderColor:"#F95F66 !important"
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={props.onDecreaseClick}>
                <Remove />
              </IconButton>
              <IconButton onClick={props.onIncreaseClick}>
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
        {parseFloat(model.price * model.numberMenu).toFixed(2)}THB
      </Typography>
    </Box>
  );
};

export default orderitem;
