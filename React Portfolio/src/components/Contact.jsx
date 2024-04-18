import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      'https://jaredeichhorst-portfolio.netlify.app/.netlify/functions/sendmail',
      formState
    );
    navigate('/');
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
    setTouched({ ...touched, [event.target.id]: true });
  };

  const isFormValid = formState.name && formState.email && formState.message;

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
          {touched.name && !formState.name && <div>Required</div>}
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
          {touched.email && !formState.email && <div>Required</div>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            required
            onChange={handleChange}
            value={formState.message}
          />
          {touched.message && !formState.message && <div>Required</div>}
        </div>
        <button
          type="submit"
          className="contact-submit-button"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
