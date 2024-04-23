import AboutMe from './AboutMe';
import Portfolio from './Portfolio';

function MainPage() {
  return (
    <div className="main-page">
      <div className="about-me-section">
        <AboutMe />
      </div>
      <div className="portfolio-section">
        <Portfolio />
      </div>
    </div>
  );
}

export default MainPage;
