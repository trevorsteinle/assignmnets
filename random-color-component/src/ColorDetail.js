import React from 'react'

function ColorDetail({ color }) {
    return (
        <div style={{ backgroundColor: `#${color}` }}>
            <h3>{color}</h3>
        </div>
    )
}

export default ColorDetail