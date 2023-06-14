import { Menu, SearchOutlined } from '@mui/icons-material';
import { Typography, Box, Drawer, Button, AppBar, IconButton, TextField, Grid, InputAdornment } from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles'
import { ReactNode, useRef, useState } from 'react';
import { ValueListenableBuilder, useValueNotifier } from '../hooks';
import { HomeViewModel } from '../viewmodel';
import { FoodMenuItem, OrderItem } from '../interface';
import { generateUid } from '../utils';
import { FoodMenuCard, SelectorTableModal } from '@/component';
import { useRouter } from 'next/router';
export default function Home() {
    const router = useRouter();
    const query = router.query;
    const selectedTableRef = useRef<string | null>(null);
    const theme: Theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const viewmodel = useRef(new HomeViewModel).current;
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSelectorTableModal, setOpenSelectorTableModal] = useState(true);
    const foodMenus = useRef<{ [key: string]: FoodMenuItem }>();
    const foodMenusNotifier = useValueNotifier(null);
    const orderMenus = useRef<{ [key: string]: OrderItem }>();
    const orderItemsNotifier = useValueNotifier(null);
    const selectorTableModalNotifier = useValueNotifier({
        isOpen: true,
        onSubmit: (selectorTable: string) => {
            selectedTableRef.current = selectorTable;
            fetchOrderItems();
            selectorTableModalNotifier.set({ ...selectorTableModalNotifier.get(), isOpen: false })
        }
    });
    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    };
    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    }
    const fetchMenu = async () => {
        foodMenus.current = await viewmodel.readMenu();
        foodMenusNotifier.set(foodMenus.current);
    }
    const fetchOrderItems = async () => {
        orderMenus.current = await viewmodel.readOrderItem(selectedTableRef.current as string);
        orderItemsNotifier.set(orderMenus.current);
    }
    const handleSearhChange = (e: any) => {
        const searchChange: string = e.target.value;
        let foodMenusList: Array<any> = Object.entries(foodMenusNotifier.get());
        const foodMenusFiltered = foodMenusList.filter((item) => item[1].name.toLowerCase().startsWith(searchChange.toLowerCase()));
        if (searchChange.length > 0) {
            foodMenusNotifier.set(Object.fromEntries(foodMenusFiltered));

        } else {
            foodMenusNotifier.set(foodMenus.current);
        }
    }
    const selectorTableModalBuilder = (value: { isOpen: boolean, onSumbit: (selectedTable: string) => void }): ReactNode => {
        return <SelectorTableModal isOpen={value.isOpen} onSubmit={value.onSumbit} />
    }
    const menuBuilder = (value: { [key: string]: FoodMenuItem }): ReactNode => {
        if (value != null) {
            const children = Object.entries(value).map((item, index) => {
                return <FoodMenuCard foodMenuItem={item[1]} key={generateUid()} />
            });
            return children;
        }
        else {
            fetchMenu();
            // return <Typography variant="h4" color="primary"> Menu Loading..</Typography>
        }
    }

    const orderItemBuilder = (value: { [key: string]: OrderItem }): ReactNode => {
        if (value != null) {
        }
        else {
            return <Typography variant="h4" color="primary" sx={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "100%", height: "100%"
            }}> order Loading..</Typography>
        }
    }
    return (<div>
        <ValueListenableBuilder valueListenable={selectorTableModalNotifier} builder={selectorTableModalBuilder} />

        <Box sx={{
            height: {
                lg: "100vh"
            },
            [theme.breakpoints.down("lg")]: {
                height: "100%"
            },
            display: "flex",
            flexDirection: "column"
        }}>
            <Drawer anchor='left' open={openDrawer} onClose={handleCloseDrawer}>
                <Typography variant="body2" color="primary">hello sidebar</Typography>
            </Drawer>
            <AppBar sx={{
                height: "56px",
                paddingX: "8px",
                [theme.breakpoints.between("sm", 'md')]: {
                    height: "106px"
                },
                [theme.breakpoints.only("xs")]: {
                    height: "130px"
                }

            }}>
                <Grid container spacing={0}>
                    <Grid item xs={8} sm={7} md={5} lg={4} xl={3} sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <IconButton onClick={handleOpenDrawer} >
                            <Menu color='secondary' />
                        </IconButton>
                        <Box>
                            <Typography
                                variant="h5"
                            >
                                Foods
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                Crafting Memorable Dining Experiences
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}
                        sm={5}
                        md={5}
                        lg={6} xl={7}>
                        <TextField
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <SearchOutlined sx={{
                                        color: secondary
                                    }}></SearchOutlined>
                                </InputAdornment>,
                            }}
                            sx={{
                                width: "100%",
                                'input': {
                                    color: secondary
                                },
                                'label': {
                                    color: secondary
                                },
                                "div:hover": {
                                    ":before": {
                                        borderBottomColor: `${secondary}!important`,
                                    },
                                },
                                "div:before": {
                                    borderBottomColor: secondary,
                                },
                            }}
                            variant='standard'
                            color='secondary'
                            id="search"
                            label="search"
                            onChange={handleSearhChange}
                        />
                    </Grid>
                    <Grid item xs={4}
                        sm={5}
                        md={2}
                        lg={2} xl={2} sx={{
                            display: "flex",
                            justifyContent: "right",
                            alignItems: "center"
                        }}>
                        <Button variant="contained" color="secondary" sx={{
                            width: "150px"
                        }} >
                            UserName
                        </Button>
                    </Grid>
                </Grid>
            </AppBar>
            <Box sx={{
                height: "calc(100vh - 56px)",
                marginTop: "56px",
                display: "flex",
                flexDirection: "row",
                [theme.breakpoints.between("sm", 'md')]: {
                    height: "calc(100% - 106px)",
                    marginTop: "106px",
                    flexDirection: "column",
                },
                [theme.breakpoints.only("xs")]: {
                    height: "calc(100% - 130px)",
                    marginTop: "130px",
                    flexDirection: "column",
                }
            }}>
                <Box sx={{
                    height: "100%",
                    width: "70%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: 'wrap',
                    overflowY: "auto",
                    [theme.breakpoints.between("sm", 'md')]: {
                        height: "calc(100vh - 106px)",
                        width: "100%",
                    },
                    [theme.breakpoints.only("xs")]: {
                        height: "calc(100vh - 130px)",
                        width: "100%",
                    }
                }}>
                    <ValueListenableBuilder valueListenable={foodMenusNotifier} builder={menuBuilder} />
                </Box>
                <Box sx={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    [theme.breakpoints.down('md')]: {
                        width: "100%"
                    },
                }}>
                    <ValueListenableBuilder valueListenable={orderItemsNotifier} builder={orderItemBuilder} />
                </Box>
            </Box>
        </Box>
    </div>
    )
}