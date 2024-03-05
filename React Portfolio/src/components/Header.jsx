import Navigation from './Navigation';

const Header = ({ currentPage, setCurrentPage }) => {
  const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header className="header-style">
      <h1>Jared Eichhorst - Web Developer</h1>
      <Navigation
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </header>
  );
};

export default Header;
