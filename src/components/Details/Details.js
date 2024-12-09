import React, { useState } from 'react';
import './Details.css';

function Details() {
  const [inputValue, setInputValue] = useState(''); // Handle the input value
  const [selectedHelpOption, setSelectedHelpOption] = useState(''); // Track the selected radio button

  const handleRadioChange = (event) => {
    setSelectedHelpOption(event.target.value); // Set the selected help option
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <h1>
          <span className="make-an">MAKE AN</span>
          <span className="impact">IMPACT</span>
        </h1>
        <form>
          <label>Name</label>
          <input type="text" name="name" />
          
          <label>Email</label>
          <input type="email" name="email" />
          
          <label>Country</label>
          <input type="text" name="country" />
        </form>
      </div>
      <div className="form-right">
        <p>
          I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double-click me to add
          your own content and make changes to the font.
        </p>
        <div className="help-options">
          <h3>How can you help?</h3>
          <label>
            <input
              type="radio"
              name="help"
              value="one-time"
              checked={selectedHelpOption === 'one-time'}
              onChange={handleRadioChange}
            />
            One-time volunteer
          </label>
          <label>
            <input
              type="radio"
              name="help"
              value="volunteer"
              checked={selectedHelpOption === 'volunteer'}
              onChange={handleRadioChange}
            />
            Join a volunteer program
          </label>
          <label>
            <input
              type="radio"
              name="help"
              value="host"
              checked={selectedHelpOption === 'host'}
              onChange={handleRadioChange}
            />
            Host an event
          </label>

          {/* "Tell us" section - Always visible */}
          <div className="additional-content">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tell us which project you're interested in"
              autoFocus
              className="invisible-input"
            />
            <hr className="divider-line" />
            <button className="submit-button">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;