import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    // const productColours = () => {
    //     return props.product.colour.map(colour => {
    //         return (` ${colour}`)
    //     });
    // };

    return (
            <div className="product_item-box">
                <h4 className="product_range-name">{props.product.range} Range</h4>
                <h5  className="product_range-name">{props.product.seats === 0 ? "" : `${props.product.seats} seat`} {props.product.description}</h5>
                <p><FontAwesomeIcon className="product_icon-palette" icon={faFillDrip} /> Available in {props.product.colour.length} colours</p>
                {/* <p>Available in {productColours()}</p> */}
                <h5>£{props.product.price}</h5>
                <button onClick={props.addToBasket}>Add to Basket</button>
            </div>
    );
};

export default Product;