import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import { CardHoverEffectDemo } from "./components/Skills";

// Main component rendering the entire application
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Navbar and Hero section */}
          <Navbar />
          <Hero />
        </div>

        {/* About, Experience, and Skills sections */}
        <About />
        <Experience />
        <CardHoverEffectDemo />

        {/* Works section */}
        <Works />

        {/* Contact section with StarsCanvas in background */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
