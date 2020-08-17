import React from 'react'

function Count({text,value}) {
    console.log(`Count Rendered ${text}`)
    return (
        <div>
            {value}
        </div>
    )
}

export default React.memo(Count)
