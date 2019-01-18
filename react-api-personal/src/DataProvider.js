import React, { Component, createContext } from 'react'
import Axios from 'axios';

// export const { Consumer, Provider } = createContext;

export default class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            details: [],
            loading: true,
            errMsg: false
        }
    }

    getDetails(url) {
        Axios.get(url)
            .then(response => this.setState({
                details: response.data,
                loading: false,
                errMsg: null
            }))
            .catch(err => this.setState({
                loading: false,
                errMsg: 'Api Data Is Currently Unavailable'
            }))
    }

    componentDidMount() {
        this.getDetails('https://api.spacexdata.com/v3/launches/upcoming')
    }

    render() {
        // const providerValue = {
        //     ...this.state
        // }
        return (
            
            this.props.children(this.state)

        )
    }
}

