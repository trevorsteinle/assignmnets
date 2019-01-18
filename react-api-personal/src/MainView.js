import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import { Consumer } from './DataProvider';
// import DataView from './DataView'
import MissionDetail from './MissionDetail';
import Nav from './Nav';
import Home from './Home';
// import AllMissions from './AllMissionsData';
import AllMissionsData from './AllMissionsData';
function MainView({ details, allMissionDetails }) {
    console.log(allMissionDetails)
    // const links = details.map((detail, i) => (
    //     <Link key={i} to={{pathname: `/mission/${i}/${detail.mission_name}`, state: detail}}>{detail.mission_name}</Link>
    // ))

    return (
        <div>
            <Nav details={details}/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/all_missions' component={AllMissionsData} />
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
