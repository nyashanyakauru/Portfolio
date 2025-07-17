import React from "react";
import PageHeader from "../components/PageHeader";
import { FaUser } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";

const resumeData = {

  education: [
    {
      title: "Full Stack Software Engineering Diploma",
      subTitle: "TelOne Centre for Learning",
      description:
        "Completed a diploma certification focused on Software development using Java, JavaScript, Html and Css , Kotlin , Project Management, Cyber Security, Database Management and Networking ",
      date: "2021 - 2024" ,
    },
    {
      title: "High School ",
      subTitle: "Nyajezi High School, Nyanga, Zimbabwe",
      description: "Arts major, graduated in 2018",
      date: "2013 - 2018",
    },
    {
      title: "Certifications",
      subTitle: "Online Courses",
      description: "Digital Marketing, UX/UI Design Course",
      date: "2025",
    },
  ],
};

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader headerText="My Resume" icon={<FaUser size={40} />} />

        <div className="timeline__section">
          <h3 className="timeline__section__header">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
            {resumeData.education.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__item"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "3.5px solid var(--yellow-theme-main-color)",
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <h3>{item.title}</h3>
                <h4>{item.subTitle}</h4>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        
      
    </section>
  );
};

export default Resume;
