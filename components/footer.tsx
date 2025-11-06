import '../components/footer.css'
import Logo from '../src/assets/images/Logo'

const Footer = () => {
  return (
    <div> 
    <footer className="footer" id="footer">
      <div className="footercontainer">
        <div className="footer-left">
          <div className="footer-name-social">
            <h3>Shams Alqadri</h3>
            <ul className="social">
              <li>
                <a href="https://www.linkedin.com/in/shamsalqadri/" className="linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/shamsabdulwhab" className="githup">
                  <i className="fa-brands fa-github-alt"></i>
                </a>
              </li>
              <li>
                <a href="https://git.fhict.nl/I494971" className="gitlab">
                  <i className="fa-brands fa-gitlab"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-center">
          <p><a href="mailto:taimalqadrii@gmail.com" className="email-link">taimalqadrii@gmail.com</a></p>
          <p>+31681742449</p>
        </div>
        <div>
        <Logo width="60" height="60" className="footer-logo" />
        </div>
      </div>
      </footer>
  </div>
  )
}

export default Footer