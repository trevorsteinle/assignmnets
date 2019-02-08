import React from 'react'
import { Link } from 'react-router-dom'
import { withProfileContext } from '../dataproviders/ProfileData'

function ProfileLinks({ profiles }) {
    const links = profiles.map(profile => (
        <Link
            key={profile._id}
            to={{
                pathname: `/profile/${profile._id}`,
            state: { profile }
            }}>
            {profile.coin}
            </Link>
    ))
    return (
        <div>
            {links}
        </div>
    )
}

export default withProfileContext(ProfileLinks)