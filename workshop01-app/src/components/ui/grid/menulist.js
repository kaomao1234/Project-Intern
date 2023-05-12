import { Grid } from "@mui/material";
const menulist = (props) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={7}
      sx={{
        maxHeight: `calc(100vh * 0.83)`,
        overflowY: "auto",
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
      <Grid container spacing={4} sx={{}}>
        {props.children}
      </Grid>
    </Grid>
  );
};
export default menulist;
