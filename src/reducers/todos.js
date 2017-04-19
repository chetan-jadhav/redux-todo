import TodoActionTypes from '../constants/TodoActionTypes';
import todo from './todo';

const todos = (state = [], action) => {
  switch(action.type){
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];


    case TodoActionTypes.TOGGLE_TODO:
      return state.map(
        t => todo(t, action)
      );


    default:
      return state;
  }
}

export default todos;


export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;


    case 'active':
      return state.filter(t => !t.completed)

    case 'completed':
      return state.filter(t => t.completed)


    default:
      return state
  }
}
