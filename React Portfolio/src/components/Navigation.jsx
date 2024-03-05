const Navigation = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav>
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
