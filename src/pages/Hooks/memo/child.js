import React, { memo } from 'react'

function child(props) {

    console.log('child', props)
    return (
        <div>
            <button onClick={props.callback}>修改标题</button>
            <h1>{props.name}</h1>
        </div>
    )
}

export default memo(child)
