import React from 'react';
import SubNavigation from '../SubNavigation';
import GetProducts from '../GetProducts';

const Browser = (props) => {
    return (
        <div className="browser_container">
            <SubNavigation />
            <GetProducts addToBasket={props.addToBasket} />
            {/* <button onClick={props.addToBasket}>Add to Basket</button> */}
        </div>
    );
};

export default Browser;