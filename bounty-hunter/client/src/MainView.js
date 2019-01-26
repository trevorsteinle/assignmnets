import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import BountyDetail from './BountyDetail';
import { withBountyContext } from './DataProvider'
function MainView({bounties}) {
        return (
            <div>
                <Sidebar />
                <Route path='/bounties/:id' component={BountyDetail} />
            </div>
        )
    }

export default withBountyContext(MainView)
