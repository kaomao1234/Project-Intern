import { Card } from "@mui/material";
import { styled } from "@mui/system";
const ImageCardStyle = styled(Card)({
  maxWidth: "70%",
  margin: "auto",
});
const ImageCard = (props) => {
  return <ImageCardStyle sx={props.sx}>{props.children}</ImageCardStyle>;
};
export default ImageCard;