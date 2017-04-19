import { combineReducers } from 'redux';
import TodoActionTypes from '../constants/TodoActionTypes';
import todo from './todo';

const byId = (state = {}, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
    case TodoActionTypes.TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state, action.id]
    default:
      return state;
  }
}

const todos = combineReducers({
  byId,
  allIds,
});

export default todos;

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);


export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);

  switch (filter) {
    case 'all':
      return allTodos;
    case 'active':
      return allTodos.filter(t => !t.completed);
    case 'completed':
      return allTodos.filter(t => t.completed);
    default:
      return allTodos;
  }
}
