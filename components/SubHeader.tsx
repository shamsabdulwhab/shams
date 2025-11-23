import Logo from '../src/assets/images/Logo';
import { Link } from 'react-router-dom';
import './SubHeader.css';

const SubHeader = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sub-header">
      <div className="overlay">
        <div className="div-logo" id="div-logo">
          <Link className="logo" to="/">
            <Logo width="100" height="100" aria-label="Logo" />
          </Link>
        </div>
        <ul className="main-nav">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/">My Projects</Link></li>
          <li><a href="#" onClick={handleContactClick}>Contacts</a></li>
        </ul>
      </div>
    </header>
  );
};

export default SubHeader;

