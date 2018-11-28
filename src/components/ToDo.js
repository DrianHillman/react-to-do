import React, { Component } from 'react';

export default class ToDo extends Component {
  render() {
    return (
      <>
        <li>
          <input type='checkbox' checked={this.props.isCompleted} onChange={this.props.toggleComplete} />
          <span>{this.props.description}</span>
          <button style={{ marginLeft: '4px' }} onClick={this.props.deleteTodo}>
            Delete
          </button>
        </li>
      </>
    );
  }
}
