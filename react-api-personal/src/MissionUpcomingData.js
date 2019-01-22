import React, { Component } from 'react';
import Axios from 'axios';
import MissionUpcomingList from './MissionUpcomingList';

export default class MissionUpcomingData extends Component {
    constructor() {
        super();
        this.state = {
            upcomingMissionDetails: []
        }
    }

    getDetails(url) {
        Axios.get(url)
            .then(response => this.setState({
                upcomingMissionDetails: response.data,
                // loading: false,
                // errMsg: null
            }))
            // .catch(err => this.setState({
            //     loading: false,
            //     errMsg: 'Api Data Is Currently Unavailable'
            // }))
    }

    componentDidMount() {
        this.getDetails('https://api.spacexdata.com/v3/launches/next')
    }

    render() {

        return (
            <MissionUpcomingList upcomingMissionDetails={this.state.upcomingMissionDetails} />
        )
    }
}