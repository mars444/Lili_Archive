import React from 'react';
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Box from "@mui/material/Box";
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";








const MainPage = () => {

    const FIRST_IMAGE = {
        imageUrl: 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'
    };
    const SECOND_IMAGE = {
        imageUrl: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
    };


    const mapData = {
        center: [55.493211, 37.299497],
        zoom: 15,
    };

    const coordinates = [55.493211, 37.299497]



    return (
        <div>

            <Container maxWidth="xl" >
                <Paper elevation={3}  sx={{width: "300px", height: '300px', overflow: 'hidden', margin: '10px auto'}}>
                        <ReactBeforeSliderComponent
                            firstImage={FIRST_IMAGE}
                            secondImage={SECOND_IMAGE}
                        />
                </Paper>

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

