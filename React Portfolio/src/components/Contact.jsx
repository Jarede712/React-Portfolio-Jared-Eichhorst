import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      '../netlify/functions/sendmail',
      formState
    );
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            onChange={handleChange}
            value={formState.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            onChange={handleChange}
            value={formState.email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            required
            onChange={handleChange}
            value={formState.message}
          />
        </div>
        <button type="submit" className="contact-submit-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
