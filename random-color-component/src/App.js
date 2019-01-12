import React from 'react';
import ColorDetail from './ColorDetail';
import RandomColor from './RandomColor';

const App = () => {
  return (
    <div>
      <RandomColor>
        {({ color }) => (
          <ColorDetail color={color}/>
        )}
      </RandomColor>

    </div>
  )
}

export default App;
