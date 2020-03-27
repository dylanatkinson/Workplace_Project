import React from 'react';

import ImageCarousel from './ImageCarousel';
import SubNavigation from './SubNavigation';
import ShopSofas from './ShopSofas';

const Home = () => {
    return (
        <div>
            <SubNavigation />
            <ImageCarousel />
            <ShopSofas />
        </div>
    );
};

export default Home;