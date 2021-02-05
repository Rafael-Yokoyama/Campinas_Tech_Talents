import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStateTodos = {
  list: []
}

function reducerTodos(state = initialStateTodos, action: any) {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        list: action.payload
      }
    default:
      return state
  }
}

const initialStateUsers = {
  name: '',
  username: '',
  email: ''
}

function reducerUsers(state = initialStateUsers, action: any) {
  switch (action.type) {
    case 'GET_USER':
      return {
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
      }
    default:
      return state
  }
}

const createRootReducer = () => combineReducers({
  todos: reducerTodos,
  users: reducerUsers
})

const store = createStore(createRootReducer(), composeWithDevTools());

export { store };