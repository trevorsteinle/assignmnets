import React from 'react';
import DataProvider from './DataProvider';
import Header from './Header';
import AddBountyForm from './AddBountyForm';
import Loading from './Loading';
import MainView from './MainView';

import { withBountyContext } from './DataProvider'
import ErrorHandling from './ErrorHandling';

const App = ({ loading, errMsg }) => {
  return (
    <div>
      <Header />
      <AddBountyForm />
      <Loading loading={loading}>
        <ErrorHandling errMsg={errMsg}>
          <MainView />
        </ErrorHandling>
      </Loading>
      <DataProvider />
    </div>
  )
}

export default withBountyContext(App);
