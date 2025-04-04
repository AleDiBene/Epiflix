import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
