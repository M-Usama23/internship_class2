import React, {useState} from 'react';
import './message.css'



export default function Message(){
    
    let [isDay, setDay] = useState(true)
    return(
        <div className={isDay ? 'box' : 'eve' }>
        <h1>This is {isDay? 'Morning' : 'Evening'}</h1>
        <button onClick={()=>{
            setDay(!isDay)
        }}>Change Time</button>
    </div>
    )
}