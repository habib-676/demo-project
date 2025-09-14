import "./App.css";
import According from "./components/Accodring/According";
import Banner from "./components/banner-components/Banner";
import Carousel from "./components/Carousel/Carousel";
import Nav from "./components/Nav";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <nav>
        <Nav />
        <Banner />
      </nav>
      <div>
        <According></According>
        <Carousel></Carousel>
      </div>
      <Footer />
    </>
  );
}

export default App;
