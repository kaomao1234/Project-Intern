import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { SearchOutlined, QrCodeScannerOutlined } from "@mui/icons-material";

const TextfieldIcon = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <props.leftIcon
        sx={{ color: isFocused ? "#F95F66" : "action.active", mx: 1, my: 0.5 }}
      />
      <TextField
        id="input-with-sx"
        variant="standard"
        sx={{
          width: "100%",
          textAlign:"center",
          "& .MuiInput-root:after": {
            borderBottomColor: "#F95F66",
          },
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <props.rightIcon
        sx={{ color: isFocused ? "#F95F66" : "action.active", mx: 1, my: 0.5 }}
      />
    </Box>
  );
};

export default TextfieldIcon;
