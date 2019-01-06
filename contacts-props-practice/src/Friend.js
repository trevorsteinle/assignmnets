import React from 'react';
import Pet from './Pet'

const Friend = (props) => {
    const fromPets = props.pets.map((pet, i) => {
        return <Pet key={i}
            name={pet.name}
            breed={pet.breed} />
    })
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
            <h4>Pets: </h4>
            {fromPets}
        </div>
    )
};

export default Friend;