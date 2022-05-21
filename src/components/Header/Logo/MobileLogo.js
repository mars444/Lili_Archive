import React from 'react';
import Typography from "@mui/material/Typography";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";

const MobileLogo = () => {

    return (
        <div style={{
            display: 'flex',

        }}>
            <AddLocationRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
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
        </div>
    );
};

export default MobileLogo;