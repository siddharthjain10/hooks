import React, { useReducer } from 'react'
import ComponentA from './componentA';
import ComponentB from './componentB';
import ComponentC from './componentC';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1
            break
        case 'decrement':
            return state-1
            break
        case 'reset':
            return initialState
        default:
            return state

    }
}


function Context() {
    const [count,dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider
            value={{countState: count, countDispatch: dispatch }}
        >
            <div>
                <h1>{count}</h1>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default Context
