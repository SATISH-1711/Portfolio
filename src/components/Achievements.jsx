import { motion } from "framer-motion";
import Counter from "./Counter";

const achievements = [
  {
    icon: "🎓",
    value: 2026,
    suffix: "",
    title: "B.Tech Graduate",
    description: "Computer Science & Engineering (AI & ML)",
  },
  {
    icon: "💼",
    value: 2,
    suffix: "+",
    title: "Internships",
    description: "Industry Experience",
  },
  {
    icon: "🚀",
    value: 3,
    suffix: "+",
    title: "Major Projects",
    description: "AI, ML & Web Development",
  },
  {
    icon: "🤖",
    value: 5,
    suffix: "+",
    title: "ML Models",
    description: "Classification & Prediction",
  },
  {
    icon: "📊",
    value: 1000,
    suffix: "+",
    title: "Records Processed",
    description: "Machine Learning Dataset",
  },
  {
    icon: "🎯",
    value: 94,
    suffix: "%",
    title: "Best Accuracy",
    description: "Random Forest Model",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
            Achievements
          </h2>

          <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>

          <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">
            A quick overview of my academic journey, internships, projects,
            machine learning experience, and technical accomplishments.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-lg border border-cyan-100 p-8 text-center hover:shadow-cyan-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              {/* Counter */}
              <h3 className="text-5xl font-bold text-cyan-600">
                <Counter
                  end={item.value}
                  duration={2000}
                  suffix={item.suffix}
                />
              </h3>

              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}