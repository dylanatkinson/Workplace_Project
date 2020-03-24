import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const OrderNow = () => {
    return (
        <>
            <h1 className="order_now-head">We're here to help</h1>
            <div className="order_now-advice">
                <div className="order_now-subhead">

                <h3>Support with your Order or Product</h3>
                    <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "80px", margin: "2vw" }} />
                    <p>
                    To make your support faster and more effective, visit the <span className="order_call-emphasis">online knowledge base</span> for in-depth product help, troubleshooting guides and if needed submit a direct online support request for fast personal service from the team.
                    </p>
                </div>
                <div className="order_now-subhead">

                    <h3>Place an Order</h3>
                    <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: "80px", margin: "2vw" }} />
                    <p>
                        Call free on <span className="order_call-emphasis">0800 140 40 40</span>. Our Sofologists are on hand to help with your order from 8am - 10pm today.
                    </p>
                </div>

                <div className="order_now-subhead">
                    <h3>Other Enquiries</h3>
                    <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: "80px", margin: "2vw" }} />
                    <p>
                        You can call us on <span className="order_call-emphasis">03444 81 81 81</span> for any enquiry or to book delivery.
                        You can also find a range of articles and answers to common questions in our online support centre.
                    </p>
                </div>
            </div>
        </>
    );
};

export default OrderNow;