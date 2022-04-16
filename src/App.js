import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Bookings from "./Components/Bookings";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      <Bookings />
      <Footer />
    </div>
  );
}

export default App;
