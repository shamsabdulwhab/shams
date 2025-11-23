import { useRef, useState, useEffect } from 'react';
import './Home.css';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'school' | 'internship'>('all');

  const checkScrollPosition = () => {
    if (projectsGridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = projectsGridRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const grid = projectsGridRef.current;
    if (grid) {
      // Reset scroll position when filter changes
      grid.scrollLeft = 0;
      checkScrollPosition();
      grid.addEventListener('scroll', checkScrollPosition);
      return () => grid.removeEventListener('scroll', checkScrollPosition);
    }
  }, [activeFilter]);

  const scrollLeft = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 2,
      title: "Tutorial Website",
      description: "An educational website designed for students and teachers based on user research, interviews, and surveys. Developed with React, HTML, CSS, and JavaScript, and connected to a CMS for easy content management. Designed in Figma to align with user needs and project goals.",
      image: "../src/assets/images/Empathy map.png",
      tech: ["React",  "Figma", "Strapi"],
      link: "/Tutorial",
      category: 'school' as const,
    },
    {
      id: 3,
      title: " React Component Reorganization",
      description: "An internal health-focused app by iO The Netherlands B.V. This project involved auditing and reorganizing React components, implementing Storybook for visualization, and writing detailed documentation to streamline future development.",
      tech: ["React", "Storybook", "Sass", "Webpack"],
      link: "/Internship",
      category: 'internship' as const,
    },
    {
      id: 4,
      title: " Restart Business with AI Agents",
      description: "A futuristic web application where intelligent AI agents collaborate, make decisions, and automate real business tasks. Designed as a digital twin of a creative agency, this proof of concept showcases how companies could be built from scratch with AI at their core in 2025.",
      tech: ["React", "Node.js", "Agile", "PostgreSQL", "TypeScript", "Figma"],
      link: "/Aiwhat",
      category: 'school' as const,
    },
  {
    id: 6,
    title: "ParentsApp: Elderly Health Tracker",
    description: "A cross-platform mobile app designed to monitor elderly health data. The app sends emergency notifications to caregivers, shows live health data from wearable devices, and includes video call and location-sharing features. Currently in development—final version coming soon :)",
    tech: ["Flutter", "Dart", "Health Data APIs", "Figma"],
    link: "/ForParents",
    category: 'school' as const,
  }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="home-container">
      <section className="top-projects-section">
        <h3 className="homes-ection-title">My Projects</h3>
        <div className="section-description">
          <p>This portfolio is all about showing my top Projects :)</p>
        </div>

        <div className="filter-tabs">
          <button 
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-tab ${activeFilter === 'school' ? 'active' : ''}`}
            onClick={() => setActiveFilter('school')}
          >
            School Projects
          </button>
          <button 
            className={`filter-tab ${activeFilter === 'internship' ? 'active' : ''}`}
            onClick={() => setActiveFilter('internship')}
          >
            Internship Project
          </button>
        </div>
        
        <div className="projects-wrapper">
          <button 
            className={`scroll-arrow scroll-arrow-left ${showLeftArrow ? 'visible' : ''}`} 
            onClick={scrollLeft} 
            aria-label="Scroll left"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="projects-grid" ref={projectsGridRef}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <button 
            className={`scroll-arrow scroll-arrow-right ${showRightArrow ? 'visible' : ''}`} 
            onClick={scrollRight} 
            aria-label="Scroll right"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;