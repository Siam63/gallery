import React, { useState } from 'react';
import Masonry from "react-responsive-masonry";

const images = [
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/3000/2000",
    "https://picsum.photos/4000/3000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/1000/2500",
    "https://picsum.photos/1500/2000"
]

function ImageGallery() {
    const viewImage = (image, i) => {
        console.log(image, i);
    }

    return (
        <div style={ {padding: '10px'} }>
            <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                        onClick={() => viewImage(image, i)}
                    />
                ))}
            </Masonry>
        </div>
    )
}

export default ImageGallery
