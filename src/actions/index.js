import TodoActionTypes from '../constants/TodoActionTypes';
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    dispatch({
      type: TodoActionTypes.ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });

export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      response: normalize(response, schema.todo)
    })
  });

export const fetchTodos = (filter) => (dispatch, getState) => {
  if(getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: TodoActionTypes.FETCH_TODOS_REQUEST,
    filter,
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        filter,
        response: normalize(response, schema.todos)
      })
    },
    error => {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_FAILURE,
        filter,
        message: error.message || 'Something went wrong!'
      })
    }
  );
}
