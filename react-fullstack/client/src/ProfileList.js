import React from 'react'
import ProfileDetail from './ProfileDetail';
import './css/ProfileDetail.css'

function ProfileList(props) {
    // console.log(JSON.stringify(props))

    const profiles = []
    if (props) {
        for (let i in props) {
        profiles.push(<ProfileDetail key={i}{...props[i]} />)
        }
}
    return (
        <div className="profiles">
            {profiles}
        </div>
    )
}

export default ProfileList
