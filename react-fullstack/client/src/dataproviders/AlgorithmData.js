import React, { Component, createContext } from 'react';
import axios from 'axios';

const { Consumer, Provider} = createContext();

export default class AlgorithmData extends Component {
    constructor() {
        super();
        this.state = {
            algorithms: []
        }
    }
    getAlgorithms(url) {
        return axios.get(url)
            .then(response => this.setState({
                algorithms: response.data
            }))
            .catch(err => this.setState({
                errMsg: 'Your Data Is Unavailable'
            }))
    }
    componentDidMount() {
        this.getAlgorithms('/api/algorithm/')
    }

    render() {
        const value = {
            ...this.state
        }
        return (
            // this.props.children(this.state)
            /*{ <div>
            {this.props.children}

            </div> }*/
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withAlgorithmContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)