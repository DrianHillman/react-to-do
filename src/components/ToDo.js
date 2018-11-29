import React, { Component } from 'react';
import '../assets/shards.min.css';

export default class ToDo extends Component {
  render() {
    return (
      <>
        <div>
          <input
            type='checkbox'
            checked={this.props.isCompleted}
            onChange={this.props.toggleComplete}
            className='mr-1'
          />
          <label>{this.props.description}</label>
          <button onClick={this.props.deleteTodo} className='btn btn-outline-danger btn-pill btn-m ml-5'>
            &times;
          </button>
        </div>
      </>
    );
  }
}
