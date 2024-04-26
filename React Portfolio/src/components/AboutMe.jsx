import profilePicture from '../assets/profilepicture.png';

const AboutMe = () => {
  return (
    <section>
      <div className="profile-picture-container">
        <img
          src={profilePicture}
          alt="Developer Avatar"
          className="profile-picture"
        />
        <p className="about-me-text">
          <strong>Hi, my name is Jared Eichhorst</strong>
          <br />I was born and raised in San Diego and have recently found an
          interest in web development and computer science. Coding has always
          been something I've been interested in but never knew where to start.
          After much research and trying to figure things out on my own, I
          finally decided to sign up for a coding bootcamp through UCSD extended
          studies. Through the course of the bootcamp I have developed a real
          passion for this field. I enjoy solving probelms as a developer and
          I'm always looking for ways to grow and learn from others in this
          field. This portfolio was a project for me to learn the basics of
          React and to showcase some of the projects I worked on over the course
          of the bootcamp.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
