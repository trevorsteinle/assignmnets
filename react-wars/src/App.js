import React from 'react';
import Header from './Header';
import MainView from './MainView';
import Footer from './Footer';
import CharactersData from './CharactersData';
import Loading from './Loading';
import ErrorHandling from './ErrorHandling';

const App = () => {
  return (
    <div>
      <Header />
      <CharactersData>
        {({ characters, loading, errMsg }) => (
          <Loading loading={loading}>
            <ErrorHandling errMsg={errMsg}>
              <MainView characters={characters} />
            </ErrorHandling>
          </Loading>
        )}
      </CharactersData>
      <Footer />
    </div>
  )
}

export default App;
