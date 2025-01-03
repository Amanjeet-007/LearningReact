import { useEffect, useState } from "react"
export default function Color(){
    const [color,setColor] = useState("")

    function handleInput(el){
       setColor(el.target.value)
    }


    return(
        <>
    <label htmlFor="text" >Enter Your Color</label>
    <input type="text" onChange={handleInput}/>
    <div className="box" style={{backgroundColor:`${color}`}}></div>
        </>
    )
}