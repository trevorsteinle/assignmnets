import React from 'react'
import CharacterDetail from './CharacterDetail';

function CharacterList({ characters }) {
    const charComponents = characters.map((char, i) => (
        <CharacterDetail key={i}{...char} />
    ))
    return (
        <div>
            {charComponents}
        </div>
    )
}

export default CharacterList
