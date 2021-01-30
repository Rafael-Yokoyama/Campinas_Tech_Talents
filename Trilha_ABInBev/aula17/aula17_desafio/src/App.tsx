import React, { useEffect, useState } from 'react';
import './App.css';
import { Users, Posts } from './type/users';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState<any>([]);
  const [User, SelectedUser] = useState<Number>();


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(response => setUsers(response.data))
  }, []);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${User}/posts`)
      .then(response => setPosts(response.data))
  }, [User]);

  return (
    <div className="App">
      <h1>Lista de Users</h1>
      { users.map((user: Users) => (
        <ul key={user.id}>
          <li><a onClick={() => SelectedUser(user.id)}>{user.name} ({user.id})</a></li>
        </ul>
      ))}

      <h1>Lista de Posts</h1>
      
      { posts.map((post: Posts) => (
        <>
          <ul key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </ul>
        </>
      ))}
    </div>
  );
}

export default App;