import { useEffect, useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('discover');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['discover', 'define', 'prototyping'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="erion-page">
      <SubHeader />
      <div className="erion-container">
        {/* Sidebar Navigation */}
        <aside className="erion-sidebar">
          <nav className="sidebar-nav">
            <h3 className="sidebar-title">Contents</h3>
            <ul className="sidebar-menu">
              <li>
                <a 
                  href="#discover" 
                  className={activeSection === 'discover' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('discover');
                  }}
                >
                  Discover Phase
                </a>
              </li>
              <li>
                <a 
                  href="#define" 
                  className={activeSection === 'define' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('define');
                  }}
                >
                  Define Phase
                </a>
              </li>
              <li>
                <a 
                  href="#prototyping" 
                  className={activeSection === 'prototyping' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('prototyping');
                  }}
                >
                  Prototyping
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="erion-content">
        {/* Hero Section */}
        <section className="erion-hero">
          <h1 className="erion-title">Website for a Greek Artist</h1>
          <p className="erion-subtitle">A portfolio website for Greek artist Erion, created through interviews, A/B testing, and user research.</p>
        </section>

        {/* Discover Phase */}
        <section id="discover" className="erion-section">
          <div className="section-header">
            <h2 className="section-title">Discover Phase</h2>
          </div>
          
          <div className="content-card">
            <p className="section-text">
              We interviewed Erion and created an empathy map to understand his needs and challenges. We also did research and collected data through surveys.
            </p>
            <div className="image-container">
              <img src={empathyMap} alt="empathy-map" className="section-image" />
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Vision Statement</h3>
            <p className="section-text">
              We created a vision statement with Erion to guide the project and ensure the solution meets his goals and audience needs.
            </p>
            <div className="image-container">
              <img src={visionStatement} alt="vision statement" className="section-image" />
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Personas</h3>
            <p className="section-text">
              We created personas based on the interview insights to better understand users and design solutions that meet their needs.
            </p>
            <div className="image-grid">
              <img src={persona1} alt="persona 1" className="section-image" />
              <img src={persona2} alt="persona 2" className="section-image" />
            </div>
          </div>
        </section>

        {/* Define Phase */}
        <section id="define" className="erion-section">
          <div className="section-header">
            <h2 className="section-title">Define Phase</h2>
          </div>
          
          <div className="content-card">
            <p className="section-text">
              We created a site map to show the website structure. We built prototypes (low, mid, and high-fidelity) to refine our designs step by step.
            </p>
            <div className="image-grid">
              <img src={siteMap} alt="site-map" className="section-image" />
              <img src={lowFidelity} alt="low-fidelity-prototype" className="section-image" />
            </div>
          </div>

        </section>

        {/* Prototyping */}
        <section id="prototyping" className="erion-section">
          <div className="section-header">
            <h2 className="section-title">Prototyping</h2>
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

        {/* Link Container */}
        <section className="link-container">
          <a href="/" className="project-link">
            <span>← Back to Projects</span>
          </a>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Erion;
