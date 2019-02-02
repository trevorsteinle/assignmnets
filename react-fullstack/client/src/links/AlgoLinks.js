import React from 'react'
import { Link } from 'react-router-dom'
import { withAlgorithmContext } from '../dataproviders/AlgorithmData'

function AlgoLinks({ algorithms }) {
    const links = algorithms.map(algorithm => (
        <Link
            key={algorithm._id}
            to={{
                pathname: `/algorithm/${algorithm._id}`,
            state: { algorithm }
            }}>
            {algorithm.name}
            </Link>
    ))
    return (
        <div>
            {links}
        </div>
    )
}

export default withAlgorithmContext(AlgoLinks)
