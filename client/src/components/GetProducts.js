import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

class GetProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/products')
            .then(res => {
                this.setState({
                    products: res.data
                });
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    };

    productsList = () => {
        return this.state.products.map(product => {
            return <Product product={product} />
        });
    };

    render() {
        return (
            <div className="product_descriptor-box">
            { this.productsList() }
            </div>
        );
    };
};

export default GetProducts;