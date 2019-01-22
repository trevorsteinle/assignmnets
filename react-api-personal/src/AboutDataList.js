import React from 'react'
// import MissionDetail from './MissionDetail'
import './assets/styles/MissionUpcoming.css'
// import MissionUpcomingDetail from './MissionUpcomingDetail';
import AboutDataDetail from './AboutDataDetail';

function AboutDataList({ aboutData }) {
    // const missionComponents = aboutData.map((mission, i) => (
    //     <MissionDetail key={i}{...mission} />
    // ))
    console.log(aboutData)

    const missionComponents = <AboutDataDetail key='124'{...aboutData} />

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

export default AboutDataList