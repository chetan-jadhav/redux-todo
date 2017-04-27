import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos, getIsFetching } from '../reducers';

class VisibleTodoList extends Component {

  componentDidMount(){
    this.fetchData();
  }

  componentWillUpdate(prevProps){
    if(prevProps.filter !== this.props.filter){
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos, requestTodos } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, isFetching, todos } = this.props;

    if (isFetching && !todos.length) {
      return (
        <p>Loading...</p>
      );
    }

    return(
      <TodoList
        onTodoClick={toggleTodo}
        todos={todos}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return{
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }

}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions,
)(VisibleTodoList));

export default VisibleTodoList;
