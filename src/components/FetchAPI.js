import React, { useEffect } from "react";
import { useState } from "react";


function FetchApi(){
    const [users, setUsers] = useState([]);

    const data = async () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(res => {
            return res.json();
        }).then(resData => {
            setUsers(resData)
        });
    }

    useEffect(() => {
        data()
        console.log(users)
    }, []);

    return (
      <div>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default FetchApi;