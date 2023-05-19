import { Button, Typography, CardMedia } from "@mui/material";

const LeadingImage = (props) => (
  <Button
    onClick={props.onClick}
    variant="contained"
    sx={{
      padding: "10px 10px",
      backgroundColor: "#F95F66",
      height:"50px",
      ":hover": {
        backgroundColor: "#F95F66",
      },
    }}
  >
    <CardMedia
      image={props.image}
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
      {props.text}
    </Typography>
  </Button>
);
export default LeadingImage;
