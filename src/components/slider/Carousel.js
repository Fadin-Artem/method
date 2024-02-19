import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Carousel = () => {
  
  const images = [
    require("../../components/slider/css.png"),
    require("../../components/slider/html.png"),
    require("../../components/slider/Sass.png"),
    require("../../components/slider/JavaScript.png"),
    require("../../components/slider/React.png"),
    require("../../components/slider/Python.png"),
    require("../../components/slider/Git.png"),
    require("../../components/slider/Figma.png"),
    require("../../components/slider/Photoshop.png"),
    require("../../components/slider/Illustrator.png"),
    require("../../components/slider/after.png"),
    require("../../components/slider/Premier.png"),
  ];

  const settings = {
    arrows: false, // Отключаем кнопки для перелистывания слайдов
    dots: false, // Отключаем пагинацию
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Carousel;
