import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import BountyDetail from './BountyDetail';
import { withBountyContext } from './DataProvider'
function MainView({bounties}) {
        return (
            <div>
                <Sidebar />
                {/* <Route path='/bounties/:id' component={BountyDetail} /> */}
                <Route path='/bounties/:id' component={(routeProps) => {
                    const {id} = routeProps.match.params;
                    const findBounty = bounties.find(bounty => {
                        return bounty._id === id;
                    })
                    return (
                        <BountyDetail {...findBounty}/>
                    )
                }}/>
            </div>
        )
    }

export default withBountyContext(MainView)
