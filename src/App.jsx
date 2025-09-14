import "./App.css";
import According from "./components/According/According";
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

      <main>
        <According />
      </main>

      <Footer />
    </>
  );
}

export default App;

