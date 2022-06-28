import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import data from "./data/data.json"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards data={data}/>
      <Footer />
    </>
  );
}

export default App;
