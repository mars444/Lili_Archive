import React from 'react';
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Box from "@mui/material/Box";
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";








const MainPage = () => {


    const mapData = {
        center: [55.493211, 37.299497],
        zoom: 15,
    };

    const coordinates = [55.493211, 37.299497]



    return (
        <div>

            <Container maxWidth="xl" >

                <Paper elevation={3}  sx={{width: "300px", height: '300px', overflow: 'hidden', margin: '10px auto'}}>
                    <YMaps
                        zoomCon>
                        <Map
                            defaultState={mapData}
                            width={300}
                            height={300}

                        >
                            <ZoomControl options={{ float: 'right' }} />

                            <Placemark
                                geometry={coordinates}
                            />
                        </Map>
                    </YMaps>
                </Paper>



            </Container>




        </div>
    );
};

export default MainPage;

