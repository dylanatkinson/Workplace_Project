import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';

const ClearanceItem = (props) => {
    return (
        <div className="product_item-box">
            <h4 className="product_range-name">{props.clearance.range}</h4>
            <h5 className="product_range-name">{props.clearance.seats === 0 ? "" : `${props.clearance.seats} seat`} {props.clearance.description}</h5>
                <p><FontAwesomeIcon className="product_icon-palette" icon={faFillDrip} /> Available in {props.clearance.colour.length} colours</p>
                <h5>£{props.clearance.price}</h5>
                <h5>Call to Order: <span className="order_call-emphasis">0800 140 40 40</span></h5>
        </div>
    );
};

export default ClearanceItem;