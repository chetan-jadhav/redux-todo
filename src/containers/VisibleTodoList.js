import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import DataError from '../components/DataError';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';

class VisibleTodoList extends Component {

  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(nextProps){
    if(nextProps.filter !== this.props.filter){
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, isFetching, errorMessage, todos } = this.props;

    if (isFetching && !todos.length) {
      return (
        <p>Loading...</p>
      );
    }

    if(errorMessage && !todos.length) {
      return (
        <DataError
          message={errorMessage}
          onRetry={ () => this.fetchData()}
        />
      )
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
    errorMessage: getErrorMessage(state, filter),
    filter
  }

}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions,
)(VisibleTodoList));

export default VisibleTodoList;
