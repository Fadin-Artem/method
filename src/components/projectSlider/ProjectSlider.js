import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const ProjectSlider = () => {
  const settings = {
    arrows: false, // Отключаем кнопки для перелистывания слайдов
    dots: false, // Отключаем пагинацию
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [require("./FinManager.png"), require("./Qhabit.png")];

  return (
    <div className="slider">
      <div className="slider--buttons">
        <button className="slider--button slider--button__active">Все работы</button>
        <button className="slider--button">Интернет-магазин</button>
        <button className="slider--button">Мобильное приложение</button>
        <button className="slider--button">Лендинг</button>
        <button className="slider--button">Корпоративный сайт</button>
        <button className="slider--button">Веб-портал</button>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="sliderCard">
            <img src={image} alt={`Slide ${index}`} className="img" />
            <h4>Qhabit Mobile App</h4>
            <p>#Мобильное приложение</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
