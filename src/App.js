import React, { Component } from 'react';
// import './App.css';
import ToDo from './components/ToDo.js';
import './assets/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newTodoDescription) {
      const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
      this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
    }
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value });
  }

  deleteTodo(index) {
    this.setState({ todos: this.state.todos.filter(el => el !== this.state.todos[index]) });
  }

  render() {
    return (
      <div className='App'>
        <div className='container '>
          <div className='row'>
            <div className='col align-self-center'>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className='input-group mb-4 mt-5'>
                  <input
                    type='text'
                    value={this.state.newTodoDescription}
                    onChange={e => this.handleChange(e)}
                    className='form-control'
                    placeholder='Add a to-do'
                  />
                  <div className='input-group-append'>
                    <button type='submit' className='btn btn-outline-primary'>
                      Submit <i class='fa fa-remove mr-1' />
                    </button>
                  </div>
                </div>
              </form>
              <div className='custom-controls-stacked'>
                {this.state.todos.map((todo, index) => (
                  <ToDo
                    key={index}
                    description={todo.description}
                    isCompleted={todo.isCompleted}
                    toggleComplete={() => this.toggleComplete(index)}
                    deleteTodo={() => this.deleteTodo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
