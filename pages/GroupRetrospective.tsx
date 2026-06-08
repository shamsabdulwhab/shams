import { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import './Hack.css';

// TODO: Replace with Figma screens, wireframes, or final designs
// import designImage1 from '../src/assets/images/design1.png';

const GroupRetrospective = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const designImages: string[] = [
    // designImage1,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'design', 'outcomes'];
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
    <div className="hack-page">
      <SubHeader />
      <div className="hack-container">
        <aside className="hack-sidebar">
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
                  href="#design"
                  className={activeSection === 'design' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('design');
                  }}
                >
                  Design Mockups
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

        <div className="hack-content">
          <section className="hack-hero">
            <h1 className="hack-title">Group Reflection Platform</h1>
            <p className="hack-subtitle">
              An interactive reflection platform designed to help students and teams reflect on collaboration,
              feedback, and personal development in a more engaging and meaningful way. The platform combines
              anonymous peer feedback, visualization techniques, and guided reflection to encourage deeper
              self-awareness and constructive conversations.
            </p>
            <div className="project-meta">
              <span className="meta-item">Platform: Web Application</span>
              <span className="meta-item">Project: Interactive Reflection Tool</span>
              <span className="meta-item">Team Project</span>
            </div>
          </section>

          <section id="overview" className="hack-section">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2 className="section-title">Project Overview</h2>
            </div>

            <div className="content-card">
              <h3 className="card-title">Project Overview</h3>
              <p className="section-text">
                The Group Reflection Platform is a web-based application that transforms traditional reflection
                activities into an interactive experience. Instead of relying on long forms or written reports,
                participants join a reflection session by scanning a QR code and providing feedback through their
                own devices. The collected feedback is visualized anonymously on a shared screen, allowing users
                to identify patterns, compare perspectives, and reflect on their own position within the group.
              </p>
              <p className="section-text">
                The project was created to address common challenges with reflection activities, such as low
                engagement, repetitive questionnaires, and difficulties in discussing feedback openly. By combining
                interaction design, visualization, and structured reflection techniques, the platform aims to make
                reflection more accessible, engaging, and insightful for students and teams.
              </p>
            </div>

            <div className="content-card">
              <h3 className="card-title">Objectives</h3>
              <div className="highlight-box">
                <ul className="highlight-list">
                  <li>Design an engaging digital reflection experience for groups and teams</li>
                  <li>Enable anonymous peer feedback through mobile devices</li>
                  <li>Visualize group feedback in an understandable and meaningful way</li>
                  <li>Encourage self-reflection without AI-generated judgments or conclusions</li>
                  <li>Support discussions about collaboration, communication, and personal growth</li>
                  <li>Create a user-friendly platform accessible through QR codes and web browsers</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="design" className="hack-section">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2 className="section-title">Design Mockups</h2>
            </div>

            <div className="content-card">
              <h3 className="card-title">Design Mockups</h3>
              {designImages.length > 0 ? (
                <div className="image-carousel">
                  <button
                    className="carousel-arrow carousel-arrow-left"
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? designImages.length - 1 : prev - 1))}
                    aria-label="Previous image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="carousel-image-container">
                    <img src={designImages[currentImageIndex]} alt={`Design ${currentImageIndex + 1}`} className="carousel-image" />
                  </div>
                  <button
                    className="carousel-arrow carousel-arrow-right"
                    onClick={() => setCurrentImageIndex((prev) => (prev === designImages.length - 1 ? 0 : prev + 1))}
                    aria-label="Next image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="carousel-indicators">
                    {designImages.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="image-carousel" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa', borderRadius: '15px', border: '2px dashed #0575E6' }}>
                  <p style={{ color: '#666', fontSize: '1rem', textAlign: 'center', padding: '20px' }}>
                    Insert your Figma screens, wireframes, or final designs here.
                  </p>
                </div>
              )}
            </div>
          </section>

          <section id="outcomes" className="hack-section">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2 className="section-title">Expected Outcomes</h2>
            </div>

            <div className="content-card">
              <h3 className="card-title">Expected Outcomes</h3>
              <p className="section-text">
                The project aims to deliver an interactive web platform that helps users reflect on group dynamics,
                personal performance, and peer feedback through visualization and guided reflection activities.
              </p>
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-icon">📱</div>
                  <h4 className="result-title">Easy Access</h4>
                  <p className="result-text">Users can quickly join reflection sessions through QR codes without complex setup.</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">👥</div>
                  <h4 className="result-title">Anonymous Feedback</h4>
                  <p className="result-text">Participants can provide honest feedback in a safe and anonymous environment.</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">📊</div>
                  <h4 className="result-title">Interactive Visualization</h4>
                  <p className="result-text">Feedback is transformed into visual representations that help users identify patterns and insights.</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">💡</div>
                  <h4 className="result-title">Meaningful Reflection</h4>
                  <p className="result-text">The platform encourages users to think critically about their experiences and personal development without feeling judged or forced.</p>
                </div>
              </div>
            </div>

            <div className="content-card">
              <h3 className="card-title">Technologies &amp; Tools</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">GitHub</span>
                <span className="tech-tag">AI-Supported Reflection Prompts</span>
                <span className="tech-tag">QR Code Integration</span>
              </div>
            </div>

            <div className="content-card">
              <h3 className="card-title">App Link</h3>
              <p className="section-text" style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 600, color: '#0575E6' }}>
                Coming Soon
              </p>
            </div>
          </section>

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

export default GroupRetrospective;
