import { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import './Internship.css';

// Import images from IO folder
import iconGallery from '../src/assets/IO/icongallery.png';
import moscowList from '../src/assets/IO/Moscow list (2).png';
import persona1 from '../src/assets/IO/Persona.png';
import persona2 from '../src/assets/IO/Persona (2).png';
import screenshot2 from '../src/assets/IO/Screenshot 2025-11-14 151036.png';
import screenshot3 from '../src/assets/IO/Screenshot 2025-11-14 143158.png';
import componentStorybook from '../src/assets/IO/componentstorybook (2).png';

const Internship = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'methodology', 'discover', 'define', 'develop', 'deliver', 'team', 'outcomes'];
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
    <div className="internship-page">
      <SubHeader />
      <div className="internship-container">
        {/* Sidebar Navigation */}
        <aside className="internship-sidebar">
          <nav className="sidebar-nav">
            <h3 className="sidebar-title">Contents</h3>
            <ul className="sidebar-menu">
              <li>
                <a 
                  href="#overview" 
                  className={activeSection === 'overview' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('overview');
                  }}
                >
                  Project Overview
                </a>
              </li>
              <li>
                <a 
                  href="#methodology" 
                  className={activeSection === 'methodology' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('methodology');
                  }}
                >
                  Project Methodology
                </a>
                <ul className="sidebar-submenu">
                  <li>
                    <a 
                      href="#discover" 
                      className={activeSection === 'discover' ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('discover');
                      }}
                    >
                      Discover
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
                      Define
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#develop" 
                      className={activeSection === 'develop' ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('develop');
                      }}
                    >
                      Develop
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#deliver" 
                      className={activeSection === 'deliver' ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('deliver');
                      }}
                    >
                      Deliver
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a 
                  href="#team" 
                  className={activeSection === 'team' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('team');
                  }}
                >
                  Project Team
                </a>
              </li>
              <li>
                <a 
                  href="#outcomes" 
                  className={activeSection === 'outcomes' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('outcomes');
                  }}
                >
                  Expected Outcomes
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="internship-content">
        {/* Hero Section */}
        <section className="internship-hero">
          <h1 className="internship-title">React Component Reorganization</h1>
          <p className="internship-subtitle">
            This project focuses on reorganizing and improving the React component system for the OKEEJ app at iO The Netherlands B.V. 
            The goal is to fix inconsistencies, remove duplicate components, and create better documentation to make the app easier to maintain and scale.
          </p>
          <div className="project-meta">
            <span className="meta-item">Company: iO The Netherlands B.V.</span>
            <span className="meta-item">Project: OKEEJ Health Platform</span>
            <span className="meta-item">Role: Frontend Developer Intern</span>
          </div>
        </section>

        {/* Overview Phase */}
        <section id="overview" className="internship-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Project Overview</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">The Challenge</h3>
            <p className="section-text">
              The OKEEJ app has grown over time with many developers working on it. This has caused inconsistencies in how the app is structured. 
              Components were added without a clear structure, leading to duplicate components and poor documentation. 
              This makes the app harder to manage and slows down development.
              Without fixing this problem, maintaining and scaling the app will become more challenging, leading to more bugs and slower development of new features.
            </p>
          </div>

          <div className="content-card">
            <h3 className="card-title">The Goal</h3>
            <p className="section-text">
              The main goal is to reorganize the React component system to make it more consistent and easier to manage. 
              This includes reviewing current components to find and fix issues like duplicates or unorganized elements.
            </p>
            <div className="highlight-box">
              <h4 className="highlight-title">Key Objectives</h4>
              <ul className="highlight-list">
                <li>Review  React components to identify problems</li>
                <li>Choose the best organization tools </li>
                <li>Reorganize components with clear names and folder structures</li>
                <li>Create a Storybook library for easy component visualization and reuse</li>
                <li>Write detailed documentation for component</li>
                <li>Provide recommendations for future maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology Phase */}
        <section id="methodology" className="internship-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Project Methodology</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Double Diamond Approach</h3>
            <p className="section-text">
              The project follows the Double Diamond method, which divides the process into four key phases: Discover, Define, Develop, and Deliver.
            </p>
          </div>

          <div className="content-card">
            <h3 className="card-title">Agile & Scrum</h3>
            <p className="section-text">
              I used Scrum and Agile methodologies to manage the project, enabling iterative development, regular feedback cycles, and adaptive planning throughout the project process.
            </p>
          </div>

          <div id="discover" className="content-card">
            <h3 className="card-title">Discover Phase</h3>
            <p className="section-text">
              The discover phase focuses on gathering insights about the current structure of the OKEEJ app's React components through stakeholder interviews with developers and project managers, comprehensive code review to identify inconsistencies and duplicate components, and research into best practices for scalable React component architecture.
            </p>
            <div className="image-container">
              <img src={moscowList} alt="Moscow list prioritization" className="section-image" />
            </div>
            <div className="image-container">
              <img src={screenshot2} alt="Discover phase screenshot" className="section-image" />
            </div>
          </div>

          <div id="define" className="content-card">
            <h3 className="card-title">Define Phase</h3>
            <div className="image-grid">
              <img src={persona1} alt="Persona 1" className="section-image" />
              <img src={persona2} alt="Persona 2" className="section-image" />
            </div>
          </div>

          <div id="develop" className="content-card">
            <h3 className="card-title">Develop Phase</h3>
            <p className="section-text">
              During the develop phase, solutions for the identified problems are created. This includes:
            </p>
            <ul className="section-text" style={{ paddingLeft: '20px' }}>
              <li>Prototyping a reorganized component system that implements the defined guidelines</li>
              <li>Using Storybook to create a visual component library for easy browsing and reuse</li>
              <li>Conducting user testing with developers to ensure the new system is easy to navigate</li>
            </ul>
            <div className="image-container">
              <img src={iconGallery} alt="Icon gallery in Storybook" className="section-image" />
            </div>
            <div className="image-container">
              <img src={screenshot3} alt="Storybook screenshot 3" className="section-image" />
            </div>
          </div>

          <div id="deliver" className="content-card">
            <h3 className="card-title">Deliver Phase</h3>
            <p className="section-text">
              The deliver phase involves finalizing and implementing the improved React component system. The deliverables include:
            </p>
            <ul className="section-text" style={{ paddingLeft: '20px' }}>
              <li>A Storybook library for component visualization</li>
              <li>A detailed report with recommendations for future maintenance</li>
            </ul>
            <div className="image-container">
              <img src={componentStorybook} alt="Component Storybook" className="section-image" />
            </div>
          </div>
        </section>

        {/* Team & Communication */}
        <section id="team" className="internship-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Project Team</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Team Members</h3>
            <div className="team-grid">
              <div className="team-item">
                <h4 className="team-name">Shams Alqadri</h4>
                <p className="team-role">Intern</p>
                <p className="team-availability">5 days/week</p>
              </div>
              <div className="team-item">
                <h4 className="team-name">Daan van Berkel</h4>
                <p className="team-role">Mentor (Senior Software Engineer)</p>
                <p className="team-availability">5 days/week</p>
              </div>
              <div className="team-item">
                <h4 className="team-name">Koen Peter</h4>
                <p className="team-role">Mentor (Enterprise Architect & Chapter Lead)</p>
                <p className="team-availability"> 5 days/week</p>
              </div>
            </div>
          </div>

        </section>

        {/* Expected Outcomes */}
        <section id="outcomes" className="internship-section">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Expected Outcomes</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Project Benefits</h3>
            <p className="section-text">
              This project will streamline the development process, reduce errors, and facilitate faster implementation of new features. 
              It ensures that the OKEEJ app remains sustainable and efficient for years to come.
            </p>
            <div className="results-grid">
              <div className="result-item">
                <div className="result-icon">⚡</div>
                <h4 className="result-title">Faster Development</h4>
                <p className="result-text">Developers can find and use components more quickly with clear organization and documentation</p>
              </div>
              <div className="result-item">
                <div className="result-icon">🛡️</div>
                <h4 className="result-title">Better Quality</h4>
                <p className="result-text">Reduced bugs and improved code consistency across the application</p>
              </div>
              <div className="result-item">
                <div className="result-icon">👥</div>
                <h4 className="result-title">Easier Onboarding</h4>
                <p className="result-text">New developers can understand and work with the codebase more easily</p>
              </div>
              <div className="result-item">
                <div className="result-icon">📈</div>
                <h4 className="result-title">Scalability</h4>
                <p className="result-text">Established foundation for future growth and feature development</p>
              </div>
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Technologies & Tools</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Storybook</span>
              <span className="tech-tag">GitLab</span>
              <span className="tech-tag">Trello</span>
              <span className="tech-tag">TypeScript</span>
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

export default Internship;
