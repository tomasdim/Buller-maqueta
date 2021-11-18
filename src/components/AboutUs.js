import Carousel from "./Carousel";
import "../styles/Carousel.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-container-left">
        <p className="parrafo">
          BULLER reúne el esfuerzo y conocimiento de tres generaciones dedicadas
          a la elaboración artesanal de cerveza.
        </p>
        <div className="Carousel-div-container">
          <Carousel />
        </div>
        <p className="parrafo-small">
          Elaboramos cerveza bajo las más antiguas tradiciones pero con la
          tecnología y el gusto actual.{" "}
        </p>
        <p className="parrafo-small">
          Desarrollamos todas nuestras variedades respetando los tiempos,
          procesos y temperamento propio de cada variedad para lograr el sabor
          único que hoy es nuestro sello diferencial.
        </p>
        <img
          className="gallery1"
          src="http://bullerbrewingco.com/images/slider/cache/0fcc632107cca26fd5b989e6c175cbf2/N01.webp"
        ></img>
      </div>
      <div className="about-us-container-right">
        <img
          className="gallery2"
          src="http://bullerbrewingco.com/images/slider/cache/88f34f5d80a6389c5847a9168b59938e/N02.webp"
        ></img>
        <img
          className="gallery3"
          src="http://bullerbrewingco.com/images/slider/cache/4ef285ac846bfe6e7552c56cdeb53b8c/N03.webp"
        ></img>
      </div>
    </div>
  );
}

export default AboutUs;
