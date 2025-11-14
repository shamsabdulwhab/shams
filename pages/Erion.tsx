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

const Erion = () => {
  return (
    <div className="erion-page">
      <SubHeader />
      <div className="erion-container">
        {/* Hero Section */}
        <section className="erion-hero">
          <h1 className="erion-title">Website for a Greek Artist</h1>
          <p className="erion-subtitle">A portfolio website showcasing the artworks of Erion, created after stakeholder interviews, A/B testing, and user research.</p>
        </section>

        {/* Discover Phase */}
        <section className="erion-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Discover Phase</h2>
          </div>
          
          <div className="content-card">
            <p className="section-text">
              After conducting interviews with Erion, our client, we proceeded to create an empathy map based on insights gained from the interview.
              This map helped us understand Erion's perspectives, needs, and challenges more deeply.
              Additionally, we conducted thorough research, prepared interview questions and surveys, and collected valuable data.
            </p>
            <div className="image-container">
              <img src={empathyMap} alt="empathy-map" className="section-image" />
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Vision Statement</h3>
            <p className="section-text">
              Our vision statement, crafted collaboratively with Erion, serves as our guiding light throughout the project. 
              This vision statement ensures that our efforts remain focused on delivering a solution that aligns with Erion's aspirations and meets the needs of the target audience.
            </p>
            <div className="image-container">
              <img src={visionStatement} alt="vision statement" className="section-image" />
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Personas</h3>
            <p className="section-text">
              We utilized the insights gathered from Erion's interview to create personas, allowing us to better empathize with our users 
              and tailor our solutions to meet their specific needs. This comprehensive approach ensured that our development process was 
              informed, user-centered, and focused on delivering meaningful results.
            </p>
            <div className="image-grid">
              <img src={persona1} alt="persona 1" className="section-image" />
              <img src={persona2} alt="persona 2" className="section-image" />
            </div>
          </div>
        </section>

        {/* Define Phase */}
        <section className="erion-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Define Phase</h2>
          </div>
          
          <div className="content-card">
            <p className="section-text">
              As part of our process, we developed a site map to visualize the structure and organization of the platform. 
              The prototype (low-fidelity, mid-fidelity and high-fidelity) helped refine our ideas step by step, from basic concepts to detailed designs.
            </p>
            <div className="image-grid">
              <img src={siteMap} alt="site-map" className="section-image" />
              <img src={lowFidelity} alt="low-fidelity-prototype" className="section-image" />
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">High-Fidelity Prototype</h3>
            <div className="video-container">
              <video controls className="prototype-video">
                <source src={prototypeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Develop & Deliver Phase */}
        <section className="erion-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Develop & Deliver Phase</h2>
          </div>
          
          <div className="content-card">
            <p className="section-text">
              In the Develop and Deliver phases, we proceeded with user testing after finalizing the prototype. 
              Following this, I implemented the code using HTML, CSS, and JavaScript.
            </p>
            <p className="section-text">
              <strong>During the Deliver phase,</strong> the focus shifted towards documenting the code. 
              This involved creating comprehensive documentation to ensure clarity and facilitate maintenance. 
              Finally, the project was delivered to the stakeholders.
            </p>
            <div className="link-container">
              <a 
                href="https://git.fhict.nl/I476896/s2023_m2_cb01_group2_tableau_de_lest" 
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

export default Erion;
