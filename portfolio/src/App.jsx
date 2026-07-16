import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Process from './components/Process';
import Skills from './components/Skills';
import GithubStats from './components/GithubStats';
import About from './components/About';
import Credentials from './components/Credentials';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress /> 
      <Navbar />
      <Hero /> 
      <Work />
       <Process />
      <Skills />
      <GithubStats />
      <About /> 
      <Credentials />
      <Contact />
    </>
  );
}
