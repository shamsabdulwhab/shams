import Logo from '../src/assets/images/Logo';
import Shams from '../src/assets/images/Shams.tsx';
import { Link } from 'react-router-dom';
import Particles from './Particles';
import '../components/header.css';

const Header = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          <li><a href="#" onClick={handleContactClick}>Contacts</a></li>
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