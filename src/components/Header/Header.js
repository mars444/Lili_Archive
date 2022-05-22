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
import Contacts from "./Contacts/Contacts";

const Header = () => {
    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{justifyContent: 'space-between'}}>

                        <MobileMenu/>
                        <MobileLogo/>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <MyLogo/>
                        <MyMenu/>
                    </Box>

                    <Box sx={{  display: 'flex', alignItems: 'center' }}>
                        <Contacts/>
                    <UserBlock/>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
