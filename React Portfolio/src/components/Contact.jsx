import { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formState;
    const formattedMessage = `Name: ${name} - Email: ${email} - Message: ${message}`;
    const response = await axios.post(
      'https://jaredeichhorst-portfolio.netlify.app/.netlify/functions/sendmail',
      { message: formattedMessage }
    );
    window.location.href = '/';
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
    setTouched({ ...touched, [event.target.id]: true });
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const isFormValid = formState.name && formState.email && formState.message;

  return (
    <section className="contact-container">
      <div className="content-container">
        <div className="header-container"></div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2 className="contact-title">Contact Me</h2>
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                required
                onChange={handleChange}
                value={formState.name}
                placeholder="Name"
                className="contact-name-box"
              />
              {!formState.name && touched.name && <div>Required</div>}
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                required
                onChange={handleChange}
                value={formState.email}
                placeholder="Email"
                className="contact-email-box"
              />
              {!formState.email && touched.email && <div>Required</div>}
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea
                id="message"
                required
                onChange={handleChange}
                value={formState.message}
                placeholder="Message"
                className="contact-message-box"
              />
              {!formState.message && touched.message && <div>Required</div>}
            </div>
            <button
              type="submit"
              className={
                isFormValid
                  ? 'contact-submit-button'
                  : 'contact-submit-button-disabled'
              }
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
