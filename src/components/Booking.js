import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Booking() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Define and initialize inputValue

  useEffect(() => {
    axios.post('https://app.web3trainingteam.com/w3gc/sponsor/')
      .then(response => {
        setData(response.data);
        console.log(response.data); // Log the response data here
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Sending the inputValue to the backend here using fetch
    fetch('https://app.web3trainingteam.com/w3gc/sponsor', { // Use https instead of http
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log('Response from the backend:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
  <section className="row">
  <div className="grid">
  <section className="col-2-3">
    <h2>Get a Conference ticket</h2>
    <h5>tickets are free</h5>
    <p>
      Appy for your W3GC tickets using the form to the right. Multiple
      passes may be purchased within the same order, so feel free to bring a
      friend or two along. Once your order is finished we’ll follow up and
      provide a receipt for your purchase. See you soon!
    </p>
    <h4>Why Attend?</h4>
    <ul className="why-attend">
      <li>Unrivaled Speaker Lineup</li>
      <li>Elite Audience</li>
      <li>Exclusively Curated Networking</li>
      <li>Empower the Future of the Industry</li>
      <li>Strategic Matchmaking at its Finest</li>
    </ul>
  </section>
  {/*
   */}
  <form className="col-1-3" action="#" method="post">
    <fieldset className="register-group">
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Full name"
          required=""
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required=""
        />
      </label>
      <label>
        Number of Passes
        <select name="quantity" required="">
          <option value={1} selected="">
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </label>
      <label>
        Comments
        <textarea name="comments" defaultValue={""} />
      </label>
    </fieldset>
    <input
      className="btn btn-default"
      type="submit"
      name="submit"
      defaultValue="Get"
    />
  </form>
</div>
</section>


<footer className="primary-footer group container">
<small>© 2023 Web3 Global Conference powered by Bathpage Consulting</small>
</footer>
    </>
  );
}

export default Booking;
