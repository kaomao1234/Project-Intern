import { useTheme } from "@mui/material/styles";
import { Box, Grid, TextField, Typography, InputAdornment, IconButton, Button, CardMedia, Card, CardActionArea } from "@mui/material";
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { useEffect, useRef, useState } from "react";
import { FoodListViewModel } from "../viewmodel";

const FoodList = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const viewmodel: FoodListViewModel = useRef(new FoodListViewModel()).current;
    const [menus, setMenus] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const res = await viewmodel.readRandomfood('2', 'vegetarian,dessert');
            const data = res.recipes as Array<any>;
            let result = [];
            data.forEach((item, index) => {
                result.push({
                    id: item.id,
                    title: item.title,
                    image: item.image
                })
            })
        }
        fetchData();
    }, [viewmodel]);
    return (
        <div>
            <Box id="navbar"
                sx={{
                    position: "fixed",
                    zIndex: "100",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: secondary,
                    boxShadow: "5px 10px 15px #a28d8b",
                    top: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <Grid container>
                    <Grid item xs={6} sm={5} md={3} lg={3} xl={2}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "48",
                                background: `linear-gradient(120deg, #a28d8b, ${primary})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                width: "fit-content",
                            }}
                        >
                            Serve Me
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={7} md={5} lg={6} xl={8} sx={{ marginTop: "10px", display: "flex", flexDirection: "row", paddingX: "10px" }}>
                        <TextField
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton sx={{ color: primary }}>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            sx={{
                                width: "100%",
                                "& .MuiInputBase-root": {
                                    color: primary,
                                    borderColor: primary,
                                    "::before": {
                                        borderColor: primary,
                                    },
                                },
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={2} sx={{ display: "flex", justifyContent: "space-evenly" }}>
                        <IconButton sx={{ color: primary }}>
                            <ShoppingCartOutlined />
                        </IconButton>
                        <Button
                            variant="contained"
                            sx={{
                                padding: "10px 10px",
                                backgroundColor: secondary,
                                height: "fit-content",
                                ":hover": {
                                    backgroundColor: secondary,
                                },
                            }}
                        >
                            <CardMedia
                                image="https://cdn.pixabay.com/photo/2016/08/27/11/16/contractor-1623889_1280.jpg"
                                sx={{
                                    margin: "0px 10px",
                                    height: "30px",
                                    width: "30px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                            <Typography
                                sx={{
                                    textTransform: "capitalize",
                                    marginX: "5px",
                                }}
                            >
                                Username
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box id="body"
                sx={{
                    height: "calc(100vh - 56px)",
                    overflowY: "auto",
                    paddingTop: "56px",
                    backgroundColor: secondary,
                    [theme.breakpoints.down('md')]: {
                        height: "calc(100vh - 106px)",
                        paddingTop: "106px",
                    },
                }}
            >
                <Box id="menus">
                    <Card sx={{
                        backgroundColor: "red",
                        height: "220px",
                        width: "50%",
                        borderRadius: "8px",


                    }}>
                        <CardActionArea sx={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                        }}>

                            <CardMedia title="" image="https://spoonacular.com/recipeImages/1098347-556x370.jpg" sx={{
                                height: "100%",
                                width: "40%",
                            }}>

                            </CardMedia>
                            <Box sx={{
                                width: "60%"
                            }}>

                                <Typography variant="h4" color="primary">Menu name</Typography >
                                <Typography variant="body1" color="primary">heath score</Typography >
                                <Typography variant="body1" color="primary">type</Typography >
                            </Box>

                        </CardActionArea>
                    </Card>

                </Box>
            </Box>
        </div>
    );
};

export default FoodList;
