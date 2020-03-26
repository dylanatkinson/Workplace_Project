import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class SearchInput extends Component {
    constructor() {
        super();

        this.state = {
            search: ""
        };
    };

    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        });
    };
    
    render() {
        
        return (
            <div>
                <input type="text" value={this.state.search} onChange={this.handleSearch} placeholder="Find the sofa you love..." /><Link to="/browser"><button className="search_icon"><FontAwesomeIcon icon={faSearch} /></button></Link>
            </div>
        );
    };
};

export default SearchInput;