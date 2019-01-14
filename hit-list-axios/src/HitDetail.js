import React from 'react'

function HitDetail({ namee, image }) {
    return (
        <div>
            <img src={image} alt={image}/>
            <h3>{namee}</h3>
        </div>
    )
}

export default HitDetail
