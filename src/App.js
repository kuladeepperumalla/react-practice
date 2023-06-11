import React, { useState } from "react"
import UserName from "./components/ClassComponent"
import Input from './components/Input';
import FetchApi from "./components/FetchApi";
function App(){
    const [updateText, setUpdateText] = useState([]);

    const addInput = (newText) => {
        const updatedInput = [...updateText, newText];
        setUpdateText(updatedInput);
        console.log("hi");
    }

    const renderInputs =  updateText.map((text, i) => {
    return(
    <li key={i}><p>{text}</p></li>
    )
    })
    return (
      <>
        <UserName onSubmit={addInput} />
        <Input userName="kuldeep" onSubmit={addInput}/>
        <ul>{renderInputs}</ul>
        <FetchApi />
      </>
    );
}
export default App