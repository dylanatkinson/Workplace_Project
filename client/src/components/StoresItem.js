import React from 'react';

const StoresItem = (props) => {
    return (
        <div className="product_item-box">
            <h2 className="product_range-name">{props.store.name}</h2>
            <h4 className="product_range-name">{props.store.address}</h4>
            <h5>{props.store.phone}</h5>
        </div>
    );
};

export default StoresItem;