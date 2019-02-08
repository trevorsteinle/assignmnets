import React from 'react';
import { Route } from 'react-router-dom';

import { withProfileContext } from './dataproviders/ProfileData';
import { withToggler } from './Toggler'
import ProfileList from './ProfileList';
import ProfileLinks from './links/ProfileLinks';
import TableDetail from './TableDetail';
import TableData from './dataproviders/TableData';
import TableList from './TableList'
import AddProfileForm from './AddProfileForm';
// import AlgorithmData from './dataproviders/AlgorithmData';
import './css/MainView.css'

// function MainView({algorithms}) {
function MainView({ profiles, getProfiles, toggle, on}) {
    return (
        <div>
            <TableData>
                <TableList />
            </TableData>
            <button className='profileButton' onClick={toggle}>Show Profiles</button>
            {on && <AddProfileForm />}
            {on && <ProfileList {...profiles} />}


            {/* <ProfileLinks /> */}
            {/* <AddProfileForm /> */}

            {/* <Route path='/profile/:id' component={(routeProps) => {
                const { id } = routeProps.match.params;
                const findProfile = profiles.find(profile => {
                    return profile._id === id;
                })
                return (
                    <ProfileList {...findProfile} />
                )
            }} /> */}
            {/* <ProfileList profiles={profiles}/> */}
        </div>
    )
}

export default withProfileContext(withToggler(MainView))
// export default MainView