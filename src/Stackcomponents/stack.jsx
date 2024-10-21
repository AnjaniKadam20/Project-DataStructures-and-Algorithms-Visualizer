import React, { Component } from 'react';
import Navbar from "./navbar";
import './Stack.css'; // Import CSS file for styling
import './styles.css';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [],
      inputValue: ''
    };
  }

  pushItem = () => {
    const { inputValue, stack } = this.state;
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        value: inputValue
      };
      this.setState({
        stack: [newItem, ...stack],
        inputValue: ''
      });
    }
  };

  popItem = () => {
    this.setState(prevState => ({
      stack: prevState.stack.slice(1)
    }));
  };

  render() {
    const { stack, inputValue } = this.state;

    return (
      <div className="stack-visualization">
        <p className="paragraph1">What is Stack?</p>
        <p className="next-line-text1">
          A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
          When a new element is added, it gets placed on top of the existing elements, and when an element is removed,
          it is always the topmost element that gets removed.
        </p>
        <p className="next-line-text2">Push: Adds an element to the top of the stack.</p>
        <p className="next-line-text3">Pop: Removes and returns the top element from the stack.</p>
        <Navbar />

        <div className="controls">
          <input
            className="input-box" // Apply CSS class to input box
            type="text"
            value={inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            placeholder="Enter value"
          />
          <button
            className="button" // Apply CSS class to push button
            onClick={this.pushItem}
          >
            Push
          </button>
          <button
            className="button" // Apply CSS class to pop button
            onClick={this.popItem}
          >
            Pop
          </button>
        </div>

        <div className="stack-container">
          {stack.map(item => (
            <div key={item.id} className="stack-box transition">
              {item.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Stack;
