import React, {useState} from 'react'


export default function Counter() {
    
    let [ count, setCount ] = useState(0)

    return(
        <div className="counter">
            <p>Counter value is : {count}</p>
            <br />
            <br />
            <button onClick={()=>{
                setCount(count+1)
            }}>
                Add One To Counter
            </button>
            <br />
            <br />
            <button onClick={
                ()=>{
                    setCount(0)
                }
            }>
                Reset Counter
            </button>
        </div>
    )

}