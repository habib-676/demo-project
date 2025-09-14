import "./App.css";
import According from "./components/Accodring/According";
import Banner from "./components/banner-components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <nav>
        <Nav />
        <Banner />
      </nav>
      <main>
        <According></According>
      </main>
    </>
  );
}

export default App;
