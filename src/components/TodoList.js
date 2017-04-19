import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({todos, onTodoClick}) => (
  <section className='todo-list'>
    <ul>
      { todos.map( todo =>
        <TodoItem
          key={todo.id}
          onClick={ () => onTodoClick(todo.id) }
          {...todo}
        />
      )}
    </ul>
  </section>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
