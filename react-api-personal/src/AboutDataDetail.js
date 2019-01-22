import React from 'react'

function AboutDataDetail({ name, founder, founded, valuation, headquarters, links, summary }) {
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

    const styles2 = {
        // borderWidth: '1px',
        // borderStyle: 'solid',
        // borderColor: 'black'
        width: '60em'

    }

    // const headquarters2 = Object.keys(headquarters)
    // console.log(headquarters2)
    return (
        <div style={styles}>
            <div style={styles2}>
                {/* <img style={{display: 'block'}} src={links.mission_patch_small} alt={links.mission_patch_small}/> */}
                <h2>{name}</h2>
                <p>{summary}</p>
                <p>Founder: {founder}</p>
                <p>Founded: {founded}</p>
                {/* <p>{JSON.stringify(launch_site)}</p> */}
                <p>Valuation: ${valuation}</p>
                {/* <p>{headquarters.address}</p> */}
                {/* <p>Website: <a href={links.website}>{links.website}</a></p> */}
            </div>
        </div>
    )
}

export default AboutDataDetail