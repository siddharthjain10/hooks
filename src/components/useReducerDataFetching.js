import React, {useReducer, useEffect} from 'react'
import axios from 'axios'


const initialState = {
    loading : true,
    error : '',
    post : {}
}
const reducer = (state, action) => {
    switch(action.type){
        case 'success':
            return {
                loading : false,
                error : '',
                post : action.payload
            }
            break
        case 'error':
            return {
                loading : false,
                error : 'Something went wrong',
                post : {}

            }
            break
        default:
            console.log('DEFAULT')
            return state

    }
}

function UseReducerDataFetching() {

    const [state ,dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            console.log(res)
            dispatch({type:'success', payload: res.data})
        })
        .catch(error => {
            dispatch({type: 'error'})
            console.log(error)
        })
    },[])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default UseReducerDataFetching
