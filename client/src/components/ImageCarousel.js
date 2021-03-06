import React, { useState } from 'react';

import SlideImage from './SlideImage';

import './styles/slider.css';
import HallieBanner from './images/hp-banner-hallie_yfihco.jpg';
import MimiBanner from './images/hp-mimi-desk_dax9cd.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = () => {

    let slides = [
        <SlideImage src={HallieBanner} alt="Shop the new Hallie" header="Perfectly Pastel" text="Pastels for spring? Breathe new life into your home with this season's hottest new fabric sofa styles. Try a pop of pink or a soft minty hue to brighten any room." name="Hallie" material="Fabric" />,
        <SlideImage src={MimiBanner} alt="Shop the new Mimi" header="Exclusive Leather Designs" text="Colour isn't just for fabric. Discover our leather styles in every shade from soft and subtle neutrals to bright, bold statement sofas." name="Mimi" material="Leather" />
    ];

    // react hook
    let [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100);
    };

    const goRight = () => {
        x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
    };   

    return (
        <div className="top_slider">
            {
                slides.map((image, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {image}
                        </div>
                    )
                })
            }
            <button className="slide_btn" id="go_left" onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="slide_btn" id="go_right" onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    );
};

export default ImageCarousel;
