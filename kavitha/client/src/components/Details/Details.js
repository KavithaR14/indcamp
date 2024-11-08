import React from 'react';
import './Details.css';

function Details() {
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
          It’s easy. Just click “Edit Text” or double click me to add
          your own content and make changes to the font.
        </p>
        <div className="help-options">
          <h3>How can you help?</h3>
          <label>
            <input type="radio" name="help" value="one-time" />
            One-time volunteer
          </label>
          <label>
            <input type="radio" name="help" value="volunteer" />
            Join a volunteer program
          </label>
          <label>
            <input type="radio" name="help" value="host" />
            Host an event
          </label>
           {/* New Section Below */}
         <div className="additional-content">
            <p>Tell us which project you're interested in</p>
            <hr className="divider-line" />
            <button className="submit-button">SUBMIT</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Details;