import React, {useState, useCallback} from 'react'
import Title from './title'
import Button from './button'
import Count from './count'

function ParentComponent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary+1000)
    },[salary])

    return (
        <div>
            <Title />
            <Count text='Age' value={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' value={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>

    )
}

export default ParentComponent
