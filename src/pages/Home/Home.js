import Header from "../../components/header/Header";
import Slider from "../../components/slider/Carousel";
import ProjectSlider from "../../components/projectSlider/ProjectSlider";
import Preferences from "../../components/preferences/Preferences";
import "./style.css";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <h2 className="subtitle__tech">Технологии</h2>
      <Slider />
      <h2 className="subtitle__projects">Наши проекты</h2>
      <ProjectSlider />
      <h2 className="subtitle__benefits">Наши преимущества</h2>
      <Preferences />
    </div>
  );
};

export default Home;
