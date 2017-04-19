import TodoActionTypes from '../constants/TodoActionTypes';
import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
  type: TodoActionTypes.ADD_TODO,
  id: v4(),
  text
});

export const toggleTodo = (id) => ({
  type: TodoActionTypes.TOGGLE_TODO,
  id
});

export const receiveTodos = (filter, response) => ({
  type: TodoActionTypes.RECEIVE_TODOS,
  filter,
  response
})
