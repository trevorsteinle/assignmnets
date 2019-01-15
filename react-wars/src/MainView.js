import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home';
// import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
// import Nav from './Nav';

function MainView({ characters }) {
    const styles = {
        display: 'block'
    }
    const links = characters.map((character, i) => (
        <Link style ={styles} key={i} to={{pathname: `/characters/${i}`, state: character}}>{character.name}</Link>
    ))


    return (
        
        <div>
            <nav>
                
                
                <Link style ={styles} to='../'>Home</Link>
                {links}
                
                
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/characters/:id"
                    render={({ location: {state}}) => (
                        <CharacterDetail {...state}/>
                    )} />
                {/* <Route  */}
            </Switch>
        </div>
    )
}

export default MainView
