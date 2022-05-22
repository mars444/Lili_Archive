import React from 'react';
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import {Paper} from "@mui/material";

const BeforeAfterCard = ({firsImage, secondImage}) => {


        return (
            <Paper elevation={5}  sx={{maxWidth: '500px', overflow: 'hidden',  padding: '10px'}}>
                <ReactBeforeSliderComponent
                    firstImage={firsImage}
                    secondImage={secondImage}
                />
            </Paper>
        );
    };

export default BeforeAfterCard;