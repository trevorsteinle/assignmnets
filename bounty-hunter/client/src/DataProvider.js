import React, { Component, createContext } from 'react';
import axios from 'axios';

// const bountyUrl = '/bounties';

const {Consumer, Provider} = createContext();

export default class DataProvider extends Component {
    constructor(){
        super();
        this.state = {
            bounties: [],
            loading: true,
            errMsg: null
        }
        this.addBounty = this.addBounty.bind(this);
    }
    getBounties(url){
        return axios.get(url)
        .then(response => this.setState ({
            bounties: response.data,
            loading: false,
            errMsg: null
        }))
        .catch(err => this.setState({
            errMsg: `Your Data Is Unavailable`,
            loading: false
        }))
    }
        // bind

    addBounty(bounty){
        return axios.post('/bounties/', bounty)
            .then(response => this.setState(ps => ({
                bounties: [...ps.bounties, response.data]
            })))
    }

    editBounty(id, updatedBounty){
        // alert(JSON.stringify({id, updatedBounty}))
        // axios.put(url + id, updateBounty)
        // .then(response => //)
        this.setState(ps => ({
            bounties: ps.bounties.map(bounty => bounty._id === id ? {...bounty, ...updatedBounty} : bounty)
        }))
    }


    componentDidMount(){
        this.getBounties('/bounties/')
    }

    // componentDidMount(){
    //     axios.get('/bounties')
    //         .then(response => this.setState({bounties: JSON.stringify(response.data)}))
    // }
    render() {
        const value = {
            ...this.state,
            addBounty: this.addBounty,
            // editBounty: this.editBounty
        }
        return (
            <Provider value={value}>
            {this.props.children}
            </Provider>
        )
    }
}

export const withBountyContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)