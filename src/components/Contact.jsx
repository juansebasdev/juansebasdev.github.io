import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaItchIo,
  FaTiktok,
} from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { socialNetworks } from "../constants";

import "./Contact.css";
import { tiktok } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          form_name: form.name,
          to_name: "Liron",
          from_email: form.email,
          to_email: "contact@mail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiA5c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  const linkedin = () => {
    window.open(
      `${socialNetworks.linkedin.url}`,
      "_blank",
      "noreferrer,noopener"
    );
  };
  const github = () => {
    window.open(
      `${socialNetworks.github.url}`,
      "_blank",
      "noreferrer,noopener"
    );
  };
  const email = () => {
    window.open(
      `mailto:${socialNetworks.email.url}`,
      "_blank",
      "noreferrer,noopener"
    );
  };
  const itch = () => {
    window.open(
      `${socialNetworks.itch.url}`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const tiktok = () => {
    window.open(
      `${socialNetworks.tiktok.url}`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl h-[450px]"
        style={{ margin: "auto" }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 style={{ marginBottom: "20%" }} className={styles.sectionHeadText}>
          Contact.
        </h3>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <FaLinkedin className="social-btn" onClick={linkedin} size={56} />
          <FaItchIo className="social-btn" onClick={itch} size={56} />
          <FaTiktok className="social-btn" onClick={tiktok} size={56} />
          <FaGithub className="social-btn" onClick={github} size={56} />
          <FaEnvelope className="social-btn" onClick={email} size={56} />
        </div>

        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
