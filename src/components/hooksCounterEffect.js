import React, {useState,useEffect} from 'react'

function HooksCounterEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating click count')
        document.title = `Click ${count} times`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
            <button onClick = {() => setCount(count+1)}>
                    Click {count} times!!!
                </button>
        </div>
    )
}

export default HooksCounterEffect
