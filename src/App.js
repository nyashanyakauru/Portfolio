import './App.scss';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    
    
    <div className="App">
      
    

        <section id="home">
          
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    
  );
}

export default App;