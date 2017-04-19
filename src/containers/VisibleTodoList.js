import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

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
    const { filter, receiveTodos } = this.props;
    fetchTodos(filter).then(todos =>
      receiveTodos(filter, todos)
    )
  }

  render() {
    const { toggleTodo, ...rest } = this.props;
    return(
      <TodoList
        onTodoClick={toggleTodo}
        {...rest}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return{
    todos: getVisibleTodos(state,filter),
    filter
  }

}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions,
)(VisibleTodoList));

export default VisibleTodoList;
