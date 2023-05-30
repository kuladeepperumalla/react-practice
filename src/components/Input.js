import { useState } from "react"
import React from "react"
function Input({userName}){
    const [text, setText] = useState("");
    const [render, setRender] = useState([userName])
    const handleSubmit = (event) => {
        event.preventDefault();
        setRender(text)
        setText("")
    }

 

    return(
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} pattern="[a-zA-Z0-9]+" required />
            <button> create! </button>
            <p> {render}</p>
        </form>
    )
}
export default Input