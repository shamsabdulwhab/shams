import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const MAX_DESCRIPTION_LENGTH = 356; // All cards will show exactly 356 characters
  const shouldTruncate = project.description.length > MAX_DESCRIPTION_LENGTH;
  
  const truncatedDescription = shouldTruncate
      ? project.description.substring(0, MAX_DESCRIPTION_LENGTH).trim() + '...'
      : project.description;

  const CardContent = (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p 
          className="project-description" 
          title={shouldTruncate ? `Full description: ${project.description}` : undefined}
        >
          {truncatedDescription}
        </p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return project.link ? (
    <Link to={project.link} style={{ textDecoration: 'none', color: 'inherit' }}>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
};

export default ProjectCard;
