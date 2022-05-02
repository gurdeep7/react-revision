import { useState } from "react"
import { Home } from "./Home"

export const Index = ()=>{
    const [count, setCount] = useState(0)

    const increment =()=> {
        setCount(count+1)
        console.log(count, "increment")
    }
    return(
        <div>
            <Home props={count}/>
            <button onClick={increment} > Increment</button>
        </div>
    )


}