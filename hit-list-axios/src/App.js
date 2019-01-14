import React from 'react';
import HitData from './HitData';
import HitList from './HitList';
import ErrorHandling from './ErrrorHandling';
import Loading from './Loading';

const App = () => {
  return (
    <div>
      <HitData>
        {({ list, errMsg, loading }) => (
          <Loading loading={loading}>
            <ErrorHandling errMsg={errMsg}>
              <HitList asdf={list} />
            </ErrorHandling>
          </Loading>

        )}
      </HitData>
    </div>
  )
}

export default App;
