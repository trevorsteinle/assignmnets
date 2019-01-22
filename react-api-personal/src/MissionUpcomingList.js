import React from 'react'
// import MissionDetail from './MissionDetail'
import './assets/styles/MissionUpcoming.css'
import MissionUpcomingDetail from './MissionUpcomingDetail';

function AllMissionsList({ upcomingMissionDetails }) {
    // const missionComponents = upcomingMissionDetails.map((mission, i) => (
    //     <MissionDetail key={i}{...mission} />
    // ))
    console.log(upcomingMissionDetails)

    const missionComponents = <MissionUpcomingDetail key='123'{...upcomingMissionDetails} />

    // const styles={
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     flexDirection: 'row'
    // }
    const styles={
        display: 'grid',
        gridGap: '5px',
        // gridTemplateColumns: 'repeat(3,1fr)'
        gridTemplateColumns: '290px 290px 290px'
    }
    // const styles = {
    //     display: 'flex',
    //     justifyContent: 'space-between'
    // }

    return (
        <div className='MissionUpcoming'>
            {missionComponents}
        </div>
    )
}

export default AllMissionsList