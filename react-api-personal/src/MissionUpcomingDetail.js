import React from 'react'
import Countdown from 'react-countdown-now';

function MissionUpcomingDetail({ details, flight_number, mission_name, launch_date_utc, launch_date_unix, links, rocket, launch_site }) {
    // const styles={
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3,1fr)'
    // }
    const styles = {
        height: '100v',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'center'
        // justifyContent: 'space-between'
        // flexDirection: 'row'
    }

    // console.log(launch_site)
    // console.log(JSON.stringify(launch_site));
    // let currentUnix = Math.round((new Date()).getTime() / 1000)
    let unixNow = Math.round((new Date()).getTime());
    console.log(unixNow)

    return (
        <div style={styles}>
            <div>
                {/* <img style={{display: 'block'}} src={links.mission_patch_small} alt={links.mission_patch_small}/> */}
                <h1><Countdown date={unixNow + (launch_date_unix) }/></h1>
                <h3>{mission_name}</h3>
                {/* <p>{rocket.first_stage.cores[0].core_serial}</p> */}
                <p >{details}</p>
                {/* <p>{JSON.stringify(launch_site)}</p> */}
                {/* <p>{flight_number}</p> */}
                <p>Launch Date UTC: {launch_date_utc}</p>
                <p>Flight Number: {flight_number}</p>
            </div>
        </div>
    )
}

export default MissionUpcomingDetail