import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero(){

    return(

        <section
        id="home"
        className="min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                <div>

                    <p className="text-cyan-600 font-semibold">
                        Hi, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black mt-3">
                        Y Satish
                    </h1>

                    <TypeAnimation
                      sequence={[
                         "Software Engineer",
                         2000,
                         "Python Developer",
                         2000,
                         "AI & ML Engineer",
                         2000,
                         "Web Developer",
                         2000,
                         ]}
                     wrapper="span"
                     speed={50}
                     repeat={Infinity}
                     className="block text-3xl md:text-4xl font-bold text-cyan-600 mt-5"
                    />

                    

                    <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

                        Computer Science (AI & ML) graduate passionate about
                        building intelligent,data-driven software solutions.Transforming raw data into impactful machine learning applications and developing responsive, modern web experiences that solve real-world problems.

                    </p>

                    <div className="flex gap-4 mt-10">

                        <button
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                          className="px-6 py-3 bg-cyan-600 rounded-xl text-white hover:scale-105 transition">
                            View Projects
                        </button>
                        <button>
                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 border rounded-xl border-cyan-600 hover:bg-cyan-600 hover:text-white transition"
                          >
                          View Resume
                          </a>
                        </button>
                    </div>

                    <div className="flex gap-6 text-3xl mt-10 text-cyan-600">

                        <a href="https://github.com/SATISH-1711"
                         target="_blank"
                         rel="noreferrer"
                         className="hover:scale-125 hover:text-cyan-800 transition"
                        >
                            <FaGithub/>
                        </a>

                        <a href="https://linkedin.com/in/satishyellapola"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-125 hover:text-cyan-800 transition"
                        >
                            <FaLinkedin/>
                        </a>

                             <a href="mailto:satishyellapola@gmail.com">
                             <MdEmail />
                        </a>

                    </div>

                </div>

                <div className="flex justify-center">

                    <img
                      src="/profile.png"
                     alt="Y Satish"
                     className="w-72 h-72 object-cover rounded-full border-8 border-cyan-500 shadow-2xl hover:scale-105 transition duration-500"
                    />
                </div>

            </div>

        </section>

    )

}