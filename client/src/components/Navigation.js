import React from 'react';
import { Link } from 'react-router-dom';

import SofologyLogo from './images/Sofology-Logo-Standard.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigation = (props) => {
    return (
        <nav>
            <div className="top_nav">
                My Favourites | <Link to ="/basket"> Basket {props.items} </Link> | Log in
            </div>
            <ul>
                <Link to="/"><img src={SofologyLogo} alt="Sofology Logo" /></Link>
                <li><input type="text" placeholder="Find the sofa you love..." /><Link to="/browser"><button className="search_icon"><FontAwesomeIcon icon={faSearch} /></button></Link></li>
                <li><Link to="/stores">Find a Store</Link></li>
                <li><Link to="/responsibility">Responsibility</Link></li>
                <li>More</li>
                <li><Link to="/order-now"><button className="order_btn">Call to Order</button></Link></li>
                <li><Link to="/clearance"><button className="clearance_btn">Clearance</button></Link></li>
            </ul>
            <div className="slick_nav">
                <Link to="/browser"><button>Fabric Sofas</button></Link>
                <Link to="/browser"><button>Leather Sofas</button></Link>
                <Link to="/browser"><button>Corner Sofas</button></Link>
                <Link to="/browser"><button>Recliner Sofas</button></Link>
                <Link to="/browser"><button>Chairs</button></Link>
                <Link to="/browser"><button>Sofa Beds</button></Link>
                <Link to="/sofasizer"><button>Sofasizer</button></Link>
            </div>
            <div className="promo_banner">
                <ul>
                    <li>Guaranteed for 20 Years</li>
                    <li>Exclusive Sofa Designs</li>
                    <li>Interest Free 0% APR (min. spend £500)</li>
                    <li>Always 100% Leather</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;