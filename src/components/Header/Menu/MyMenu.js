import React, { useState } from 'react';
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import {
    Link
} from "react-router-dom";

const pages = [
    {url:'/', title: 'Главная'},
    {url:'/galery', title: 'Галерея'},
    {url:'/about', title: 'О нас'},
];

const MyMenu = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Link key={page.title} to={page.url} style = {{ my: 2, color: 'white', display: 'block', padding: '10px' }}>

                            {page.title}

                    </Link>

                ))}
            </Box>

    );
}

export default MyMenu
