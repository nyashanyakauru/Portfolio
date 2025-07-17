import "./styles.scss";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { Animate } from 'react-simple-animate';
import CubeParticles from "../components/CubePrticles";
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      
      <NavBar className="navbar" />
      <main className="home__content" style={{height: '100vh'}}>
        <CubeParticles />
        <div className="home__text-wrapper">
          <h1>
            Hi, I'm Nyasha Nyakauru<br />
            Full-Stack Developer
          </h1>
      

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateY(550px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <div className="home__contact-me">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="home__contact-me-link"
            >
              <button onClick={handleNavigateToContactMePage} className="home__contact-me-btn">
                Hire Me
              </button>
            </ScrollLink>
          </div>
        </Animate>
        </div>
      </main>
    </div>
  );
};

export default Home;
