import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SofologyLogo from './images/Sofology-Logo-Standard.png';

import MoreMenu from './MoreMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = (props) => {
    const [menu, setMenu] = useState(false);

    return (
        <nav>
            <div className="top_nav">
                My Favourites | <Link to="/basket"> Basket {props.items === 0 ? "" : props.items} </Link> | Log in
            </div>
            <ul>
                <Link to="/"><img src={SofologyLogo} alt="Sofology Logo" style={{margin: "1vw 0 1vw 0"}} /></Link>
                {/* need to use this input to search the database for matching items */}
                <li><input type="text" placeholder="Find the sofa you love..." /><Link to="/browser"><button className="search_icon"><FontAwesomeIcon icon={faSearch} /></button></Link></li>
                <li><Link to="/stores">Find a Store</Link></li>
                <li><Link to="/responsibility">Responsibility</Link></li>
                <li onMouseEnter={() => setMenu(true)}>
                    <span>More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "0.7rem" }} />
                    {menu && <div className="menu_hover-top" onMouseLeave={() => setMenu(false)}><MoreMenu /></div>}
                    </span>
                </li>
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
        </nav>
    );

};

export default Navigation;