import React from 'react';
import 'react-before-after-slider-component/dist/build.css';
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";








const MainPage = () => {


    const mapData = {
        center: [55.493211, 37.299497],
        zoom: 15,
    };

    const coordinates = [55.493211, 37.299497]



    return (
        <div>

            <div>

                <div>
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
                </div>

            </div>


        </div>
    );
};

export default MainPage;

