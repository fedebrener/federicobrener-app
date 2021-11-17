import './App.css';
import carrito from './img/shopping-bag.png';
import logo from './img/bkologo2.jpg';

function Header() {
    return (
      <div className="header">
                <a href="index.html"><img className="logonav" src={logo} alt="logoBerkano" /></a>
        <ul className="menu-nav">
            <li><a href="#">INICIO</a></li>
            <li><a href="#">CATALOGO</a></li>
            <li><a href="#">CONTACTO</a></li>
            <li><a href="#"><img src={carrito} className="carrito" alt="carrito" /></a></li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  