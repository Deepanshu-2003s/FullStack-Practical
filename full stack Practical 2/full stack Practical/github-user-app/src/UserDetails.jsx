import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { login } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [login]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{user.name || user.login}</h2>
      <p><strong>Location:</strong> {user.location || "N/A"}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
      <br />
      <Link to="/" className="back-link">← Back to user list</Link>
    </div>
  );
}

export default UserDetails;
