import React from 'react';
import { Route } from 'react-router-dom';

import { withAlgorithmContext } from './dataproviders/AlgorithmData';
import AlgoDetail from './AlgoDetail';
import AlgoLinks from './links/AlgoLinks';
import TableDetail from './TableDetail';
import TableData from './dataproviders/TableData';
// import AlgorithmData from './dataproviders/AlgorithmData';

// function MainView({algorithms}) {
function MainView({ algorithms }) {
    return (
        <div>
            <TableDetail />
            <button>Algorithm</button>
            <AlgoLinks />
            <Route path='/algorithm/:id' component={(routeProps) => {
                const { id } = routeProps.match.params;
                const findAlgorithm = algorithms.find(algo => {
                    return algo._id === id;
                })
                return (
                    <AlgoDetail {...findAlgorithm} />
                )
            }} />
            {/* <AlgoDetail algorithms={algorithms}/> */}
        </div>
    )
}

export default withAlgorithmContext(MainView)
// export default MainView