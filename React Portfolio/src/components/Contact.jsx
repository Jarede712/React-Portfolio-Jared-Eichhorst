const Contact = () => {
  return (
    <section className="contact-container">
      <h2>Contact</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit" className="contact-submit-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
