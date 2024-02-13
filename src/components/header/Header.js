import Navbar from "../navbar/Navbar";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        <Navbar />
        <div className="H1">
          <h1>Мы создаём иновационные продукты</h1>
        </div>
        <h3>Полная поддержка и создание продуктов с нуля</h3>
        <button className="btn">Оставить заявку</button>
      </div>
    </header>
  );
};

export default Header;
