import React from 'react';
import SubHeader from '../components/SubHeader';
import './Erion.css';

// Import images
import visionStatement from '../src/assets/images/visionstatement.png';
import empathyMap from '../src/assets/images/Empathy map.png';
import persona1 from '../src/assets/images/persona.galleryman.png';
import persona2 from '../src/assets/images/persona2.png';
import siteMap from '../src/assets/images/site-map.png';
import lowFidelity from '../src/assets/images/low-fidelity.png';
import prototypeVideo from '../src/assets/images/prototype-erion.mp4';

const Erion: React.FC = () => {
  return (
    <div className="erion-page">
      <SubHeader />
      <div className="artist-page" id="artist-page">
        <section className="dis-Erion" id="dis-Erion">
          <h4><br />Discover Phase</h4>
          
          <div className="dis-Erion1">
            <p>
              After conducting interviews with Erion, our client, we proceeded to create an empathy map based on insights gained from the interview.
              This map helped us understand Erion's perspectives, needs, and challenges more deeply.
              Additionally, we conducted thorough research, prepared interview questions and surveys, and collected valuable data.
              <br /><br />
              Our vision statement, crafted collaboratively with Erion, serves as our guiding light throughout the project. This vision statement ensures that our efforts remain focused on delivering a solution that aligns with Erion's aspirations and meets the needs of the target audience. <br />
              <img className="vision" src={visionStatement} alt="statement" />
            </p>
            <img className="empathy" src={empathyMap} alt="empathy-map" />
          </div>
          
          <div className="dis-Erion2">
            <p>
              <strong>Persona's <br /></strong> Furthermore, we utilized the insights gathered from Erion's interview to create personas, allowing us to better empathize with our users and tailor our solutions to meet their specific needs. This comprehensive approach ensured that our development process was informed, user-centered, and focused on delivering meaningful results.
            </p>
            <div className="image-row">
              <img src={persona1} alt="persona" />
              <img src={persona2} alt="persona" />
            </div>
          </div>
        </section>
           
        <section className="define-Erion" id="define-Erion">
          <h4>Define Phase</h4>
          <p>
            As part of our process, we also developed a site map to visualize the structure and organization of the platform. And the prototype (low-fidelity- mid-fidelity and high-fidelity) helped refine our ideas step by step, from basic concepts to detailed designs.
          </p>
          <div className="image-row">
            <img src={siteMap} alt="site-map" />
            <img id="low-proto" src={lowFidelity} alt="low-fidelity-prototype" />
          </div>
          <p>High-fidelity prototype</p>
          <div>
            <video controls>
              <source id="prototype-erion" src={prototypeVideo} type="video/mp4" />
            </video>  
          </div>
        </section>

        <section className="Dev-del-erion" id="Dev-del-erion">
          <h4>Develop and Deliver Phase</h4>
          <p>
            In the Develop and Deliver phases, we proceeded with user testing after finalizing the prototype. Following this, I implemented the code using HTML, CSS, and JavaScript.
            <strong>During the Deliver phase,</strong> the focus shifted towards documenting the code . This involved creating comprehensive documentation to ensure clarity and facilitate maintenance. Finally, the project was delivered to the stakeholders.
            <a href="https://git.fhict.nl/I476896/s2023_m2_cb01_group2_tableau_de_lest" target="_blank" rel="noopener noreferrer">Git lab project link</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Erion;
