import "./App.css";
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
      <Footer></Footer>
    </>
  );
}

export default App;
