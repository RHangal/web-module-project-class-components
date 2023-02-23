import React from "react";

export default class Todo extends React.Component {
  handleClick = () => {
    const { handleToggle, todo } = this.props;
    handleToggle(todo.id);
  };
  render() {
    const { todo } = this.props;
    return (
      <li onClick={this.handleClick}>
        {todo.name} {todo.completed ? <span>- Completed</span> : <span></span>}
      </li>
    );
  }
}
