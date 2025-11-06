import React from 'react';
import './Home.css';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Website for a Greek artist",
      description: "A portfolio website showcasing the artworks of Erion, created after stakeholder interviews, A/B testing, and user research. Designed in Figma and developed with HTML, CSS, and JavaScript.",
      image: "../src/assets/images/thebigclock.JPG ",
      tech: ["HTML", "CSS", "JavaScript", "Figma"],
      link: "/Erion",
    },
  
    {
      id: 2,
      title: "Tutorial Website",
      description: "An educational website designed for students and teachers based on user research, interviews, and surveys. Developed with React, HTML, CSS, and JavaScript, and connected to a CMS for easy content management. Designed in Figma to align with user needs and project goals.",
      image: "../src/assets/images/Empathy map.png",
      tech: ["React",  "Figma", "Strapi"],
      link: "/Tutorial",
    },
    {
      id: 3,
      title: " React Component Reorganization",
      description: "An internal health-focused app by iO The Netherlands B.V. This project involved auditing and reorganizing React components, implementing Storybook for visualization, and writing detailed documentation to streamline future development.",
      tech: ["React", "Storybook", "Sass", "Webpack"],
      link: "/Internship",
    },
    {
      id: 4,
      title: " Restart Business with AI Agents",
      description: "A futuristic web application where intelligent AI agents collaborate, make decisions, and automate real business tasks. Designed as a digital twin of a creative agency, this proof of concept showcases how companies could be built from scratch with AI at their core in 2025.",
      tech: ["React", "Node.js", "Langchain", "PostgreSQL", "MongoDB" , "Figma"],
      link: "/Aiwhat",
    },
    {
    id: 5,
    title: "Street Harassment Awareness Tool",
    description: "An interactive digital learning tool for students aged 11–14 to raise awareness about street harassment, inclusion, and bystander responsibility. Through engaging games and storytelling, it promotes empathy, safety, and respect in a fun, age-appropriate way.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    link: "/Hack",
  },
  {
    id: 6,
    title: "ParentsApp: Elderly Health Tracker",
    description: "A native iOS app designed to monitor elderly health data. The app sends emergency notifications to caregivers, shows live health data from Apple Watch, and includes video call and location-sharing features. Currently in development—final version coming soon :)",
    tech: ["Swift", "SwiftUI", "Xcode", "HealthKit", "Figma"],
    link: "/ForParents",
  }
  ];

  return (
    <div className="home-container">
      <section className="top-projects-section">
        <h3 className="homes-ection-title">My Projects</h3>
        <div className="section-description">
          <p>This portfolio is all about showing my top Projects :)</p>
     
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;