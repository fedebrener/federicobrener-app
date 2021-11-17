import './App.css';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';

function Footer() {
    return (
        
        <div className="footer">
        <p>¡Seguinos en nuestras redes sociales!<br></br><i>@berkanostore</i></p>
        <a href="https://www.instagram.com/berkanostore/"><img src={instagram} alt="instagram" /></a>
        <a href="https://www.facebook.com/berkanostore"><img src={facebook} alt="facebook" /></a>
        <p className="copy">Copyright © 2021 - Federico Brener - Senpai Academy</p>
        </div>
      
    );
  }

  export default Footer;