import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="flex bg-[#F2DE9B]">
      <Navbar />
      <div className="md:ml-64 flex-1">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
