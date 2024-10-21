import React, { Component } from 'react';
import './Queue.css'; // Import CSS file for styling
import Navbar from "./navbar";



class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      inputValue: ''
    };
  }

  enqueueItem = () => {
    const { inputValue, queue } = this.state;
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        value: inputValue
      };
      this.setState({
        queue: [...queue, newItem],
        inputValue: ''
      });
    }
  };

  dequeueItem = () => {
    this.setState(prevState => ({
      queue: prevState.queue.slice(1)
    }));
  };

  render() {
    const { queue, inputValue } = this.state;

    return (
      <div className="queue-visualization">
      <p className="paragraph2">What is Queue ?</p>
      <p className="next-line-text4">A Queue is a linear data structure in computer science that follows the First In, First Out (FIFO) principle.
      In a queue, elements are added at one end (rear or tail) and removed from the other end (front or head). This makes a queue ideal for situations where elements need to be processed in the order they arrive.</p>
      <p className="next-line-text5">Enqueue: Adding an element to the rear of the queue.</p>
      <p className="next-line-text6">Dequeue: Removing an element from the front of the queue.</p>
        <Navbar/> 
        <div className="controls">
          <input
            className="input-box" // Apply CSS class to input box
            type="text"
            value={inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            placeholder="Enter value"
          />
          <button
            className="button" // Apply CSS class to enqueue button
            onClick={this.enqueueItem}
          >
            Enqueue
          </button>
          <button
            className="button" // Apply CSS class to dequeue button
            onClick={this.dequeueItem}
          >
            Dequeue
          </button>
        </div>
        <div className="queue-container">
          {queue.map(item => (
            <div key={item.id} className="queue-box transition">{item.value}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Queue;