import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    const { todos, handleToggle } = this.props;
    return (
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} handleToggle={handleToggle} key={todo.id} />;
        })}
      </ul>
    );
  }
}
