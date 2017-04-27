import TodoActionTypes from '../constants/TodoActionTypes';
import { v4 } from 'node-uuid';
import * as api from '../api';

export const addTodo = (text) => ({
  type: TodoActionTypes.ADD_TODO,
  id: v4(),
  text
});

export const toggleTodo = (id) => ({
  type: TodoActionTypes.TOGGLE_TODO,
  id
});

const receiveTodos = (filter, response) => ({
  type: TodoActionTypes.RECEIVE_TODOS,
  filter,
  response
});

export const requestTodos = (filter) => ({
  type: TodoActionTypes.REQUEST_TODOS,
  filter,
})

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );
