import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Performance from "./components/Performance";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Showcase from "./components/Showcase";
import Feature from "./components/Feature";
import Highlights from "./components/highlights";
import Footer from "./components/Footer";


gsap.registerPlugin(ScrollTrigger);



function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Feature />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
