import React, { Component } from 'react';
import axios from 'axios';
import StoresItem from './StoresItem';

class GetStores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: []
        }
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/stores')
            .then(res => {
                this.setState({
                    stores: res.data
                });
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    };

    storesList = () => {
        return this.state.stores.map(store => {
            return <StoresItem store={store} />
        });
    };

    render() {
        return (
            <>
            <h5>{this.state.stores.length} results</h5>
            <div className="product_descriptor-box">
                {this.storesList()}
            </div>
            </>
        );
    };
};

export default GetStores;