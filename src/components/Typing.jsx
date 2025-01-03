import { useState } from "react"

export default function Typing({ para }) {
    const [input, setInput] = useState(' ')

    function inputhand(el) {
        setInput(el.target.value);
        console.log(el.target.value)
        }
    function check(){
        if(input==para){
            alert("Nice");
        }else{alert("Try again")}
    }
    return (<>
        <p>{para}</p>
        <input type="text" onChange={inputhand} value={input} />
        <button onClick={check}>submit</button>
    </>)
}