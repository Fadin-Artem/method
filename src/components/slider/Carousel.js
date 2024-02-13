import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [require("./css.png"), 
  require("./html.png"), 
 require("./Sass.png")];

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

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
