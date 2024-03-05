import Navigation from './Navigation';

const Header = ({ currentPage, setCurrentPage }) => {
  const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>My Portfolio</h1>
      <Navigation
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </header>
  );
};

export default Header;
