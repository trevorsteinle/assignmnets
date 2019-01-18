import React, { Component } from 'react';
import Axios from 'axios';
import AllMissionsList from './AllMissionsList';
export default class AllMissionsData extends Component {
    constructor() {
        super();
        this.state = {
            allMissionDetails: []
        }
    }

    getDetails(url) {
        Axios.get(url)
            .then(response => this.setState({
                allMissionDetails: response.data,
                // loading: false,
                // errMsg: null
            }))
            // .catch(err => this.setState({
            //     loading: false,
            //     errMsg: 'Api Data Is Currently Unavailable'
            // }))
    }

    componentDidMount() {
        this.getDetails('https://api.spacexdata.com/v3/launches')
    }

    render() {

        return (
            <AllMissionsList allMissionDetails={this.state.allMissionDetails} />
        )
    }
}

