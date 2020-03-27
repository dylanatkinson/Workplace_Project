import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer_list">
                <h3 className="footer_list-title">Shop by...</h3>
                <ul>
                    <li>Leather sofas</li>
                    <li>Fabric sofas</li>
                    <li>Recliner sofas</li>
                    <li>Corner sofas</li>
                    <li>Sofa beds</li>
                    <li>New in</li>
                    <li>Size or Colour</li>
                </ul>
            </div>

            <div className="footer_list">
                <h3 className="footer_list-title">About us</h3>
                <ul>
                    <li>Careers</li>
                    <li>MySofology</li>
                    <li>Customer Charter &amp; Terms and Conditions</li>
                    <li>Privacy &amp; Cookies</li>
                    <li>Gender Pay Gap Reporting</li>
                    <li>Modern Slavery Statement</li>
                    <li>Sitemap</li>
                    <li>Manage Your Preferences</li>
                </ul>
            </div>

            <div className="footer_list">
                <h3 className="footer_list-title">Contact us</h3>
                <ul>
                    <li>Call us 7 days a week to chat about sofas or place an order</li>
                    <li><span className="order_call-emphasis">03444 818181</span></li>
                </ul>
            </div>

            <div className="footer_list">
                <h3 className="footer_list-title">Follow us</h3>
                <ul id="social_media-footer">
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faPinterest} /></li>
                    <li><FontAwesomeIcon icon={faYoutube} /></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;