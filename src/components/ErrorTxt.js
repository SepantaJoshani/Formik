import React from 'react'

function ErrorComp(props) {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default ErrorComp
