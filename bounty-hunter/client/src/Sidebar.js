import React from 'react'
import { Link } from 'react-router-dom'
import { withBountyContext } from './DataProvider'

function Sidebar({ bounties }) {
    const links = bounties.map(bounty => (
        <Link
            key={bounty._id}
            to={{
                pathname: `/bounties/${bounty._id}`,
            state: { bounty }
            }}>
            {bounty.fName}
            </Link>
    ))
    return (
        <div>
            {links}
        </div>
    )
}

export default withBountyContext(Sidebar)
