import React, { Component, createContext } from 'react';
import axios from 'axios';

const { Consumer, Provider} = createContext();

export default class CoinData extends Component {
    constructor() {
        super();
        this.state = {
            coins: []
        }
    }
    getAlgorithms(url) {
        return axios.get(url)
            .then(response => this.setState({
                coins: response.data
            }))
            .catch(err => this.setState({
                errMsg: 'Your Data Is Unavailable'
            }))
    }
    componentDidMount() {
        this.getAlgorithms('/api/coin/')
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

export const withCoinContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)