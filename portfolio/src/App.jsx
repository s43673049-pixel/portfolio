import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Credentials from './components/Credentials';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress /> 
      <Navbar />
      <Hero />
      <About /> 
      <Skills />
      <Work />
      <Credentials />
      <Contact />
    </>
  );
}
