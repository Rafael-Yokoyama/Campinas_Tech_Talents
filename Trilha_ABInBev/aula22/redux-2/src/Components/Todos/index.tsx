import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const dispatch = useDispatch();

  const ToDo = useSelector((state: any) => state.todos.list);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => dispatch({ type: 'GET_TODOS', payload: response.data }))
  }, [])

  return (
    <>
      <h3> List</h3>
      {  ToDo?.map((i: any) => (
        <li key={i.id}>
          {i.title} 
          ({i.id})</li>
      ))}

    </>
  );
}
export default Todos;