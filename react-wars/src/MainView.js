import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home';
import CharacterList from './CharacterList';
// import Nav from './Nav';

function MainView({ characters }) {
    const links = characters.map((character, i) => (
        <Link key={i} to={`/characters/${i}`}>{character.name}</Link>
    ))
    return (
        <div>
            <nav>
                <Link to='./'>Home</Link>
                {links}
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/characters/:index"
                    render={({ match: { params: { index } } }) => (
                        <CharacterList characters={characters} />
                    )} />
                {/* <Route  */}
            </Switch>
        </div>
    )
}

export default MainView
