import React from 'react';


const Boxes = (props) => (
    <div style={{backgroundColor: props.color}}> 
        <h3>Title: {props.title}</h3>
        <p>Subtitle: {props.subtitle}</p>
        <p>Information: {props.info}</p>
        <p>Background Color: {props.color}</p>
    </div>
)

export default Boxes