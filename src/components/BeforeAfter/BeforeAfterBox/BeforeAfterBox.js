import React from 'react';
import BeforeAfterCard from "../BeforeAfterCard/BeforeAfterCard";

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
        <div>
            {images.map((item,index) =>  {
                   return <BeforeAfterCard
                            key={index}
                            firsImage={item.firsImage}
                            secondImage={item.secondImage}
                />
            }

            )}

        </div>
    );
};

export default BeforeAfterBox;