import React, {useState, useEffect} from 'react'
import IntervalClassCounter from './intervalClassCounter'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count +1)
    }

    useEffect(() => {
        const interval = setInterval(tick,1000)

        return () => {
            console.log('Unmounted')
            clearInterval(interval)
        }
    },[count])
    
    return (
        <div>
            Count : {count}
        </div>
    )
}

export default IntervalHookCounter
