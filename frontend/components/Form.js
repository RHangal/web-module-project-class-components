import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleSubmit = (evt) => {
    const { handleAdd } = this.props;
    evt.preventDefault();
    handleAdd(this.state.input);
  };
  handleChange = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value,
    });
  };
  render() {
    return (
      <form>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
