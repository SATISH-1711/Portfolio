import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  MonitorSmartphone,
  Server,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Software Engineering",
    description:
      "Design, develop, test, and maintain scalable software solutions using software engineering best practices, DSA, OOP, and SDLC methodologies.",
  },
  {
    icon: <BrainCircuit size={40} />,
    title: "AI / ML Development",
    description:
      "Develop intelligent machine learning and deep learning solutions using Scikit-learn, TensorFlow, and Keras for prediction, classification, and automation.",
  },
  {
    icon: <Server size={40} />,
    title: "Python Development",
    description:
      "Build efficient, scalable, and maintainable Python applications with clean architecture and industry-standard coding practices.",
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Full Stack Development",
    description:
      "Develop responsive, modern web applications using React.js, Django, HTML, CSS, and JavaScript while integrating AI/ML models for real-time intelligent systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Services
        </h2>

        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-cyan-100 text-center"
            >
              <div className="text-cyan-600 flex justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}