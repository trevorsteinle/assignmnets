import React from 'react'

function ErrorHandling({ errMsg, children }) {
    return (
        errMsg ?
        <p>{errMsg}</p> :
        children
    )
}

export default ErrorHandling
