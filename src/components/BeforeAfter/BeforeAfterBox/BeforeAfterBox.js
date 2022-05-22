import React from 'react';
import BeforeAfterCard from "../BeforeAfterCard/BeforeAfterCard";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const images = [
    {
        firsImage: {
            imageUrl:'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'
        },
        secondImage: {
            imageUrl:'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        },
    },
    {
        firsImage: {
            imageUrl:'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'
        },
        secondImage: {
            imageUrl:'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        },
    },{
        firsImage: {
            imageUrl:'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'
        },
        secondImage: {
            imageUrl:'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        },
    },{
        firsImage: {
            imageUrl:'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'
        },
        secondImage: {
            imageUrl:'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        },
    },{
        firsImage: {
            imageUrl:'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'
        },
        secondImage: {
            imageUrl:'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        },
    },




    {
        firsImage: {
            imageUrl:'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg'
        },
        secondImage: {
            imageUrl:'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        },
    },
]

const BeforeAfterBox = () => {
    return (
        <Box sx={{
            display:'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '30px',
        }}>
            {images.map((item,index) =>  {
                   return <BeforeAfterCard
                            key={index}
                            firsImage={item.firsImage}
                            secondImage={item.secondImage}
                />
            }

            )}


        </Box>
    );
};

export default BeforeAfterBox;