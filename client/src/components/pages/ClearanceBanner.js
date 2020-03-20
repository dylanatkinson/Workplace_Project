import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ClearanceBanner = () => {
    return (
        <div className="clearance_banner-over">
            <div className="clearance_section">
                <h1 className="clearance_banner-top">Up to 50% off in Clearance</h1>
                <div className="clearance_order">
                    <p className="clearance_emphasis"><FontAwesomeIcon icon={faStore} style={{ color: "black" }} /> in-store <span className="clearance_disclaimer">or</span> <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "black" }} /> 0800 140 40 40</p>
                    <p className="clearance_disclaimer">Stock availability is dependent on location. Full terms and conditions can be viewed here.</p>
                </div>
            </div>

            <div className="clearance_description">
                <div className="clearance_description-subhead">
                        Our Clearance can be categorised into the following:
                </div>
                <div className="clearance_description-sub">
                    <FontAwesomeIcon icon={faStoreAlt} /> <h2>Ex-Display</h2>
                    This item has been displayed in one of our stores and now it's ready for you to take home.
                </div>
                <div className="clearance_description-sub">
                    <FontAwesomeIcon icon={faScroll} /> <h2>Cancelled Orders</h2>
                    This is a brand new item that has never been in anyone's home.
                </div>
                <div className="clearance_description-sub">
                    <FontAwesomeIcon icon={faCouch} /> <h2>Discontinued</h2>
                    Hurry - it's your last chance to have an item from this range in your home.
                </div>
                <div className="clearance_description-sub">
                    <FontAwesomeIcon icon={faStar} /> <h2>Like New</h2>
                    This has been in a customer's home but it's just as good as new.
                </div>
            </div>
        </div>
    );
};

export default ClearanceBanner;