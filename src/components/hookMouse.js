import React,{useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] =  useState(0)
    const [y, setY] =  useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // The below function will be executed after the component has been unmounted
        return () => {
            console.log('Compnent will unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    

    return (
        <div>
            Hooks X - {x}
            Hooks Y - {y}
        </div>
    )
}

export default HookMouse
