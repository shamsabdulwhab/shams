import { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import './ForParents.css';

// Import images from 4parents folder
import app1 from '../src/assets/4parents/app (1).png';
import app2 from '../src/assets/4parents/app (2).png';
import app3 from '../src/assets/4parents/app (3).png';
import app4 from '../src/assets/4parents/app (4).png';
import app5 from '../src/assets/4parents/app (5).png';
import app6 from '../src/assets/4parents/app (6).png';
import app7 from '../src/assets/4parents/app (7).png';

const ForParents = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const designImages: string[] = [
    app1,
    app2,
    app3,
    app4,
    app5,
    app6,
    app7,
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
    <div className="forparents-page">
      <SubHeader />
      <div className="forparents-container">
        {/* Sidebar Navigation */}
        <aside className="forparents-sidebar">
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

        <div className="forparents-content">
        {/* Hero Section */}
        <section className="forparents-hero">
          <h1 className="forparents-title">ParentsApp: Elderly Health Tracker</h1>
          <p className="forparents-subtitle">
            A cross-platform mobile app designed to monitor elderly health data. The app sends emergency notifications to caregivers, 
            shows live health data from wearable devices, and includes video call and location-sharing features. 
            Currently in development—final version coming soon :)
          </p>
          <div className="project-meta">
            <span className="meta-item">Platform: iOS & Android</span>
            <span className="meta-item">Project: Mobile Health App</span>
            <span className="meta-item">Personal Project</span>
          </div>
        </section>

        {/* Overview Phase */}
        <section id="overview" className="forparents-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Project Overview</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Project Overview</h3>
            <p className="section-text">
              This is my personal project to create a mobile app that helps monitor elderly health. The app connects to wearable devices to track health data like heart rate and activity levels. It sends emergency alerts to caregivers, allows video calls, shares location, and shows health information in an easy-to-understand way.
            </p>
            <p className="section-text">
              The goal is to help families stay connected with their elderly loved ones and get peace of mind by having real-time access to their health information, even when they can't be physically present.
            </p>
          </div>

          <div className="content-card">
            <h3 className="card-title">Objectives</h3>
            <div className="highlight-box">
              <ul className="highlight-list">
                <li>Develop a cross-platform mobile app using Flutter for iOS and Android</li>
                <li>Integrate with health data APIs to collect real-time health metrics from wearable devices</li>
                <li>Implement emergency notification system for caregivers</li>
                <li>Create user-friendly interfaces for both elderly users and caregivers</li>
                <li>Ensure privacy and security of sensitive health data</li>
              </ul>
            </div>
          </div>

          <div id="design" className="content-card">
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
                  Design images will be displayed here once uploaded.<br />
                  Add your images to the designImages array in ForParents.tsx
                </p>
              </div>
            )}
          </div>

        </section>

        {/* Expected Outcomes */}
        <section id="outcomes" className="forparents-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Expected Outcomes</h2>
          </div>
          
          <div className="content-card">
            <h3 className="card-title">Expected Outcomes</h3>
            <p className="section-text">
              The project aims to deliver a functional cross-platform mobile application that enables real-time health monitoring, 
              emergency alerts, and seamless communication between elderly users and their caregivers.
            </p>
            <div className="results-grid">
              <div className="result-item">
                <div className="result-icon">📱</div>
                <h4 className="result-title">Cross-Platform</h4>
                <p className="result-text">Native-like experience on both iOS and Android using Flutter</p>
              </div>
              <div className="result-item">
                <div className="result-icon">💓</div>
                <h4 className="result-title">Health Monitoring</h4>
                <p className="result-text">Real-time health data from wearable devices with comprehensive metrics</p>
              </div>
              <div className="result-item">
                <div className="result-icon">🚨</div>
                <h4 className="result-title">Emergency Alerts</h4>
                <p className="result-text">Instant notifications to caregivers in case of health emergencies</p>
              </div>
              <div className="result-item">
                <div className="result-icon">📞</div>
                <h4 className="result-title">Communication</h4>
                <p className="result-text">Video calls and location sharing for enhanced caregiver connection</p>
              </div>
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">Technologies & Tools</h3>
            <div className="tech-tags">
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">Dart</span>
              <span className="tech-tag">Health Data APIs</span>
              <span className="tech-tag">Figma</span>
            </div>
          </div>

          <div className="content-card">
            <h3 className="card-title">App Link</h3>
            <p className="section-text" style={{ fontSize: '1.1rem', fontWeight: 500, color: '#0575E6' }}>
              Coming Soon
            </p>
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

export default ForParents;
