import { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import './Hack.css';

const Hack = () => {
  const [activeSection, setActiveSection] = useState('overview');

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
            <span className="meta-item">School Project</span>
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
              <div className="result-item">
                <div className="result-icon">✅</div>
                <h4 className="result-title">Ethical Design</h4>
                <p className="result-text">Ethically responsible tool that avoids victim blaming</p>
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
