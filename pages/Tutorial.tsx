import SubHeader from '../components/SubHeader';
import './Tutorial.css';

// Import images
import styleGuide1 from '../src/assets/images/style-guide..png';
import styleGuide2 from '../src/assets/images/style-guide1.png';
import fontsColors from '../src/assets/images/fonts&colors videolab (2) 1.png';
import hmw from '../src/assets/images/hmw.png';
import hmw1 from '../src/assets/images/hmw1.png';
import personaTuto from '../src/assets/images/persons2tuto.png';
import homePage from '../src/assets/images/Home page (3).png';
import tutorialV1 from '../src/assets/images/Tutorial V1 (1).png';
import categories from '../src/assets/images/Categories (1).png';
import aboutPage from '../src/assets/images/About (1).png';

const Tutorial = () => {
  return (
    <div className="tutorial-page">
      <SubHeader />
      <div className="tutorial-container">
        {/* Hero Section */}
        <section className="tutorial-hero">
          <h1 className="tutorial-title">Tutorial Website</h1>
          <p className="tutorial-subtitle">
            An educational website designed for students and teachers based on user research, interviews, and surveys. 
            Developed with React, HTML, CSS, and JavaScript, and connected to a CMS for easy content management.
          </p>
        </section>

        {/* Discover Phase */}
        <section className="tutorial-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Discover Phase</h2>
          </div>

          <div className="content-card">
            <p className="section-text">
              In this phase, interviews, surveys, and a style guide with a color scheme were conducted. 
              A moodboard was generated to capture the visual direction and aesthetic preferences for the tutorial website.
            </p>
            <div className="image-grid">
              <img src={styleGuide1} alt="style guide 1" className="section-image" />
              <img src={styleGuide2} alt="style guide 2" className="section-image" />
              <img src={fontsColors} alt="fonts and colors" className="section-image" />
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">HMW and POV</h3>
            <p className="section-text">
              How Might We (HMW) questions and Point of View (POV) statements were created to guide the design process 
              and ensure we address the right problems.
            </p>
            <div className="image-grid">
              <img src={hmw} alt="HMW" className="section-image" />
              <img src={hmw1} alt="HMW 2" className="section-image" />
            </div>
          </div>
        </section>

        {/* Define Phase */}
        <section className="tutorial-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Define Phase</h2>
          </div>

          <div className="content-card">
            <h3 className="card-title">User Persona & Scenario</h3>
            <p className="section-text">
              Translated insights from personas into user scenarios to better understand the user journey and needs.
            </p>
            <div className="image-container">
              <img src={personaTuto} alt="persona" className="section-image" />
            </div>
            <div className="scenario-box">
              <h4 className="scenario-title">User Scenario</h4>
              <p className="scenario-text">
                Stefan, a 21-year-old media student, starts his day by drinking a fresh cup of coffee and checking his daily schedule.
                After a delicious breakfast, he sits down at his laptop to plan his day.
                Today, he's excited about a video project, so he visits the university's video lab website. With a few clicks, he finds the exact information that he needs.
                In the meantime, he starts to watch a short tutorial on the website to familiarize himself with the lab's setup.
                Feeling more confident, he heads to campus for his morning classes, knowing he has an exciting afternoon ahead.
                After class, he arrives at the video lab, he is so confident that he learned everything so he starts with the work immediately.
                Stefan spends a productive few hours working on his project, applying the skills he learned from the morning's video tutorial and the interactive simulations on the website.
                As the sun sets, Stefan wraps up his work at the lab and heads home, satisfied with the progress he's made.
                Back at his apartment, he checks the lab website one last time, just to stay updated on any contests or news.
                With his creative tasks completed for the day, Stefan can relax and unwind, knowing that his journey to become a skilled video producer is well underway.
              </p>
            </div>
          </div>
        </section>

        {/* Develop Phase */}
        <section className="tutorial-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Develop Phase</h2>
          </div>

          <div className="content-card">
            <p className="section-text">
              Implemented the final design of the tutorial website based on the high-fidelity prototype.
              Conducted user testing to evaluate the website's usability, functionality, and overall user experience.
            </p>
            <h3 className="card-title">Final Prototype Version in Figma</h3>
            <div className="prototype-grid">
              <img src={homePage} alt="home page" className="section-image" />
              <img src={tutorialV1} alt="tutorial v1" className="section-image" />
              <img src={categories} alt="categories" className="section-image" />
              <img src={aboutPage} alt="about page" className="section-image" />
            </div>
          </div>
        </section>

        {/* Deliver Phase */}
        <section className="tutorial-section">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Deliver Phase</h2>
          </div>

          <div className="content-card">
            <h3 className="card-title">Installation Instructions</h3>
            <p className="section-text">
              Detailed instructions on how to install and set up the website, particularly focusing on the CMS (Content Management System) in Readme file. 
              Include step-by-step guidance for individuals who may not have coding experience, explaining how to navigate the CMS, add or edit content, and manage the website.
            </p>
            <div className="link-container">
              <a 
                href="https://git.fhict.nl/I477553/m3-01-05-designhers/-/blob/main/README.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Readme File →
              </a>
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Advice Report to Stakeholders</h3>
            <p className="section-text">
              The advice report outlining the capabilities of my website, areas for further development, and any features that may be missing or need improvement.
            </p>
            <div className="link-container">
              <a 
                href="https://git.fhict.nl/I477553/m3-01-05-designhers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project on GitLab →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tutorial;
