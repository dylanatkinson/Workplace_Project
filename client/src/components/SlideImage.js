import React from 'react';

const SlideImage = ({ src, alt, header, text, name, material }) => {
    const imgStyle = {
        width: "100%",
        height: "auto"
    };

    return (
        <>
            <img src={src} alt={alt} style={imgStyle} />
            <h1 style={{ position: "absolute", zIndex: "1", color: "white", top: "35%", left: "10%", textAlign: "center", width: "30%" }}>{header}</h1>
            <p style={{ position: "absolute", zIndex: "1", color: "white", top: "45%", left: "10%", textAlign: "center", width: "30%" }}>
                {text}
            </p>
            <button style={{ position: "absolute", zIndex: "1", color: "white", top: "60%", left: "12%", textAlign: "center", width: "10%", height: "5%", background: "none", border: "1px solid white" }}>Shop {name}</button>
            <button style={{ position: "absolute", zIndex: "1", color: "white", top: "60%", left: "27%", textAlign: "center", width: "10%", height: "5%", background: "none", border: "1px solid white" }}>Shop {material}</button>
        </>
    );
};

export default SlideImage;
