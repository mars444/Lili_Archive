import React from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

const pages = [
    {url:'/', title: 'Главная'},
    {url:'/galery', title: 'Галерея'},
    {url:'/about', title: 'О нас'},
];

const MobileMenu = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Box sx={
                { flexGrow: 1, display: { xs: 'flex', md: 'none' },

                }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>


                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (

                            <Link key={page.title} to={page.url}>
                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> {page.title} </Typography>
                                </MenuItem>
                            </Link>


                    ))}
                </Menu>
            </Box>
        </Box>
    );
};

export default MobileMenu;