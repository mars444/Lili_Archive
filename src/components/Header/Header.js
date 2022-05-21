import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import MyLogo from "./Logo/MyLogo";
import MobileLogo from "./Logo/MobileLogo";
import MyMenu from "./Menu/MyMenu";
import MobileMenu from "./Menu/MobileMenu";
import UserBlock from "./UserBlock/UserBlock";
import Box from "@mui/material/Box";

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{justifyContent: 'space-between'}}>

                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <MyLogo/>

                        <MobileMenu/>
                        <MobileLogo/>

                        <MyMenu/>
                    </Box>

                    <UserBlock/>



                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
