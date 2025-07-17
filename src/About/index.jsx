import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaUser, FaJava } from "react-icons/fa";
import { DiAndroid, DiPython } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";

const personalDetails = [
    { label: "Name", value:       "Nyasha Nyakauru" },
    { label: "Gender", value:     "Female" },
    { label: "Address", value:    "Harare, Zimbabwe" },
    { label: "Email", value:      "nyakaurunyasha09@gmail.com" },
    { label: "Contact No", value: "+263786664875" },
];

const jobSummary = `
I am a passionate and results-driven Software Engineer with a strong foundation in Java, Spring Boot, Python Automation and React. I recently graduated from TelOne Centre for Learning and have completed the UX/UI and Digital Makerting  phases at Uncommon.org now specializing in software development.With a keen eye for design and a drive to solve real-world problems through code, I specialize in building robust, scalable applications and engaging user interfaces. I love bringing ideas to life through elegant and effective solutions.
`;

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeader
                headerText="About Me."
                icon={<FaUser size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(-900px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h3>Software Developer</h3>
                        {jobSummary.split("\n").map((text, index) => (
                            <p key={index}>{text.trim()}</p>
                        ))}
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(500px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(600px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaJava size={60} color="var(--yellow-theme-main-color)" aria-label="Java Dev" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" aria-label="Android Dev" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" aria-label="Database Dev" />
                            </div>
                            <div>
                                <DiPython size={60} color="var(--yellow-theme-main-color)" aria-label="Python Automation" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;
