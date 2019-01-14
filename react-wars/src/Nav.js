import React from 'react'
import {Link} from 'react-router-dom'

function Nav({characters}) {
    const links = characters.map((character, i) =>(
        <Link key={i} to={`/characters/${i}`}>{character.name}</Link>
    ))
    return (
        <div>
            <nav characters={characters}>
                <Link to='./'>Home</Link>
                {links}
            </nav>
        </div>
    )
}

export default Nav