import React from 'react';
import { Link } from 'react-router-dom';

const MoreMenu = () => {
    return (
        <ul className="more_menu">
            <li><Link to="/order-now">Contact Us</Link></li>
            <li><Link to="/what-is-sofology">What is Sofology?</Link></li>
            <li>Delivery</li>
            <li>Payment Options</li>
            <li>Sofashield</li>
            <li>Sofaglides</li>
            <li><a href="https://sofological.sofology.co.uk/">Inspire Me</a></li>
        </ul>
    );
};

export default MoreMenu;