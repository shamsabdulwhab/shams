import React from 'react';
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

const Tutorial: React.FC = () => {
  return (
    <div className="tutorial-page">
      <SubHeader />
      <div className="toturial-page" id="toturial-page">
        <section className="dis-tutorial" id="dis-tutorial">
          <h4><br />Discover Phase</h4>
          <p>
            In this phase:
            - Interviews, surveys, and a style guide with a color scheme were conducted. <br />
            - A moodboard was generated to capture the visual direction and aesthetic preferences for the tutorial website. <br />
            <img id="resize" src={styleGuide1} alt="style" />
            <img src={styleGuide2} alt="prototype" />
            <img src={fontsColors} alt="prototype" /> <br /><br />

            - HMW and POV were created. <br />
            <div className="image-row">
              <img src={hmw} alt="hmw" />
              <img id="resize1" src={hmw1} alt="hmw" />
            </div>
          </p>
        </section>

        <section className="define-tutorial" id="define-tutorial">
          <h4><br />Define Phase</h4>
          <p>-Translated insights from personas into user scenarios</p>
          <div className="persona-text">
            <div>
              <img src={personaTuto} alt="persona" />
            </div>
            <p>
              <strong>User scenario:</strong> Stefan, a 21-year-old media student, starts his day by drinking a fresh cup of coffee and checking his daily schedule.
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
        </section>

        <section className="develop-tutorial" id="develop-tutorial">
          <h4><br />Develop Phase</h4>
          <p>
            Implemented the final design of the tutorial website based on the high-fidelity prototype.
            Conducted user testing to evaluate the website's usability, functionality, and overall user experience.
          </p>

          <div>
            <p>Final prototype version in Figma</p>
            <div className="prototype-grid">
              <img src={homePage} alt="prototype" />
              <img src={tutorialV1} alt="prototype" />
              <img src={categories} alt="prototype" />
              <img src={aboutPage} alt="prototype" />
            </div>
          </div>
        </section>

        <section className="deliver-tutorial" id="deliver-tutorial">
          <h4><br />Deliver Phase</h4>
          <p>
            - Installation Instructions: detailed instructions on how to install and set up the website, particularly focusing on the CMS (Content Management System) in Readme file. Include step-by-step guidance for individuals who may not have coding experience, explaining how to navigate the CMS, add or edit content, and manage the website.
            <a href="https://git.fhict.nl/I477553/m3-01-05-designhers/-/blob/main/README.md" target="_blank" rel="noopener noreferrer">The Readme file link</a>
            <br />
            <br />
            - Advice Report to Stakeholders:
            The advice report outlining the capabilities of my website, areas for further development, and any features that may be missing or need improvement.
            <a href="https://git.fhict.nl/I477553/m3-01-05-designhers" target="_blank" rel="noopener noreferrer">Link in Gitlab</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Tutorial;
