import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import wellfoundLogo from '../assets/wellfoundlogo.png';

const Socials = ({ setCurrentPage }) => {
  return (
    <IconContext.Provider value={{ className: 'social-icons' }}>
      <div className="logo-container">
        <a
          href="https://github.com/jarede712"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jared-eichhorst-b5a8382b3/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="#" onClick={() => setCurrentPage('Contact')} title="Contact">
          <FaEnvelope />
        </a>
        <a
          href="link-to-wellfound"
          target="_blank"
          rel="noopener noreferrer"
          title="Wellfound"
        >
          <img src={wellfoundLogo} alt="Wellfound" className="wellfound-logo" />
        </a>
      </div>
    </IconContext.Provider>
  );
};

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header-style">
      <h1>Jared Eichhorst</h1>
      <Socials setCurrentPage={setCurrentPage} />
    </header>
  );
};

export default Header;
