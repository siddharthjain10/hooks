import React, {useReducer} from 'react'


const initialState = {
    FirstCounter : 0,
    SecondCounter : 100
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, FirstCounter : state.FirstCounter + action.value}
            break
        case 'decrement':
            return {...state, FirstCounter : state.FirstCounter - action.value}
            break
        case 'increment2':
            return {...state, SecondCounter : state.SecondCounter + action.value}
            break
        case 'decrement2':
            return {...state, SecondCounter : state.SecondCounter - action.value}
            break
        case 'reset':
            return initialState
        default:
            return state

    }
}

function UseReducerComplexCounter() {

    const [count,dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{count.FirstCounter}</h1>
            <h1>{count.SecondCounter}</h1>
            <button onClick={() => dispatch({type: "increment", value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement", value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: "increment2", value: 1})}>Increment2</button>
            <button onClick={() => dispatch({type: "decrement2", value: 1})}>Decrement2</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>           
        </div>
    )
}

export default UseReducerComplexCounter
