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
          science. After I graduated college, I struggled to figure out what was
          next, I was initially working doing CAD drawings for a traffic control
          company called Hudson Safe-T-Lite, but I knew that was not going to be
          a job I wanted to stick with forever. Then I learned about web
          development, I did some research on how to start a career in this
          field and found a bootcamp that lined up well with my schedule. Now I
          am looking to pursue it as a carrer. Web development for me is a
          stepping towards other tech related jobs. Right now my focus is on
          that fully, but I have been looking at other areas such as
          cybersecurity and game development. I have always been interested in
          creating and this has been a great outlet for me to express that.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
