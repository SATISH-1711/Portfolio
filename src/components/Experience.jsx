import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI & ML Developer Intern",
    company: "EDUNET Foundation (AICTE)",
    period: "Apr 2025 – May 2025",
    points: [
      "Built a Heart Disease Prediction web application.",
       "Built using Python, Django, Scikit-learn, HTML, CSS, and JavaScript.",
      "Achieved 90–95% model accuracy.",
      "Processed 1000+ patient records.",
      "Trained and evaluated 5 ML models.",
      "Reduced user input by 30%.",
    ],
  },
  {
    title: "Junior Developer Intern",
    company: "R² Educational Services",
    period: "Mar 2023 – May 2023",
    points: [
      "Developed a Book Recommendation web application.",
      "Built responsive UI using HTML, CSS and JavaScript.",
      "Worked on SDLC practices.",
      "Improved frontend performance.",
      "Worked on requirement analysis, implementation, and testing."
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-cyan-100"
            >

              <h3 className="text-2xl font-bold">
                {exp.title}
              </h3>

              <p className="text-cyan-600 mt-2">
                {exp.company}
              </p>

              <p className="text-gray-500 mt-2">
                {exp.period}
              </p>

              <ul className="list-disc pl-5 mt-6 space-y-2 text-gray-600">

                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}