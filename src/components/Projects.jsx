import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import leafImg from "../assets/images/leaf.png";
import heartImg from "../assets/images/heart.png";
import researchImg from "../assets/images/research.png";

const projects = [
{
  title: "Leaf Disease Detection",
  image: leafImg,

  description:
    "CNN-based deep learning application for detecting plant leaf diseases from uploaded images.",

  highlights: [
    "Trained on 500+ leaf images",
    "Achieved 92% prediction accuracy",
    "Real-time disease classification",
    "Built-in image preprocessing",
    "CNN-based deep learning model"
  ],

  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "CNN",
  ],

  github:"https://github.com/SATISH-1711/Leaf-Disease-Detection",
  demo:"#",
},

{
  title: "Heart Disease Prediction",

  image: heartImg,

  description:
    "Machine learning web application for predicting cardiovascular disease risk.",

  highlights: [
    "Processed 1000+ patient records",
    "Trained and evaluated 5 ML models",
    "Random Forest achieved 94% accuracy",
    "ROC-AUC Score: 1.00",
    "Deployed using Django"
  ],

  technologies: [
    "Python",
    "Scikit-learn",
    "Django",
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github:"https://github.com/SATISH-1711/Heart-Disease-Prediction",
  demo:"#",
},

  {
  title:"Decentralized Research & Collaboration Platform",

  image:researchImg,

  description:
    "Blockchain-based platform for secure research collaboration.",

  highlights:[
    "Blockchain-powered research collaboration",
    "Role-based dashboards",
    "Smart contract integration",
    "Decentralized data storage",
    "Built using Solidity, Truffle and Django"
  ],

  technologies:[
    "Python",
    "Django",
    "Solidity",
    "Truffle",
    "Ganache",
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github:"https://github.com/SATISH-1711/Decentralized-Research-and-Collaboration-Platform",
  demo:"#",
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden bg-white shadow-xl border border-cyan-100"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.description}
                </p>
                

                 <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                   {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                       <span className="text-cyan-600 font-bold mt-1">•</span>
                       <span>{point}</span>
                    </li>
                   ))}
                </ul>

<div className="flex flex-wrap gap-2 mt-6"></div>
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech, i) => (

                    <span
                      key={i}
                      className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-500 text-cyan-600 px-5 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}