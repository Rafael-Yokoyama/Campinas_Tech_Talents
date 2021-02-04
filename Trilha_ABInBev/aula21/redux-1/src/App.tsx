import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Store} from './types/store'
import Product from './Product'
import Contador from './Contador'
import './App.css';

const inicialState:Store ={
  contador:0
}

function reducer(state = inicialState, action:any){
  switch (action.type){
    case 'ADD':
      return{ 
        contador:state.contador +1 
      }
      case 'REMOVE':
        return{ 
          contador:state.contador> 0 ? state.contador-1 : state.contador
        }
        default:
          return state;
    }
}

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Contador/>
        <Product/> 
      </Provider>
      
    </div>
  );
}

export default App;
