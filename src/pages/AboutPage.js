import React from 'react';
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";
import BeforeAfterCard from "../components/BeforeAfter/BeforeAfterCard/BeforeAfterCard";
import Box from "@mui/material/Box";
import BeforeAfterBox from "../components/BeforeAfter/BeforeAfterBox/BeforeAfterBox";

const AboutPage = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Paper elevation={3}>AboutPage</Paper>
                <BeforeAfterBox/>
            </Container>
        </div>
    );
};

export default AboutPage;