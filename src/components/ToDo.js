import React, { Component } from 'react';

export default class ToDo extends Component {
  render() {
    return (
      <>
        <li>
          <input type='checkbox' checked={this.props.isCompleted} />
          <span>{this.props.description}</span>
        </li>
      </>
    );
  }
}
