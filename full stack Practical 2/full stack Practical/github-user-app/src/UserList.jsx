import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1>GitHub Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
