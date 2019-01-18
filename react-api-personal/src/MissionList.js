import React from 'react'
import MissionDetail from './MissionDetail';

function MissionList({details}) {
    const missionComponents = details.map((mission, i) => (
        <MissionDetail key={i}{...mission} />
    ))
    return (
        <div>
            {missionComponents}
        </div>
    )
}

export default MissionList
