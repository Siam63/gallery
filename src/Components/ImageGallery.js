import React, { useState } from 'react';
import Masonry from "react-responsive-masonry";

const images = [
    "./assets/img1.JPG",
    "./assets/img2.JPG",
    "./assets/img3.JPG",
    "./assets/img4.JPG",
    "./assets/img5.JPG",
    "./assets/img6.JPG",
    "./assets/img7.JPG",
    "./assets/img8.JPG",
    "./assets/img9.JPG",
    "./assets/img10.JPG",
    "./assets/img11.JPG",
    "./assets/img12.JPG",
    "./assets/img13.JPG",
    "./assets/img14.JPG",
    "./assets/img15.JPG",
    "./assets/img16.JPG",
    "./assets/img17.JPG",
    "./assets/img18.JPG",
    "./assets/img19.JPG",
    "./assets/img20.JPG",
    "./assets/img21.JPG",
]

function ImageGallery() {
    const viewImage = (image, i) => {
        console.log(image, i);
    }

    return (
        <div>
            <div style={ {padding: '10px'} }>
                <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, i) => (
                        <img className="hover:scale-110 transition-all"
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
