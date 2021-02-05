import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: any) => state.users.name);
  const username = useSelector((state: any) => state.users.username);
  const email = useSelector((state: any) => state.users.email);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => dispatch({ type: 'GET_USER', payload: response.data }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h2>{name}</h2>
      <p>username: {username}  </p>
      <p>email: {email}</p>
    </>
  );
}

export default User;
