import { useState } from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

function Home() {
  const [currentPage, setCurrentPage] = useState('About Me');

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'About Me' && <AboutMe />}
      {currentPage === 'Portfolio' && <Portfolio />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default Home;
