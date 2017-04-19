import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(
      state,
      ownProps.match.params.filter
    )
})

// Note: we can use shorthand method if arguments to callback prop match the
//       arguments to action dispatch function exactly then we can pass mapping between
//       callback prop function name and action creator function name
//
// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id))
//   }
// })

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo },
)(TodoList));

export default VisibleTodoList;
