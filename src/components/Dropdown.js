import { DropdownButton } from "react-bootstrap";
import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
function DropdownMenu({data}){
    const [value, setValue] = React.useState("select");
    const handleSelect = (e) => {
        console.log(e);
        setValue(e);
    }

    const renderedData = data.map((post, i) => {
        return(
            <DropdownItem key={i} eventKey={post.name}>{post.name}</DropdownItem>
        )
    })
    return(
        <>
            <DropdownButton
                title={value``}
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                {renderedData}
            </DropdownButton>
            <h4>{value}</h4>
           
        </>
    )
}
export default DropdownMenu;