import * as mui from "@mui/material";
import { useState, useEffect } from "react";

const Home = () => {
  var [increment, setIncrement] = useState(0);

  function incrementHandler() {
    increment++;
    setIncrement(increment);
  }
  useEffect(() => {
    console.log("mount");

    return () => {};
  }, []);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <mui.Box>
        <mui.AppBar
          sx={{
            backgroundColor: "#2196F3",
            height: "56px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <mui.Typography variant="h6">Appbar</mui.Typography>
        </mui.AppBar>
      </mui.Box>
      <mui.Box>
        <mui.Box
          sx={{
            fontSize: "16px",
            height: "100%",
            width: "100%",
            left: "0",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            position: "absolute",
          }}
          variant="h5"
        >
          <mui.Typography>{increment}</mui.Typography>
        </mui.Box>
        <mui.Fab
          sx={{
            bottom: 16,
            right: 16,
            backgroundColor: "#2196F3",
            ":hover": {
              backgroundColor: "#2196F3",
            },
            position: "absolute",
          }}
          onClick={incrementHandler}
        >
          <mui.Icon sx={{ color: "white" }}>add</mui.Icon>
        </mui.Fab>
      </mui.Box>
    </div>
  );
};

export default Home;
