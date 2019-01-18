import React from 'react'
import MissionDetail from './MissionDetail'

function AllMissionsList({allMissionDetails}) {
    const missionComponents = allMissionDetails.map((mission, i) => (
        <MissionDetail key={i}{...mission} />
    ))
    return (
        <div>
            {missionComponents}
        </div>
    )
}

export default AllMissionsList