import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaJs, FaServer, FaBootstrap, FaDatabase, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiJquery, SiNetlify } from "react-icons/si";
import { FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaReact />, name: "React.js" },
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
    <section id="skills" className="py-20 bg-secondary text-center">
      <h2 className="text-4xl font-semibold mb-10 text-primary transition-transform transform hover:scale-105">My Skills</h2>
      
      {/* Updated Grid System */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
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
