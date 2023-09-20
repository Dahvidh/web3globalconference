import axios from 'axios';
import React, { useEffect } from 'react';

function Speaker() {
  useEffect(() => {
    axios.get('https://app.web3trainingteam.com/w3gc/speaker/')
      .then(response => console.log(response.data))
      .catch(error => console.error('ERROR', error));
  }, []);

  return (
    <>
      <div className="speaker-form-header">
        <h1>W3GC Speaker's Application</h1>
        <p>
          <em>
            Want to be a Speaker for our global conference? Fill out this form.
          </em>
        </p>
      </div>

      <form action="/submit" method="POST" className="speaker-form">
        <div className="form-row">
          <label htmlFor="full-name">Name</label>
          <input id="full-name" name="full-name" type="text" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="joe@example.com"
          />
        </div>
        <div className="form-row">
          <label htmlFor="abstract">Topic</label>
          <textarea id="abstract" name="abstract" />
          <div className="instructions">
            Describe your talk in 500 words or less.
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Speaker;
