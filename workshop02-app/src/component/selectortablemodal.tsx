import { Box, FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import { useTheme, Typography, Button } from "@mui/material";
import { MouseEventHandler, ReactNode, useState } from "react";
interface Arg {
    isOpen: boolean;
    onClose?: MouseEventHandler<HTMLElement>;
    onSubmit?: (value: string) => void;
}
function SelectorTableModal(arg: Arg) {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const [selectedOption, setSelectedOption] = useState('');
    const allTable: number[] = [1, 2, 3, 4, 5];

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
            justifyContent: "center",
            "> *": {
                marginY: "5px"
            }
        }}>
            <Typography variant="body1" color="primary">Table</Typography>
            <FormControl>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleChange}
                    sx={{
                        width: "150px"
                    }}
                >
                    {allTable.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
            <Button variant="contained" color="secondary" onClick={() => {
                arg.onSubmit?.(selectedOption);
            }}>
                Submit
            </Button>
        </Box>
    </Modal>
}

export default SelectorTableModal;