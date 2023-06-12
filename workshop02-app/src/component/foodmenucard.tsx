import { MouseEventHandler } from "react";
import { FoodMenuItem } from "../interface";
import { Box, CardActionArea, CardMedia, Typography, useTheme } from "@mui/material";
interface Arg {
    foodMenuItem: FoodMenuItem,
    onClick?: MouseEventHandler<HTMLElement>,
}
function FoodMenuCard(arg: Arg) {
    const theme = useTheme()
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    return <Box sx={{

        boxSizing: 'border-box',
        padding: "8px",
        [theme.breakpoints.down('md')]: {
            width: "50%",
            height: "220px"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "calc(100% / 3)",
            height: "250px"
        },
        [theme.breakpoints.up('lg')]: {
            width: "calc(100% / 4)",
            height: "300px"
        }
    }}>
        <CardActionArea onClick={arg.onClick} sx={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
        }}>
            <CardMedia image={arg.foodMenuItem.imageSrc} sx={{
                height: "100%", width: "100%",
                borderRadius: "10px",
            }}>
                <Box><Typography variant="body1" color="primary" sx={{
                    display: "inline-block",
                    backgroundColor: secondary,
                    paddingX: "15px",
                    borderRadius: "0px 5px 5px 0px",
                    textAlign: "center",
                }}>{arg.foodMenuItem.price}
                </Typography></Box>
                <Box>
                    <Typography variant="body1" color="secondary" sx={{
                        display: "inline-block",
                        textAlign: "center",
                        backgroundColor: primary,
                        paddingX: "30px",
                        borderRadius: "0px 5px 5px 0px",
                    }}>
                        {arg.foodMenuItem.name}
                    </Typography>
                </Box>
            </CardMedia>
        </CardActionArea>
    </Box>;
}
export default FoodMenuCard;