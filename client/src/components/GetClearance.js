import React, { Component } from 'react';
import axios from 'axios';
import ClearanceItem from './ClearanceItem';

class GetClearance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clearance: []
        }
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/clearance')
            .then(res => {
                this.setState({
                    clearance: res.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    clearanceList = () => {
        return this.state.clearance.map(clearance => {
            return <ClearanceItem clearance={clearance} />
        });
    };

    render() {
        return (
            <div>
                {this.clearanceList()}
            </div>
        );
    };
};

export default GetClearance;