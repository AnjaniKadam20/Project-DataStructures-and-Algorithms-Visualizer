import React, { useState } from 'react';
import './SearchComponent.css'; // Import CSS file for styling
import Navbar from './navbar';

const LinearSearchVisualization = () => {
  const [array, setArray] = useState([4, 8, 15, 16, 23, 42]);
  const [searchValue, setSearchValue] = useState('');
  const [foundIndex, setFoundIndex] = useState(-1);
  const [currentRound, setCurrentRound] = useState(-1); // State variable to track the current round
  const [elementNotFound, setElementNotFound] = useState(false); // State variable to track if element is not found

  const linearSearch = () => {
    setElementNotFound(false);
    setFoundIndex(-1);
    setCurrentRound(-1);
    
    let found = false;

    // Loop through the array with a delay for visualization
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        // Only continue highlighting if the element has not been found yet
        if (!found) {
          setCurrentRound(i); // Update current round
          if (array[i] === parseInt(searchValue)) {
            setFoundIndex(i);
            found = true;
          }
        }

        // If the loop has reached the last element and no match was found, show not found message
        if (i === array.length - 1 && !found) {
          setElementNotFound(true);
        }
      }, i * 500); // Delay of 500ms for each round
    }
  };

  return (
    <div className="linear-search-visualization">
      <div className="navbar-top">
        <Navbar />
      </div>
      <p className="paragraph">What is Search?</p>
      <p className="next-line-text">Search is the process of finding a specific item or element within a collection of data.The goal of a search algorithm is to efficiently locate the desired item within the data structure, minimizing the number of comparisons or operations required.
      </p>
      <p className="next2-line-text">Linear Search: In a linear search, each element of the list is sequentially checked until the target value is found or the end of the list is reached..</p>
      <div className="array-container">
        {array.map((num, index) => (
          <div
            key={index}
            className={`array-item ${index === foundIndex ? 'found' : index === currentRound ? 'checking' : ''}`}
          >
            {num}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter search value"
      />
      <button onClick={linearSearch}>Search</button>
      {elementNotFound && <div className="not-found-message">Element not found</div>}
      <div>The position of the searched element in the array: {foundIndex !== -1 ? foundIndex + 1 : 0}</div>
    </div>
  );
};

export default LinearSearchVisualization;

