import React from 'react';
import IconButton from "@mui/material/IconButton";
import {Fingerprint, PhoneIphone} from "@mui/icons-material";
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
import UserBlock from "../UserBlock/UserBlock";
import Box from "@mui/material/Box";

const Contacts = () => {
    return (

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                    href="tel:+79031199353"
                    aria-label="fingerprint"
                    color='inherit'
                >
                    <PhoneIcon  />
                </IconButton>

            </Box>
    );
};

export default Contacts;