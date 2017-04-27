import { v4 } from 'node-uuid';

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'Learn Redux',
      completed: false
    },
    {
      id: v4(),
      text: 'Learn React',
      completed: false
    },
    {
      id: v4(),
      text: 'Learn Javascript',
      completed: true
    },
    {
      id: v4(),
      text: 'Learn Ruby on Rails',
      completed: true
    }
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {

    // if (Math.random() > 0.5) {
    //   throw new Error("Boom!")
    // }

    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter ${filter}`)
    }
  });


export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text: text,
      completed: false
    };

    fakeDatabase.todos.push(todo);
    return todo;
  });


export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find( todo => todo.id === id );
    todo.completed = !todo.completed;
    return todo;
  });
