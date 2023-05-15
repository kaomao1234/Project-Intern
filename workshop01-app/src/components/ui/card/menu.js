import { styled } from "@mui/system";
import {
  Grid,
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState, useEffect, useRef } from "react";

const MenuCardStyle = styled(Card)({
  borderRadius: "10px",
  height: "220px",
  // width:"180px"
});

const MenuCard = (props) => {
  const model = props.model;

  return (
    <Grid item xs={12} md={4} sm={6} lg={4}>
      <MenuCardStyle onClick={props.onClick}>
        <CardActionArea sx={{ height: "100%" }}>
          <Stack
            spacing={2}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: "inline-block",
                  color: "white",
                  backgroundColor: "#F95F66",
                  paddingX: "15px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                {model.price}THB
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  color: "black",
                  backgroundColor: "white",
                  paddingX: "30px",
                  borderRadius: "5px",
                }}
              >
                {model.menuName}
              </Typography>
            </Box>
          </Stack>

          <CardMedia
            image={model.imageSrc}
            sx={{
              height: "100%",
              width: "100%",
              zIndex: 0,
            }}
          />
        </CardActionArea>
      </MenuCardStyle>
    </Grid>
  );
};

export default MenuCard;
