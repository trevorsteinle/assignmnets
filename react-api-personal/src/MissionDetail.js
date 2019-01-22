import React from 'react'

function MissionDetail({ details, flight_number, mission_name, launch_date_local, links, rocket }) {
    // const styles={
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3,1fr)'
    // }
    const styles = {
        height: '75vh',
        // display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5em'
        // justifyContent: 'space-between'
        // flexDirection: 'row'
    }
    const styles2 = {
        // height: '100h',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // borderWidth: '1px',
        // borderStyle: 'solid',
        // borderColor: 'black'
        // alignItems: 'center',
        // textAlign: 'center'
        // justifyContent: 'space-between'
        // flexDirection: 'row'
    }


    return (
        <div style={styles2}>
            <div style={styles}> 

                <img src={links.mission_patch_small} alt={links.mission_patch_small} />
                <h5 style={{ display: 'block' }}>{mission_name}</h5>
                {/* <p>{rocket.first_stage.cores[0].core_serial}</p> */}
                <p >{details}</p>
                {/* <p>{flight_number}</p> */}
                <p>Launch Date: {launch_date_local}</p>
                <a href={links.video_link}>Launch Video</a>

            </div>
        </div>
    )
}

export default MissionDetail