import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Todos from './Components/Todos';
import User  from './Components/User';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <User />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;