import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech – CSE (AI & ML)",
    college: "Malla Reddy Engineering College",
    year: "2022 – 2026",
    score: "82%",
  },
  {
    degree: "Intermediate (MPC)",
    college: "Scholars Junior College",
    year: "2019 – 2021",
    score: "89%",
  },
  {
    degree: "SSC",
    college: "Bharathi Vidya Niketan High School",
    year: "2019",
    score: "87%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Education
        </h2>

        <div className="mt-16 relative border-l-4 border-cyan-500">

          {education.map((item, index) => (

            <motion.div
              key={index}
              className="ml-8 mb-12"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <div className="absolute -left-3 w-6 h-6 rounded-full bg-cyan-500"></div>

              <div className="bg-white shadow-lg rounded-2xl p-6">

                <h3 className="text-xl font-bold">
                  {item.degree}
                </h3>

                <p className="text-cyan-600 mt-2">
                  {item.college}
                </p>

                <p className="text-gray-500 mt-2">
                  {item.year}
                </p>

                <p className="mt-3 font-semibold">
                  Aggregate: {item.score}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}