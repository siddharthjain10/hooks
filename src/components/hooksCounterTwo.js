import React, {useState} from 'react'

function HooksCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={(prevCount) => setCount(prevCount + 1)}>Increment</button>
            <button onClick={(prevCount) => setCount(prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default HooksCounterTwo
