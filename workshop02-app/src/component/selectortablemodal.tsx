import { Box, FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import { useTheme, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
interface Arg {
    isOpen: boolean;
    onClose: () => void;
}
function SelectorTableModal(arg: Arg) {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
    };
    return <Modal disableAutoFocus open={arg.isOpen} onClose={arg.onClose} sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Box sx={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: secondary,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typography variant="body1" color="primary">Table</Typography>
            <FormControl>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleChange}
                >
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </Modal>
}

export default SelectorTableModal;