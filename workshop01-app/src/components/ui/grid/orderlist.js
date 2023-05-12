import { Grid, Box, Typography, Button } from "@mui/material";
import { Save, Money } from "@mui/icons-material";
const orderlist = (props) => {
  const date = Date.now();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = Intl.DateTimeFormat("en-US", options).format(date);
  return (
    <Grid item xs={12} sm={12} md={12} lg={5}>
      <Box
        sx={{
          backgroundColor: "#F95F66",
          height: "auto",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Typography variant={"h6"} fontWeight="bold">
          New order
        </Typography>
        <Typography>{formattedDate}</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "10px",
          overflowY: "scroll",
          height: {
            lg: "calc(100vh * 0.57)",
            xl: "calc(100vh * 0.57)",
          },
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
        {props.children}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingX: "30px",
          paddingY: "20px",
          height: "auto",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "GrayText",
            }}
          >
            Total
          </Typography>
          <Typography
            fontWeight="bold"
            variant="h4"
            sx={{
              color: "#F95F66",
            }}
          >
            {props.totalValue}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={props.onSaveClick}
            startIcon={<Save />}
            variant="outlined"
            sx={{
              height: "50px",
              width: "25%",
              textTransform: "capitalize",
              borderColor: "#F95F66",
              color: "#F95F66",
              ":hover": {
                backgroundColor: "#F95F66",
                color: "white",
                borderColor: "#F95F66",
              },
            }}
          >
            Save
          </Button>
          <Button
            onClick={props.onPayClick}
            startIcon={<Money />}
            variant="outlined"
            sx={{
              width: "60%",
              height: "50px",
              textTransform: "capitalize",
              borderColor: "#24B055",
              color: "#24B055",
              ":hover": {
                backgroundColor: "#24B055",
                color: "white",
                borderColor: "#24B055",
              },
            }}
          >
            Pay now
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};
export default orderlist;
