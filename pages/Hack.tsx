import { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import './Hack.css';

// TODO: Replace these placeholder imports with actual design images
// Placeholder images - replace with your actual design images
// import designImage1 from '../src/assets/images/design1.png';
// import designImage2 from '../src/assets/images/design2.png';
// import designImage3 from '../src/assets/images/design3.png';
// import designImage4 from '../src/assets/images/design4.png';
// import designImage5 from '../src/assets/images/design5.png';

const Hack = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // TODO: Replace with actual design images when uploaded
  // Placeholder array - replace with your actual images
  const designImages: string[] = [
    // designImage1,
    // designImage2,
    // designImage3,
    // designImage4,
    // designImage5,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'outcomes'];
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
        {/* Sidebar Navigation */}
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
        {/* Hero Section */}
        <section className="hack-hero">
          <h1 className="hack-title">Hack the Night</h1>
          <p className="hack-subtitle">
            A digital learning solution designed for students aged 11-14 (grades 7-8 primary and lower secondary) that raises awareness 
            about street harassment, safety, respect, and inclusion. The tool encourages collective responsibility and bystander action 
            while being age-appropriate, engaging, and suitable for classroom use.
          </p>
          <div className="project-meta">
            <span className="meta-item">Client: Stop Straat Intimidatie</span>
            <span className="meta-item">Project: Educational Digital Tool</span>
            <span className="meta-item">School Group Project</span>
          </div>
        </section>

        {/* Overview Phase */}
        <section id="overview" className="hack-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Project Overview</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Project Overview</h3>
            <p className="section-text">
              Street harassment and unsafe situations for women and LGBTQIA+ people remain pressing issues in Dutch society. 
              Education is key to cultural change by teaching children early about respect, inclusion, and safety.
            </p>
            <p className="section-text">
              The goal of this project is to develop a digital prototype that supports an educational program for group 7–8 primary and lower secondary, 
              empowering them to contribute to safe and inclusive spaces.
            </p>
            <p className="section-text">
              The assignment requires designing and prototyping a digital learning solution (game, app, interactive module, or storytelling experience) 
              for students aged 11-14 that raises awareness about street harassment, safety, respect, and inclusion. 
              The solution must be age-appropriate, engaging, encourage collective responsibility and bystander action, 
              be ethically responsible, and easily integrated into teachers' lessons.
            </p>
          </div>

          <div className="content-card">
            <h3 className="card-title">Objectives</h3>
            <div className="highlight-box">
              <ul className="highlight-list">
                <li>Create an interactive and engaging prototype for classroom use</li>
                <li>Strengthen awareness of street harassment and inclusion</li>
                <li>Encourage safe behaviour and active bystander intervention</li>
                <li>Ensure the tool is feasible, ethical, and scalable</li>
              </ul>
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Design Phase</h3>
            <p className="section-text">
              During the design phase, we created wireframes, prototypes, and design mockups to visualize the digital learning tool. 
              The design focuses on age-appropriate interfaces, engaging interactions, and clear visual communication.
            </p>
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
                  Design images will be displayed here once uploaded.<br />
                  Add your images to the designImages array in Hack.tsx
                </p>
              </div>
            )}
          </div>

        </section>

        {/* Expected Outcomes */}
        <section id="outcomes" className="hack-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Expected Outcomes</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Expected Outcomes</h3>
            <p className="section-text">
              The project aims to deliver a functional digital learning tool that raises awareness about street harassment, 
              promotes inclusivity, and encourages safe behaviour among students aged 11-14.
            </p>
            <div className="results-grid">
              <div className="result-item">
                <div className="result-icon">🎓</div>
                <h4 className="result-title">Educational Impact</h4>
                <p className="result-text">Age-appropriate tool for teaching respect, safety, and inclusion</p>
              </div>
              <div className="result-item">
                <div className="result-icon">👥</div>
                <h4 className="result-title">Bystander Action</h4>
                <p className="result-text">Encourages collective responsibility and active intervention</p>
              </div>
              <div className="result-item">
                <div className="result-icon">💡</div>
                <h4 className="result-title">Engagement</h4>
                <p className="result-text">Interactive and engaging prototype suitable for classroom use</p>
              </div>
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

export default Hack;
