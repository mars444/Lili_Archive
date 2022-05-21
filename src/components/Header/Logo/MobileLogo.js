import React from 'react';
import Typography from "@mui/material/Typography";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import Box from '@mui/material/Box';
const MobileLogo = () => {

    return (
        <Box sx ={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <AddLocationRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }}} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Альс Дент
            </Typography>
        </Box>
    );
};

export default MobileLogo;