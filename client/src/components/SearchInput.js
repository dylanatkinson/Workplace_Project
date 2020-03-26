import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class SearchInput extends Component {
    constructor (props) {
        super(props);
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Find the sofa you love..." /><Link to="/browser"><button className="search_icon"><FontAwesomeIcon icon={faSearch} /></button></Link>
            </div>
        );
    };
};

export default SearchInput;