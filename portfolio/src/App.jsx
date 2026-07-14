import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* <ScrollProgress />  */}
      <Navbar />
      <Hero /> 
      <Work />
      <About /> 
      <Contact />
    </>
  );
}
