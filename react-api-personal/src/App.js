import React from 'react';
import Header from './Header';
import MainView from './MainView';
import Footer from './Footer';
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';
import DataProvider from './DataProvider';
// import AllMissionsData from './AllMissionsData';



const App = () => {
  return (
    <div>
      <Header />
      {/* <AllMissionsData>
        {({ allMissionDetails }) => (

          )}
      </AllMissionsData> */}

      <DataProvider >
        {({ details, loading, errMsg}) => (
          <Loading loading={loading}>
            <ErrorHandler errMsg={errMsg}>
              <MainView details={details} />
            </ErrorHandler>
          </Loading>
        )}
      </DataProvider>
      <Footer />
    </div>
  )
}

export default App;
