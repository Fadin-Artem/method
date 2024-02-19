import "./style.css";
import i from "./Icon.svg";
import i2 from "./Icon2.svg";
import i3 from "./Icon3.svg";

const Preferences = () => {
  return (
    <div className="preferences--container">
      <div className="preferences">
        <span className="preferences--card">
          <img className="card--img" src={i} alt="icon"></img>
          <h4 className="card--title">Инновационные технологии</h4>
          <p className="card--text">
            Мы постоянно следим за новыми технологическими трендами и применяем
            их для создания современных проектов, обеспечивая конкурентное
            преимущество.
          </p>
        </span>
        <span className="preferences--card">
          <img src={i2} alt="icon" className="card--img"></img>
          <h4 className="card--title">Многогранная экспертиза</h4>
          <p className="card--text">
            Мы имеем команду из опытных специалистов — дизайнеры, разработчики и
            тестировщиков. Это позволяет создавать высококачественные продукты
            на всех этапах разработки.
          </p>
        </span>
        <span className="preferences--card">
          <img src={i3} alt="icon" className="card--img img"></img>
          <h4 className="card--title">Индивидуальный подход</h4>
          <p className="card--text">
            Мы прислушиваемся к потребностям заказчика, адаптируя свой подход к
            каждому проекту. Результат — индивидуальное решение, отражающее
            уникальные цели и визию клиента.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Preferences;
