import React, { useEffect } from "react";
import DropdownMenu from "./Dropdown";
function FetchApi() {
    const [value, setValue] = React.useState([]);

    const fetchApiData = async () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((res) => {return res.json()}).then(res => setValue(res))
    }

    useEffect(() => {
        fetchApiData()
    }, []);


    console.log(value)
    return (
        <>
        <DropdownMenu data={value} />
        </>
    )
}
export default FetchApi;