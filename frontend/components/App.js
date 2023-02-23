import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Organize Garage",
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: true,
        },
        {
          name: "Bake Cookies",
          id: 1528817084358,
          completed: true,
        },
      ],
    };
  }
  handleAdd = (task) => {
    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>

        <TodoList todos={todos} handleToggle={this.handleToggle} />

        <Form handleAdd={this.handleAdd} />

        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
