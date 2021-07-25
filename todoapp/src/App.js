import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ],
  }

  deleteTodo = (id) => {
    // console.log(id);

    // * For every todo value: do as like below
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({
      // todos: todos,
      todos    // * karena nama variabel todos pada local function, sama dengan nama di state
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    // ? mapping state todos menjadi variable array bernama todo setiap looping baris nya
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/> 
      </div>
    )
  }
}
