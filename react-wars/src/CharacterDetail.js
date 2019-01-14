import React from 'react'

function CharacterDetail({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) {
    return (
        <ul>
            <h4>{name}</h4>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Skin color: {skin_color}</p>
            <p>Eye color: {eye_color}</p>
            <p>Born: {birth_year}</p>
            <p>Gender: {gender}</p>
        </ul>
    )
}

export default CharacterDetail
