import React from 'react';
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import Typography from "@mui/material/Typography";

const MyLogo = () => {
    return (
        <div style={{display: 'flex'}}>
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
        </div>
    );
};

export default MyLogo;