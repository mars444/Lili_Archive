import React from 'react';
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
const MyLogo = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <AddLocationRoundedIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Альс Дент
            </Typography>
        </Box>
    );
};

export default MyLogo;