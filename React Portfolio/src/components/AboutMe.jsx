import profilePicture from '../assets/profilepicture.png';

const AboutMe = () => {
  return (
    <section>
      <h2 className="about-me-title">About Me</h2>
      <div>
        <img
          src={profilePicture}
          alt="Developer Avatar"
          className="profile-picture"
        />
        <p className="about-me-text">
          My name is Jared Eichhorst, I was born and rasied in San Diego and
          have recently found an interest in web development and computer
          science. Coding has always been something I've been interested in but
          never knew where to start. After much research and trying to figure
          things out on my own, I finally decided to sign up for a coding
          bootcamp through UCSD extended studies. Through the course of the
          bootcamp I have developed a real passion for this field. Although I am
          very much an amatuer, I'm always looking to grow as a developer and
          learn from others in the industry. This portfolio was a project for me
          to learn the basics of React and to showcase a bit of what I learned
          over the course of the bootcamp.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
