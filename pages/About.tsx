import { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import CircularGallery from '../components/CircularGallery';
import './About.css';

// Import images from aboutimg folder
import about1 from '../src/assets/aboutimg/about (1).JPG';
import about3 from '../src/assets/aboutimg/about (3).JPG';
import about4 from '../src/assets/aboutimg/about (4).JPG';
import about5 from '../src/assets/aboutimg/about (5).png';
import about6 from '../src/assets/aboutimg/about (6).jpeg';
import about7 from '../src/assets/aboutimg/about (7).jpeg';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const galleryItems = [
    { 
      image: about1, 
      text: 'About Me' 
    },
    { 
      image: about3, 
      text: 'Projects' 
    },
    { 
      image: about4, 
      text: 'Portfolio' 
    },
    { 
      image: about5, 
      text: 'Creative Work' 
    },
    { 
      image: about6, 
      text: 'Design' 
    },
    { 
      image: about7, 
      text: 'Development' 
    }
  ];

  return (
    <div className="about-page">
      <SubHeader />
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="about-container">
        <section className="about-gallery-section">
          <CircularGallery items={galleryItems} />
        </section>

        {/* Educational Journey Section */}
        <section className="education-section">
          <div className="education-content">
            <div className="education-text">
              <h2 className="education-title">My Educational Journey</h2>
              <p className="education-description">
                My journey in technology and design started with curiosity and has evolved through formal education 
                and hands-on experience. I've pursued learning opportunities that combine theoretical knowledge with 
                practical application, always staying current with the latest technologies and design trends.
              </p>
              <p className="education-description">
                Through my studies and projects, I've developed a strong foundation in web development, user experience 
                design, and software engineering. Each phase of my education has contributed to building a comprehensive 
                skill set that I apply to every project I work on.
              </p>
            </div>
            <div className="education-visual">
              <div className="education-image-container">
                <img src={about1} alt="Shams" className="education-image" />
              </div>
              <div className="education-connector"></div>
            </div>
          </div>

          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Fontys University of Applied Sciences</h3>
                <p className="timeline-period">2021 - Present</p>
                <p className="timeline-description">Bachelor's in ICT & Media Design, focusing on web development, UX/UI design, and software engineering.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">iO The Netherlands B.V.</h3>
                <p className="timeline-period">2024</p>
                <p className="timeline-description">Internship as Frontend Developer, working on React component reorganization and Storybook implementation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Continuous Learning</h3>
                <p className="timeline-period">Ongoing</p>
                <p className="timeline-description">Self-directed learning in modern web technologies, design systems, and best practices in software development.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
