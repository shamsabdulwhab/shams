import Logo from '../src/assets/images/Logo';
import { Link } from 'react-router-dom';
import './SubHeader.css';

const SubHeader = () => {
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
          <li><Link to="/contact">Contacts</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default SubHeader;

