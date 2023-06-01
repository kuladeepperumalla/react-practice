import React, { useState } from "react"
import UserName from "./components/ClassComponent"
import Input from './components/Input';
import FetchApi from "./components/FetchAPI";
function App(){
    const [updateText, setUpdateText] = useState([]);

    const addInput = (newText) => {
        const updatedInput = [...updateText, newText];
        setUpdateText(updatedInput);
        console.log("hi");
    }

    const renderInputs =  updateText.map((text) => {
    return(
    <li><p>{text}</p></li>
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