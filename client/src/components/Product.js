import React from 'react';

const Product = (props) => {

    const productColours = () => {
        return props.product.colour.map(colour => {
            return (` ${colour}`)
        });
    };

    return (
            <div className="product_item-box">
                <h4 className="product_range-name">{props.product.range} Range</h4>
                <h5>{props.product.seats} seat {props.product.description}</h5>
                <p>Available in {productColours()} {props.product.material}</p>
                <h5>£{props.product.price}</h5>
            </div>
    );
};

export default Product;