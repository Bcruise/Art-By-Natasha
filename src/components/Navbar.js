import '../styling/Navbar.css';
import data from '../data/categories.json';
import Logo from '../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"


function Navbar({setChosenPage}) {
  
  return (
    <div className="nav-bar">
      <div className="container navbar-container">
        <div className="col-12 top">
          <div className="col-4">
            <a href="https://www.etsy.com/uk/shop/ArtbyNatashaStudio?ref=profile_header">
              <FontAwesomeIcon className="link" icon={faBagShopping} />
            </a>
          </div>
          <img className="col-4" src={Logo} onClick={() => setChosenPage('Home')}></img>
          <div className="col-4">
            <a href="https://m.facebook.com/100063269947728">
              <FontAwesomeIcon className="link m-1" icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/tash.dudley/?h;=en">
              <FontAwesomeIcon className="link m-1" icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="col-10 bottom">
          {data.map(item => 
            <span className="col-4" onClick={() => setChosenPage(item.title)}>{item.title}</span>  
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;