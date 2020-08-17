import React from 'react'

function Title() {
    console.log('Title Rendered')
    return (
        <div>
            Call Back Function
        </div>
    )
}

export default React.memo(Title)
