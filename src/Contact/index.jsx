import React, { useRef } from "react";
import PageHeader from "../components/PageHeader";
import { FaAddressCard } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import emailjs from "@emailjs/browser"; // 👈 import emailjs
import "./styles.scss";

const Contact = () => {
  const formRef = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_97aw81v", // replace with your EmailJS service ID
        "template_yqxet3d", // replace with your EmailJS template ID
        formRef.current,
        "X5uIQ0CwOYBMddHpY" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // clear form
        },
        (error) => {
          alert("Message failed to send. Please try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeader headerText="Get in Touch" icon={<FaAddressCard size={40} />} />

      <div className="contact__content">
        <Animate play duration={1} delay={0} start={{ transform: "translateY(40px)", opacity: 0 }} end={{ transform: "translateY(0px)", opacity: 1 }}>
          <h3 className="contact__content__header-text">Let’s Talk</h3>
          <p className="contact__content__description">
            Have a project or question? Send me a message or connect with me directly.
          </p>
        </Animate>

        <div className="contact__content__body">
          <Animate play duration={1} delay={0.3} start={{ transform: "translateY(40px)", opacity: 0 }} end={{ transform: "translateY(0px)", opacity: 1 }}>
            <form ref={formRef} className="contact__content__form" onSubmit={handleSendEmail}>
              <div className="contact__content__form__controlswrapper">
                <div className="inputGroup">
                  <input type="text" name="user_name" required />
                  <label>Name</label>
                </div>
                <div className="inputGroup">
                  <input type="email" name="user_email" required />
                  <label>Email</label>
                </div>
                <div className="inputGroup fullWidth">
                  <textarea name="message" rows="5" required></textarea>
                  <label>Message</label>
                </div>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </Animate>

          <div className="contact__content__infoCard">
            <h4>Contact Info</h4>
            <ul>
              <li><MdEmail /> nyasha@example.com</li>
              <li><MdPhone /> +263 786 664 875</li>
              <li><a href="https://wa.me/263786664875" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
              <li><a href="https://www.linkedin.com/feed/"><FaLinkedin /> LinkedIn</a></li>
              <li><a href="https://github.com/nyashanyakauru" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
