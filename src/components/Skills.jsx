import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiDjango,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

import { Code2, Laptop, MonitorSmartphone } from "lucide-react";
const skillCategories = [
  {
  title: "Programming Languages",
  skills: [
    {
      name: "Python",
      icon: <FaPython className="text-yellow-500 text-3xl" />,
      subSkills: [
        "Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "File Handling",
        "Exception Handling",
        "Modules & Packages"
      ]
    },
    {
      name: "C",
      icon: <span className="text-2xl font-bold text-blue-600">C</span>,
      subSkills: [
        "Variables",
        "Operators",
        "Loops",
        "Functions",
        "Arrays"
      ]
    }
  ]
},

  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-500 text-3xl" /> },
      { name: "Django", icon: <SiDjango className="text-green-700 text-3xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
      { name: "Responsive Design", icon: <MonitorSmartphone className="text-cyan-600 text-3xl" /> },
    ],
  },

  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-3xl" /> },
      { name: "Keras", icon: <SiKeras className="text-red-500 text-3xl" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-600 text-3xl" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-500 text-3xl" /> },
      { name: "Pandas", icon: <SiPandas className="text-purple-600 text-3xl" /> },
    ],
  },

  {
  title: "Databases",
  skills: [
    {
      name: "SQL",
      icon: <FaDatabase className="text-cyan-600 text-3xl" />,
      subSkills: [
        "Data Types",
        "DDL",
        "DML",
        "DCL",
        "TCL",
        "Queries",
        "Functions",
        "GROUP BY",
        "HAVING",
        "ORDER BY",
        "Joins",
        "Subqueries",
        "Views",
        "Constraints"
      ]
    },
    
  ]
},

  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800 text-3xl" /> },
      { name: "VS Code", icon: <Code2 className="text-blue-500 text-3xl" /> },
      { name: "PyCharm", icon: <Laptop className="text-green-500 text-3xl" /> },
    ],
  },

  {
    title: "Software Engineering",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Software Development Life Cycle" },
      { name: "Problem Solving" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">Skills</h2>

        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-lg p-6 border border-cyan-100 bg-white"
            >
              <h3 className="text-2xl font-semibold text-cyan-600 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {category.skills.map((skill, i) => (
                  <div
  key={i}
  className="p-4 rounded-xl bg-slate-50 hover:bg-cyan-50 transition"
>
  <div className="flex items-center gap-3">
    {skill.icon}
    <span className="font-semibold text-lg">{skill.name}</span>
  </div>

  {skill.subSkills && (
    <div className="mt-3 flex flex-wrap gap-2">
      {skill.subSkills.map((sub, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-cyan-100 text-cyan-700 rounded-full"
        >
          {sub}
        </span>
      ))}
    </div>
  )}
</div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}