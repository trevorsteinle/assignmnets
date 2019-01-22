import React, { Component } from 'react';
import Axios from 'axios';
// import MissionUpcomingList from './MissionUpcomingList';
import AboutDataList from './AboutDataList';

export default class AboutData extends Component {
    constructor() {
        super();
        this.state = {
            aboutData: []
        }
    }

    getDetails(url) {
        Axios.get(url)
            .then(response => this.setState({
                aboutData: response.data,
                // loading: false,
                // errMsg: null
            }))
            // .catch(err => this.setState({
            //     loading: false,
            //     errMsg: 'Api Data Is Currently Unavailable'
            // }))
    }

    componentDidMount() {
        this.getDetails('https://api.spacexdata.com/v3/info')
    }

    render() {

        return (
            <AboutDataList aboutData={this.state.aboutData} />
        )
    }
}