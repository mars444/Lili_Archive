import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import MyLogo from "./Logo/MyLogo";
import MobileLogo from "./Logo/MobileLogo";
import MyMenu from "./Menu/MyMenu";
import MobileMenu from "./Menu/MobileMenu";
import UserBlock from "./UserBlock/UserBlock";

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{justifyContent: 'space-between'}}>
                        <MyLogo/>

                        <MobileMenu/>
                        <MobileLogo/>

                        <MyMenu/>
                        <UserBlock/>



                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
