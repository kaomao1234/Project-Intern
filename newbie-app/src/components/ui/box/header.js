import { styled } from "@mui/system";
import { Box } from "@mui/material";
const HeaderBoxStyle = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000",
  color: "#fff",
  height: "80px",
});

const HeaderBox = (props) => {
  return <HeaderBoxStyle>{props.children}</HeaderBoxStyle>;
};
export default HeaderBox;
