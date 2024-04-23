import { useState, useEffect } from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import MainPage from '../components/MainPage';

function Home() {
  const [currentPage, setCurrentPage] = useState('Main');

  useEffect(() => {
    document.title = 'My Portfolio';
  }, []);

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'Main' && <MainPage />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default Home;
