import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, BadgeCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-center">
            About Me
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-8 text-lg leading-9 text-gray-600 text-center max-w-4xl mx-auto">
            Computer Science and Engineering (AI & ML) graduate from Malla Reddy Engineering College, Hyderabad (2022–2026). Passionate about building intelligent, data-driven applications—from machine learning models to modern full-stack web applications. I enjoy transforming raw data into practical software solutions with intuitive, responsive user interfaces. Currently seeking entry-level opportunities as a Software Engineer, Python Developer, or AI/ML Engineer where I can continue learning, collaborate with talented teams, and build impactful software.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <InfoCard
            icon={<MapPin size={32} />}
            title="Location"
            value="Hyderabad, Telangana"
          />

          <InfoCard
            icon={<GraduationCap size={32} />}
            title="Education"
            value="B.Tech CSE (AI & ML)"
          />

          <InfoCard
            icon={<Briefcase size={32} />}
            title="Status"
            value="Open to Work"
          />

          <InfoCard
            icon={<BadgeCheck size={32} />}
            title="Experience"
            value="2 Internships"
          />

        </div>

      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center border border-cyan-100"
    >
      <div className="text-cyan-600 flex justify-center mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {value}
      </p>
    </motion.div>
  );
}