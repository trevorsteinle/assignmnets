import React from 'react'

function MissionDetail({details, flight_number, mission_name, launch_date_local, links, rocket}) {
    return (
        <ul>
            <h5>{mission_name}</h5>
            <img src={links.mission_patch_small} alt=""/>
            <p>{rocket.first_stage.cores[0].core_serial}</p>
            <p>{details}</p>
            <p>{flight_number}</p>
            <p>{launch_date_local}</p>
        </ul>
    )
}

export default MissionDetail