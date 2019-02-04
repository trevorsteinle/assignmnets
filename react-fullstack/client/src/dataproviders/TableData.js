import React, { Component, createContext } from 'react';
import axios from 'axios';

const { Consumer, Provider} = createContext();

export default class TableData extends Component {
    constructor() {
        super();
        this.state = {}
    }
    getStats(url) {
        return axios.get(url)
            .then(response => this.setState({
                farm: response.data
            }))
            .catch(err => this.setState({
                errMsg: 'Your Data Is Unavailable'
            }))
    }
    componentDidMount() {
        this.getStats('http://virosa.ethosdistro.com/?json=yes')
    }
    

    render() {
        
        const value = {
            ...this.state
        }
        const rig = value.farm;
        // console.log(JSON.stringify(rig.rigs))
        // console.log(Object.entries(props.value))
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

export const withTableContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)