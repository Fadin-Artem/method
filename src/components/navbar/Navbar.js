import logo from './logo.svg';
import './style.css';

const Navbar = () => {
  return ( 
    <nav className="nav">
        <div className="nav-row">
          <div className="nav-logo">
            <img src={logo} alt='logo'></img>
            <span>Method</span>
          </div>
          <ul className="nav-list">
            <li className="nav-list__item">
              Главное
            </li>
            <li className="nav-list__item">
              Услуги
            </li>
            <li className="nav-list__item">
              Портфолио
            </li>
          </ul>
          <button>
            Оставить заявку
          </button>
        </div>
    </nav>
   );
}
 
export default Navbar;