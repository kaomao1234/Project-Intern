import React from 'react';
import { Box, Button, Divider, Grid, TextField, Typography, outlinedInputClasses } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { use100vh } from "react-div-100vh";
import Div100vh from 'react-div-100vh';
import { useState, useEffect } from 'react';

function Login() {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const height = use100vh();





    return (
        <Box sx={{
            backgroundColor: secondary,
            boxSizing: "border-box",
            height: {
                lg: "100%",
                xl: height
            },
            width: {
                xs: "100vh",
                sm: "100%",
                md: "100%",
                xl: "100%"
            }

        }}>

            <Grid container sx={{
                paddingTop: {
                    lg: "10%"
                }
            }} >
                <Grid item xs={12} sm={12} lg={6} xl={6} md={12} sx={{
                    marginBottom: "50px",
                    display: 'flex', flexDirection: "column", alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box sx={{
                        width: "500px",
                    }}>

                        <Typography variant="h1" sx={{
                            fontSize: "48",
                            background: "linear-gradient(120deg, #c5c4cf, #a28d8b)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"

                        }}>Serve Me</Typography>
                        <Typography variant="h6" color="primary"
                            sx={{
                                fontSize: "24px",
                                lineHeight: "28px"

                            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum dicta tempore dolor omnis eum, velit provident doloribus neque incidunt asperiores similique nemo et ipsa exercitationem magni voluptatibus commodi dignissimos!</Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} xl={6} md={12} sx={{
                    display: 'flex', alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "500px",
                        height: "400px",
                        border: '2px solid',
                        borderColor: '#a28d8b',
                        borderRadius: "20px",
                        boxShadow: '10px 10px 25px #a28d8b',
                        boxSizing: "border-box",
                        paddingX: "30px",
                    }}>
                        <TextField variant="outlined" label="Email address or phone number" sx={{
                            marginTop: "20px",
                            '& label': {
                                color: primary
                            },
                            '& .MuiOutlinedInput-root': {
                                color: "white",
                                '& fieldset': {
                                    borderColor: '#a28d8b',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#a28d8b'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }} ></TextField>
                        <TextField variant="outlined" label="password" type='password' sx={{
                            marginTop: "20px",
                            '& label': {
                                color: primary
                            },
                            '& .MuiOutlinedInput-root': {
                                color: "white",
                                '& fieldset': {
                                    borderColor: '#a28d8b',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#a28d8b'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }} ></TextField>
                        <Button variant="contained" sx={{
                            backgroundColor: "#a28d8b",
                            marginTop: "20px",
                            height: "50px",
                            textTransform: "capitalize",




                        }}>Log in</Button>
                        <Button sx={{
                            marginTop: "20px",
                            textTransform: "capitalize"
                        }}>forgotten password?</Button>
                        <Divider sx={{
                            backgroundColor: "#a28d8b",
                            height: "1px"
                        }} />
                        <Button variant="contained" sx={{
                             backgroundColor: "#a28d8b",
                            marginTop: "20px",
                            textTransform: "capitalize",
                            height: "50px",
                            width: "50%",
                            alignSelf: "center"
                        }}>Create new account</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;
