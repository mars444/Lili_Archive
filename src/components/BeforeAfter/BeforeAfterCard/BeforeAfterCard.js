import React from 'react';
import ReactBeforeSliderComponent from "react-before-after-slider-component";

const BeforeAfterCard = ({firsImage, secondImage}) => {


        return (
            <div>
                <ReactBeforeSliderComponent
                    firstImage={firsImage}
                    secondImage={secondImage}
                />
            </div>
        );
    };

export default BeforeAfterCard;