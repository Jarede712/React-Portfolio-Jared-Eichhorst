const Navigation = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav className="nav-link-item">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
