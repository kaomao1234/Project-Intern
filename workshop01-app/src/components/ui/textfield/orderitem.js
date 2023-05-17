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
          Pasta
        </Typography>
        <Typography
          sx={{
            color: "Graytext",
            fontSize: "13",
          }}
        >
          {10}THB
        </Typography>
      </Box>
      <TextField
        id="input-with-sx"
        variant="outlined"
        value={10}
        sx={{
          "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
          },
          // borderColor: "#F95F66 !important",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Remove />
              </IconButton>
              <IconButton>
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
        {parseFloat(0).toFixed(2)}THB
      </Typography>
    </Box>
  );
};

export default orderitem;
