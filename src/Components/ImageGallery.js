import React, { useState } from 'react';
import Masonry from "react-responsive-masonry";

const images = [
    "./assets/bkg_car.jpeg",
    "./assets/bkg_rlx.jpeg",
    "./assets/car_bkg.jpeg",
    "./assets/bkg_car.jpeg",
    "./assets/bkg_rlx.jpeg",
    "./assets/car_bkg.jpeg"
]

function ImageGallery() {
    const viewImage = (image, i) => {
        console.log(image, i);
    }

    return (
        <div className="w-full h-screen bg-[#0a192f]">
            <div style={ {padding: '10px'} }>
                <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, i) => (
                        <img className="hover:scale-125 transition-all"
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </div>
        </div>
        
    )
}

export default ImageGallery
