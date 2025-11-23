import SubHeader from '../components/SubHeader';
import CircularGallery from '../components/CircularGallery';
import './About.css';

// Import images
import about1 from '../src/assets/aboutimg/about(1).jpg';
import about3 from '../src/assets/aboutimg/about (3).JPG';
import about4 from '../src/assets/aboutimg/about (4).JPG';
import about5 from '../src/assets/aboutimg/about (5).png';
import about6 from '../src/assets/aboutimg/about (6).jpeg';
import about7 from '../src/assets/aboutimg/about (7).jpeg';

const About = () => {
  const galleryItems = [
    { image: about1, text: 'About Me' },
    { image: about3, text: 'Projects' },
    { image: about4, text: 'Portfolio' },
    { image: about5, text: 'Creative Work' },
    { image: about6, text: 'Design' },
    { image: about7, text: 'Development' }
  ];

  return (
    <div className="about-page">
      <SubHeader />
      <div className="about-container">
        {/* Circular Gallery */}
        <section className="about-gallery-section">
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery 
              items={galleryItems} 
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollEase={0.02}
            />
          </div>
        </section>

        {/* About Me Section */}
        <section className="education-section">
          <div className="education-content">
            <div className="education-text">
              <h2 className="education-title">About Me</h2>
              <p className="education-description">
                Detail-oriented Front End Developer proficient in JavaScript and React, with an understanding of UX and UI principles.
              </p>
              <p className="education-description">
                I am a lifelong learner and not afraid of exploring complex problems. I also have the ambition to learn more about the backend to become a fullstack developer.
              </p>
              <p className="education-description">
                I'm committed to continuous learning and contributing to web development every day.
              </p>
              <p className="education-description">
                I am professional, helpful and resilient. I am willing to help others in order to achieve big goals together.
              </p>
              <p className="education-description">
                Outside of work, I'm passionate about volunteering for social causes, including women empowerment, refugee rights, children's welfare, and supporting students in various activities.
              </p>
            </div>
          </div>

          <div className="education-text">
            <h2 className="education-title">My Educational Journey</h2>
          </div>

          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">ICT and Media Design</h3>
                <p className="timeline-period">2022 - 2026</p>
                <p className="timeline-description">Fontys University of Applied Science - Bachelor's in ICT & Media Design, focusing on web development, UX/UI design, and software engineering.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">TU/e Quest student</h3>
                <p className="timeline-period">2021 - 2022</p>
                <p className="timeline-description">Eindhoven University of Technology</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Erasmus student</h3>
                <p className="timeline-period">2020 - 2021</p>
                <p className="timeline-description">University of Szeged - Hungary</p>
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
                <p className="timeline-description">Self-directed learning in modern web technologies, design systems, and best practices for full stack development.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
