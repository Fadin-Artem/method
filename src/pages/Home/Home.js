import Header from "../../components/header/Header";
import Slider from "../../components/slider/Carousel";
import "./style.css";

const Home = () => {
  
  return (
    <div className="Home">
      <Header />
      <h2 className="subtitle__tech">Технологии</h2>
      <Slider />
      <h2 className="subtitle__projects">Наши проекты</h2>
    </div>
  );
};

export default Home;
