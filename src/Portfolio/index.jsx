import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaLaptop} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import ImageOne from "../images/image1.jpg";
import ImageTwo from "../images/image2.jpg";
import ImageFour from "../images/image4.jpg";
import ImageFive from "../images/image5.jpg";

import "./styles.scss";

const portfolioData = [
  {
    id: 1,
    name: "Currency-Converter",
    image: ImageOne,
    link: "https://github.com/nyashanyakauru/currency_converter",
    category: "Development",
  },
  {
    id: 2,
    name: "Java-Platform-Game",
    image: ImageTwo,
    link: "https://github.com/nyashanyakauru/platform-Game",
    category: "Development",
  },
  
  {
    id: 4,
    name: "Todo App",
    image: ImageFour,
    link: "https://todo-app-react-mu-eight.vercel.app/",
    category: "Development",
  },
  {
    id: 3,
    name: "My-React-Portfolio",
    image: ImageFive,
    link: "https://bootstrap-portfolio-git-main-nyashadevs-projects.vercel.app/#",
    category: "Design",
  },
];

const filterOptions = 
[{label: "All", category: "All"}]



const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredItems =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="My Portfolio"
        icon={<FaLaptop size={40} />}
      />

      <div className="portfolio__content">
        
        <ul className="portfolio__content__filter">
          {filterOptions.map((option, index) => (
            <li
              key={index}
              className={filter === option.category ? "active" : ""}
              onClick={() => setFilter(option.category)}
            >
              {option.label}
            </li>
          ))}
        </ul>

        {/* Portfolio Cards */}
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <Fade
              direction="up"
              duration={600}
              triggerOnce
              key={item.id}
              cascade
            >
              <div
                className="portfolio__content__cards__item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.image} alt={item.name} />
                  </a>
                </div>

                <div className="overlay">
                  {hoveredIndex === index && (
                    <div>
                      <p>{item.name}</p>
                      <button
                        onClick={() => window.open(item.link, "_blank")}
                      >
                        Visit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
