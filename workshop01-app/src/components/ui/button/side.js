import { Button, Box, Typography } from "@mui/material";
const side = (props) => (
  <Button
    onClick={props.onClick}
    sx={{
      flexDirection: "column",
      marginTop: "20px",
      marginX: "10px",
      backgroundColor: "white",
      color: "GrayText",
      ":hover": {
        color: "white",
        backgroundColor: "#F8685D",
      },
    }}
  >
    <props.icon sx={{ margin: "4px" }}></props.icon>
    <Typography sx={{ fontSize: 13, textTransform: "capitalize" }}>
      {props.text}
    </Typography>
  </Button>
);

export default side;
