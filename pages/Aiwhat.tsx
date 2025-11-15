import { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import './Aiwhat.css';

// Import images from Ai folder
import frame29 from '../src/assets/Ai/Frame 29.png';
import frame38 from '../src/assets/Ai/Frame 38.png';
import influencerMarketing from '../src/assets/Ai/Influencer Marketing.png';
import latestProject from '../src/assets/Ai/Latest Project1.png';
import loginDashboard from '../src/assets/Ai/login page dashboard.png';
import plan from '../src/assets/Ai/Plan.png';
import presentationDebrief from '../src/assets/Ai/presentation debrief hover1.png';
import signedInHomepage from '../src/assets/Ai/signed in home-page25.png';
import useCaseVideo from '../src/assets/Ai/1080-julias-journey-to-ai-watt-a-candle-mak-2025-06-04_vdH6I2Zn.mp4';

const Aiwhat = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const designImages = [
    plan,
    frame29,
    frame38,
    loginDashboard,
    signedInHomepage,
    latestProject,
    influencerMarketing,
    presentationDebrief
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'methodology', 'outcomes'];
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
    <div className="aiwhat-page">
      <SubHeader />
      <div className="aiwhat-container">
        {/* Sidebar Navigation */}
        <aside className="aiwhat-sidebar">
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

        <div className="aiwhat-content">
        {/* Hero Section */}
        <section className="aiwhat-hero">
          <h1 className="aiwhat-title">(RE)START YOUR BUSINESS</h1>
          <p className="aiwhat-subtitle">
            This advice report addresses the development process and challenges faced during the AI-WATT project. 
            The main purpose was to explore how an advertising agency could be fully redesigned with AI as the core of its operations, 
            rather than simply adding AI to existing processes. Our focus was on creating a task-based system where AI agents handle routine and repetitive tasks.
          </p>
          <div className="project-meta">
            <span className="meta-item">Stakeholders: Sander & Jaap (Helpr)</span>
            <span className="meta-item">Authors: Shams, Georgi, Arkan, Ivana</span>
            <span className="meta-item">School Project</span>
          </div>
        </section>

        {/* Overview Phase */}
        <section id="overview" className="aiwhat-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Project Overview</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Background</h3>
            <p className="section-text">
              Many companies today use AI to make small improvements. But this project asked: What if AI was the starting point? 
              We selected Megawatt as our case and redesigned it as a company where AI performs major roles—like campaign planning, communication, and task distribution.
            </p>
            <p className="section-text">
              By researching business processes, AI tools like Langchain, and real company workflows, we built an interactive prototype and web app 
              that shows how a company could operate mostly through AI, while keeping the human in the loop when needed.
            </p>
          </div>

          <div className="content-card">
            <h3 className="card-title">Objectives</h3>
            <div className="highlight-box">
              <ul className="highlight-list">
                <li>Design an AI-powered business model from scratch</li>
                <li>Develop a Digital Twin simulating real business scenarios</li>
                <li>Build and test an AI-driven task assignment system integrating human and AI roles</li>
                <li>Validate and refine the solution through continuous testing and stakeholder feedback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology Phase */}
        <section id="methodology" className="aiwhat-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Project Methodology</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Agile & Scrum</h3>
            <p className="section-text">
              I used Scrum and Agile methodologies to manage the project, enabling iterative development, regular feedback cycles, and adaptive planning throughout the project process.
            </p>
          </div>
          <div id="define" className="content-card">
            <h3 className="card-title">Design Phase</h3>
            <p className="section-text">
              In the design phase, we conducted detailed brainstorming sessions to define the platform's user model. 
              We identified two user types: users who prefer full AI assistance and users who prefer manual review. 
              We decided to develop an open model: a system that is highly AI-driven (around 99% automated), while still allowing human oversight when necessary.
            </p>
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
          </div>

          <div className="content-card">
            <h3 className="card-title">Use Case Video</h3>
            <p className="section-text">
              This video demonstrates the platform's use case and how it operates in real business scenarios.
            </p>
            <div className="video-container">
              <video controls className="use-case-video">
                <source src={useCaseVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </section>

        {/* Expected Outcomes */}
        <section id="outcomes" className="aiwhat-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Expected Outcomes</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Expected Outcomes</h3>
            <ul className="section-text" style={{ paddingLeft: '20px' }}>
              <li>Demonstration of how AI can build a fully functional creative agency</li>
              <li>A working proof of concept with an interactive web application</li>
              <li>Clear understanding of human-AI collaboration boundaries</li>
              <li>Demonstrate how a creative agency could gradually move from full-service (human-led) to more self-service (AI-driven) models in the future</li>
            </ul>
          </div>

          <div className="content-card">
            <h3 className="card-title">Technical Overview</h3>
            <div className="highlight-box">
              <h4 className="highlight-title">Technology Stack</h4>
              <ul className="highlight-list">
                <li><strong>Frontend:</strong> React 19</li>
                <li><strong>Backend:</strong> Node.js (TypeScript)</li>
                <li><strong>AI Integration:</strong> Langchain</li>
                <li><strong>Containerization:</strong> Docker</li>
                <li><strong>Databases:</strong> PostgreSQL (structured data)</li>
                <li><strong>Authentication:</strong> Clerk</li>
              </ul>
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Technologies & Tools</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Langchain</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Figma</span>
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

export default Aiwhat;
