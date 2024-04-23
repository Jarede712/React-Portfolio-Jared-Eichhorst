import Project from './Project';
import pantrymaster from '../assets/pantrymaster.png';
import chowtube from '../assets/chowtube.png';
import jatepwa from '../assets/jatepwa.png';
import passwordgenerator from '../assets/passwordgenerator.png';
import discgolfproject from '../assets/discgolfproject.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Disc Golf E-Commerce Store',
      description:
        'An E-Commerce store built using the MERN stack. Allows users to create an account, add items to a cart, and checkout (not integrated). Users can filter items by categories as well',
      githubLink: 'https://github.com/Jarede712/Password-Generator-Challenge',
      deployedLink: 'https://github.com/Shibiiii/Eco-Friendly_Disc-Golf',
      image: discgolfproject,
      isDeployed: true,
    },
    {
      title: 'ChowTube',
      description:
        'This project is a meal search website where users can input their nutritional data and dietary restrictions to find meal options. Additionally, users can watch YouTube videos for the selected meals or recipes.',
      githubLink: 'https://github.com/catxcoding/chowtube',
      deployedLink: 'https://catxcoding.github.io/chowtube/',
      image: chowtube,
      isDeployed: true,
    },
    {
      title: 'Workday Scheduler',
      description:
        'A simple workday scheduler that allows users to input their schedule for the day and save it to their local machine. The calendar displays the current day and will automatically update the timeslots to show past, present, and future events the user has scheduled throughout the day.',
      githubLink: 'https://github.com/Jarede712/Work-Day-Scheduler',
      deployedLink: 'Not Currently Deployed',
      image: pantrymaster,
      isDeployed: false,
    },
    {
      title: 'Password Generator',
      description:
        'A simple password generator made from HTML, CSS, and JavaScript. It allows you to set simple parameters and will generate a random passoword for you based on the parameters you chose.',
      githubLink: 'https://github.com/Jarede712/Password-Generator-Challenge',
      deployedLink: 'https://jarede712.github.io/Password-Generator-Challenge/',
      image: passwordgenerator,
      isDeployed: true,
    },
    {
      title: 'PantryMaster - Shopping List Helper',
      description:
        'PantryMaster is a web application designed to help users stay organized by keeping track of the items in their pantry and creating shopping lists sorted into categories. Users can create an account to save their data. They will then be able to personalize their lists by creating new categories and adding new items to the database.',
      githubLink: 'https://github.com/Jarede712/Shopping-List-Helper',
      deployedLink: 'Not Currently Deployed',
      image: pantrymaster,
      isDeployed: false,
    },
    {
      title: 'PWA Text Editor',
      description:
        'This is a text editor PWA that lets users edit text files. It was built with simplicity in mind and can be downloaded to a users machine.',
      githubLink: 'https://github.com/Jarede712/PWA-Text-Editor',
      deployedLink: 'https://pwa-text-editor-23hc.onrender.com/',
      image: jatepwa,
      isDeployed: false,
    },
  ];

  return (
    <section>
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
