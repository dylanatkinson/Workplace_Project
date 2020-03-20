import React from 'react';
import SubNavigation from '../SubNavigation';
import GetProducts from '../GetProducts';

const Browser = (props) => {
    return (
        <div>
            <SubNavigation />
            <h1>Placeholder</h1>
            <GetProducts />
            <button onClick={props.addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Browser;