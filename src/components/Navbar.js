import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {Auth} from "../context/Auth";

export const Navbar = () => {
    const navigate = useNavigate()
    const {token} = useContext(Auth)

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        <Button
                            onClick={() => navigate('/movies')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Movies
                        </Button>
                        <Button
                            onClick={() => navigate('/rickandmorty')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Rick & Morty
                        </Button>
                        <Button
                            onClick={() => navigate('/counter')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Counter
                        </Button>
                        <Button
                            onClick={() => navigate('/todo')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            ToDo
                        </Button>
                        <Button
                            onClick={() => navigate('/shop')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Shop
                        </Button>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        {token ? (
                            <Tooltip title="Open settings">
                                <IconButton sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Button
                                onClick={() => navigate('/signin')}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                Sign In
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
