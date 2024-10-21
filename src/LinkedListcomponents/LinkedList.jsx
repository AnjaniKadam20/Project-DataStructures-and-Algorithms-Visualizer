// LinkedList.js
// LinkedList.js
import React, { Component } from 'react';
import './LinkedList.css'; // Import CSS file for styling
import Navbar from "./navbar";
import Navbar2 from './navbar2';

class LinkedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
      position: 'end',
      insertPosition: ''
    };
  }

  addItem = () => {
    const { inputValue, list, position, insertPosition } = this.state;
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        value: inputValue
      };
      let updatedList = [];
      if (position === 'start') {
        updatedList = [newItem, ...list];
      } else if (position === 'end') {
        updatedList = [...list, newItem];
      } else {
        const index = parseInt(insertPosition);
        if (index >= 0 && index <= list.length) {
          updatedList = [
            ...list.slice(0, index),
            newItem,
            ...list.slice(index)
          ];
        } else {
          // Invalid position, add at the end
          updatedList = [...list, newItem];
        }
      }
      this.setState({
        list: updatedList,
        inputValue: ''
      });
    }
  };
  
  deleteItem = (id) => {
    this.setState(prevState => ({
      list: prevState.list.filter(item => item.id !== id)
    }));
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handlePositionChange = (e) => {
    this.setState({ position: e.target.value });
  };

  handleInsertPositionChange = (e) => {
    this.setState({ insertPosition: e.target.value });
  };

  render() {
    const { list, inputValue, position, insertPosition } = this.state;
    

    return (
      <div className="linkedlist-visualization">
        <Navbar/>
      <p className="paragraph3">What is Linked List ?</p>
      <p className="next-line-text7">A linked list is a linear data structure consisting of a sequence of elements called nodes. Each node contains two parts: the data and a reference (or pointer) to the next node in the sequence.</p>
      <p className="next-line-text8">Adding New Node:  Allocate memory for a new node and set its value to the element you want to add. Adjust the pointers of the existing nodes to accommodate the new node.</p>
      <p className="next-line-text9">Deleteing a Node:  Deleting an element involves removing a specific node from the sequence by updating the pointers of the adjacent nodes so they no longer point to the node being deleted.</p>
        <div className="controls">
          <input
            className="input-box"
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Enter value"
          />
          <select
            className="position-select"
            value={position}
            onChange={this.handlePositionChange}
          >
            <option value="end">Add at End</option>
            <option value="start">Add at Start</option>
            <option value="middle">Add in Middle</option>
          </select>
          {position === 'middle' &&
            <input
              className="insert-position-input"
              type="number"
              value={insertPosition}
              onChange={this.handleInsertPositionChange}
              placeholder="Enter position"
            />
          }
          <button className="button" onClick={this.addItem}>Add</button>
        </div>
        <div className="linkedlist-container">
          {list.map((item, index) => (
            <div key={item.id} className="linkedlist-item">
              <div className="linkedlist-box">
                <div className="linkedlist-value">{item.value}</div>
                {index < list.length - 1 && <div className="arrow">&#8594;</div>}
                <button className="delete-button" onClick={() => this.deleteItem(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LinkedList;


