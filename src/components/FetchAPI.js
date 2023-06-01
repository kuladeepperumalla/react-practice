import React, { useEffect } from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function FetchApi() {
  const [users, setUsers] = useState([]);
  const [item, setItems] =  useState([]);

  const data = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setUsers(resData);
      });
  };

  useEffect(() => {
    data();
  }, []);
  console.log(users);

  const render = users.length > 0 && (
  <div>
      {users.map((user) => (
          <Dropdown.Item
          onChange={(e) => alert(e)}
          key={user.id}
          href="#/action-1"
          >
          {user.name}
          </Dropdown.Item>
          ))}
          </div>
  );
  return (
    <div>
      <Dropdown
        onChange={(e) => {
          console.log(e);
        }}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>{render}</Dropdown.Menu>
      </Dropdown>
      <p>{item}</p>
    </div>
  );
}

export default FetchApi;