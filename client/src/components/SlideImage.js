import React from 'react';

const SlideImage = ({ src, imgAlt }) => {
    const imgStyle = {
        width: "100%",
        height: "auto"
    };

    return (
        <img src={src} alt={imgAlt} style={imgStyle} />
    );
};

export default SlideImage;
