import React from "react";
import { FaTools } from "react-icons/fa";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import PageHeader from "../components/PageHeader";
import "./styles.scss"; // SCSS file stays separate

// ⬇️ Your skills data inside the same file
const skillsData = [
  {
    label: "FRONT END",
    data: [
      { skillName: "REACT", percentage: "100" },
      { skillName: "TAILWIND", percentage: "100" },
      { skillName: "JAVASCRIPT", percentage: "100" },
    ],
  },
  {
    label: "BACK END",
    data: [
      { skillName: "JAVA", percentage: "100" },
      { skillName: "PYTHON", percentage: "100" },
      { skillName: "KOTLIN", percentage: "100" },
    ],
  },
  {
    label: "DATABASES",
    data: [
      { skillName: "SQL", percentage: "100" },
      { skillName: "MONGO DB", percentage: "100" },
      { skillName: "ORACLE", percentage: "100" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader headerText="My Skills" icon={<FaTools size={40} />} />
      <div className="skills__content-wrapper">
        {skillsData.map((category, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {category.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {category.data.map((skill, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    key={j}
                    keyframes={["opacity: 0", "opacity: 1"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper">
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
