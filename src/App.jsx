import Utility from "./components/Utility";
import About from "./sections/About";
import Approach from "./sections/Approach";
import CallToAction from "./sections/CallToAction";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import KeyMetrics from "./sections/KeyMetrics";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Hero />
      <KeyMetrics />
      <About />
      <Services />
      <Approach />
      <Projects />
      <Testimonial />
      <CallToAction />
      <Contact />
      <Footer />
      <Utility />
    </>
  );
}

export default App;
