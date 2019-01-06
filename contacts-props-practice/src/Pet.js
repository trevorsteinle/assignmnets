import React from 'react';

const Pet = (props) => {
    return (
        <div>
            <ul>Name: {props.name}</ul>
            <ul>Breed: {props.breed}</ul>
        </div>
    )
}

export default Pet;