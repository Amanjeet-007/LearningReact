import { useState } from "react"

export default function Counter(){
    return(
        <>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        </>
    )
}

function Button(){
    const [num,setNum]= useState(0)
    return(
        <button onClick={()=>setNum(num+1)}>{num}</button>
    )
}

// export default function Counter(){
//     const [num,setNum] = useState(0)

//     function clickHandler(){
//         setNum(num+1)
//     }
//     return(

//         <>
//         <h1>{num}</h1>
//         <Button clickHandler={clickHandler} />
//         <Button clickHandler={clickHandler} />
//         </>
//     )
// }
// function Button({clickHandler}){
//     return(
//         <>
//         <button onClick={clickHandler}>Add +1</button>
//         </>
//     )
// }