import React from 'react';

const Product = (props) => {
    return (
            <div className="product_item-box">
                <h4>{props.product.range}</h4>
                <h5>{props.product.seats}</h5>
                <p>{props.product.description}</p>
                {/* need to render this colour array with a for loop */}
                {props.product.colour}<br />
                {props.product.material}
                <h5>{props.product.price}</h5>
            </div>
    );
};

export default Product;