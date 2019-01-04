import React from 'react';


const dollaBillz = (prices) => {
    if (prices < 500) {
      return "$"
    } else if (prices > 500 && prices < 1000) {
      return "$$"
    } else {
      return "$$$"
    }
}

const timeOfYearBackground = (timeOfYear) => {
    if (timeOfYear === 'Spring') {
        return `#F4512C`
    } else if (timeOfYear === 'Winter') {
        return `#0077ff`
    } else if (timeOfYear === 'Fall') {
        return `#DBA72E`
    } else if (timeOfYear === 'Summer')
        return `#f9d62e`
}   

const Cards = ({place, price, timeOfYear}) => (
    <div style={{backgroundColor: timeOfYearBackground(timeOfYear)}}>
        <h3>Place: {place} {dollaBillz(price)}</h3>
        <p>Price: {price}</p>
        <p>TimeOfYear: {timeOfYear}</p>
    </div>
)

export default Cards