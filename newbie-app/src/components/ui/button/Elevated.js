import Button from "@mui/material/Button";

import styled from "styled-components";
const StyledMuiButton = styled(Button)`
  && {
    background-color: red;
    color: white;
    &:hover {
      background-color: #1565c0;
    }
  }
`;
export const Elevated = (props) => {
  return <StyledMuiButton>{props.children}</StyledMuiButton>;
};
