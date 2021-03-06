import React from 'react'
import MissionDetail from './MissionDetail'
import './assets/styles/AllMissionsList.css'

function AllMissionsList({ allMissionDetails }) {
    const missionComponents = allMissionDetails.map((mission, i) => (
        <MissionDetail key={i}{...mission} />
    ))

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
        <div className='allMissionsList'>
            {missionComponents}
        </div>
    )
}

export default AllMissionsList