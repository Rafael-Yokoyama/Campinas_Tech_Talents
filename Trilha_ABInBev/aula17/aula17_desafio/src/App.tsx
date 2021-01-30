import React, { useEffect, useState } from 'react';
import './App.css';
import { Users, Posts, } from './type/users';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [posts, setPosts] = useState<Posts []>([]);
  const [User, SelectedUser] = useState<Number>(0);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(response => setUsers(response.data))
  }, []);

  useEffect(() => {
    if (User !==0){
      axios.get(`https://jsonplaceholder.typicode.com/users/${User}/posts`)
      .then(response => setPosts(response.data))
    }
  }, [User]);

  return (
    <div className="App">
      <h1>Lista de Users</h1>
      { users !== null &&
      users.map((user: Users) => (
        <ul key={user.id}>
          <li><a onClick={() => SelectedUser(user.id)}>
            {user.name} ({user.id})</a></li>
        </ul>
      ))}

      <h1>Lista de Posts</h1>
      
      { 
      posts !==null &&
      posts.map((post: Posts) => (
        <>
          <ul key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>{post.id}</p>
          </ul>
        </>
      ))}
    </div>
  );
}

export default App;