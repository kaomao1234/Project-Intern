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

const SelectCardStyle = styled(Card)({
  borderRadius: "10px",
  height: "220px",
  // width:"180px"
});

const SelectCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const gridRef = useRef();
  const selectCardRef = useRef();

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  useEffect(() => {
    if (selectCardRef.current && gridRef.current) {
      selectCardRef.current.style.width = gridRef.current.style.width;
    }
  }, [gridRef, selectCardRef]);

  return (
    <Grid item xs={12} md={4} sm={6} lg={4} ref={gridRef} >
      <SelectCardStyle
        onClick={handleClick}
        style={{ border: isSelected ? "3px solid #F95F66" : "none" }}
      >
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
                30 Bath
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
                ต้มจืด
              </Typography>
            </Box>
          </Stack>
          {isSelected ? (
            <CheckBoxIcon
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "40px",
                height: "40px",
                color: "white",
                backgroundColor: "#F95F66",
                zIndex: 1,
                opacity: "0.9",
              }}
            ></CheckBoxIcon>
          ) : (
            <></>
          )}
          <CardMedia
            image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            sx={{
              height: "100%",
              width: "100%",
              zIndex: 0,
            }}
          />
        </CardActionArea>
      </SelectCardStyle>
    </Grid>
  );
};

export default SelectCard;
