import React from 'react';
// import WebSocketDemo from './WebSocketDemo';
import MainView from './MainView';
import ProfileData from './dataproviders/ProfileData';

const App = () => {
    return (
      <div>
      <ProfileData>
      <MainView />
      </ProfileData>
      </div>
    )
  }

export default App;