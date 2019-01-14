import React from 'react';
// import './App.css';
import Header from './Header';
import MainView from './MainView';
// import Nav from './Nav';
import Footer from './Footer';
import CharactersData from './CharactersData';

const App = () => {
  return (
    <div>
      <Header />
      <CharactersData>
        {({ characters }) => (
          <div>
            {/* <Nav characters={characters} /> */}
            <MainView characters={characters} />
          </div>
        )}
      </CharactersData>
      <Footer />
    </div>
  )
}

export default App;
