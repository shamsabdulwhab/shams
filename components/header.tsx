import Logo from '../src/assets/images/Logo';
import Shams from '../src/assets/images/Shams.tsx';
import { Link } from 'react-router-dom';
import Particles from './Particles';
import '../components/header.css';

const Header = () => {
  return (
    <header>
      <div className="particles-container">
        <Particles />
      </div>
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
        <h1>Welcome to my corner of the internet</h1>
        <div className="mainphoto">       
          < Shams aria-label="photo"/>
        </div>
      </div>
    </header>
  );
};

export default Header;