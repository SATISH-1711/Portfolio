import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-14 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* Name */}

        <div className="text-center">

          <h2 className="text-3xl font-bold text-cyan-400">
            Y Satish
          </h2>

          <p className="mt-3 text-gray-300">
            Software Engineer • Python Developer • AI & ML Engineer
          </p>

        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 mt-10">

          {[
            "home",
            "about",
            "education",
            "experience",
            "skills",
            "services",
            "projects",
            "contact",
          ].map((item) => (

            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer capitalize hover:text-cyan-400 transition"
            >
              {item}
            </Link>

          ))}

        </div>

        {/* Social */}

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://github.com/SATISH-1711"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/satishyellapola/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Copyright */}

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 Y Satish. All Rights Reserved.

        </div>

      </div>

      {/* Back To Top */}

      <Link
        to="home"
        smooth={true}
        duration={500}
        className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg cursor-pointer"
      >
        <FaArrowUp />
      </Link>

    </footer>
  );
}