import { styled } from "@mui/system";
import { CardContent } from "@mui/material";
const ImageCardContentStyle = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  flexDirection: "column",
});

const ImageCardContent = (props) =>{
  return (
    <ImageCardContentStyle>{props.children}</ImageCardContentStyle>
  );
}
export default ImageCardContent;