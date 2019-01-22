import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import { Consumer } from './DataProvider';
// import DataView from './DataView'
import MissionDetail from './MissionDetail';
import Nav from './Nav';
import Home from './Home';
import About from './About'
// import AllMissions from './AllMissionsData';
import AllMissionsData from './AllMissionsData';
import MissionUpcomingData from './MissionUpcomingData'
import './assets/styles/MainView.css'
import AboutData from './AboutData';

function MainView({ details, allMissionDetails }) {
    console.log(allMissionDetails)
    // const links = details.map((detail, i) => (
    //     <Link key={i} to={{pathname: `/mission/${i}/${detail.mission_name}`, state: detail}}>{detail.mission_name}</Link>
    // ))

    return (
        <div className="mainview">
            <Nav details={details}/>
            <Switch>
                <Route exact path='/' component={MissionUpcomingData}/>
                <Route path='/all_missions' component={AllMissionsData} />
                <Route path='/about' component={AboutData} />

                <Route
                    path="/:id"
                    render={({location: {state}}) => (
                        <MissionDetail {...state} />
                    )}
                    />
            </Switch>
        </div>
    )
}

export default MainView