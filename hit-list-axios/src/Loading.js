import React from 'react'

function Loading({ loading, children }) {
    return (
        loading ?
        <p>{loading}</p> :
        children
    )
}

export default Loading
