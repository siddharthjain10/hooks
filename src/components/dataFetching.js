import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id,setId]= useState(1)
    const [buttonId, setButtonId] = useState(1)

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[buttonId])

    const handleClick = () => {
        setButtonId(id)
    }
    const changeHandler = (e) => {
        setId(e.target.value)
    }

    return (
        <div>
            <input type='text' value = {id} onChange={changeHandler} />
            <button type="button" onClick={handleClick}>Click</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
