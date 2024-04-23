import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaStackOverflow,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Socials = ({ setCurrentPage }) => {
  return (
    <div className="logo-container">
      <a
        href="https://github.com/jarede712"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <IconContext.Provider value={{ className: 'social-icons github-icon' }}>
          <FaGithub />
        </IconContext.Provider>
      </a>
      <a
        href="https://www.linkedin.com/in/jared-eichhorst-b5a8382b3/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <IconContext.Provider
          value={{ className: 'social-icons linkedin-icon' }}
        >
          <FaLinkedin />
        </IconContext.Provider>
      </a>
      <a href="#" onClick={() => setCurrentPage('Contact')} title="Contact">
        <IconContext.Provider value={{ className: 'social-icons email-icon' }}>
          <FaEnvelope />
        </IconContext.Provider>
      </a>
      <a
        href="https://stackoverflow.com/users/24477003/jared-712"
        target="_blank"
        rel="noopener noreferrer"
        title="StackOverflow"
      >
        <IconContext.Provider value={{ className: 'social-icons stack-icon' }}>
          <FaStackOverflow />
        </IconContext.Provider>
      </a>
    </div>
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
