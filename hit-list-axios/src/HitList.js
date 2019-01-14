import React from 'react'
import HitDetail from './HitDetail';

function HitList({ asdf }) {
    const listComponents = asdf.map((name, i) => (
        <HitDetail key={i}{...name} />
    ))
    return (
        <div>
            {listComponents}
        </div>
    )
}

export default HitList