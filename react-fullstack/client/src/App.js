import React from 'react';
// import WebSocketDemo from './WebSocketDemo';
import MainView from './MainView';
import AlgorithmData from './dataproviders/AlgorithmData';

const App = () => {
    return (
      <div>
      <AlgorithmData>
      <MainView />
      </AlgorithmData>
      </div>
    )
  }

export default App;