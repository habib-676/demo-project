import "./App.css";
import According from "./components/Accodring/According";
import Banner from "./components/banner-components/Banner";
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
      </div>
      <Footer />
    </>
  );
}

export default App;
