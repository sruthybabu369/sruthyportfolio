import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaJs, FaServer, FaBootstrap, FaDatabase, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiJquery, SiNetlify, SiFigma } from "react-icons/si";
import { FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaServer />, name: "Django" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiJquery />, name: "jQuery" },
  { icon: <FaDatabase />, name: "SQL / PostgreSQL" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaCogs />, name: "REST API" },
  { icon: <FaCloud />, name: "Cloud Platforms" },
  { icon: <SiNetlify />, name: "Netlify" }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
