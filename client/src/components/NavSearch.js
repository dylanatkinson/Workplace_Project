import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavSearch = (props) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    console.log("in NavSearch " + props.product);

    return (
        <>
            <input type="text" placeholder="Find the sofa you love..." /><Link to="/browser"><button className="search_icon"><FontAwesomeIcon icon={faSearch} /></button></Link>
        </>
    );
};

export default NavSearch;