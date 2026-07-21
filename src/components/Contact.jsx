import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCopy,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_3xg1r89",
        "template_pj4ykr6",
        form,
        "wptTkTAAmHV9ZMHsC"
      )
      .then(() => {
        alert("Message sent successfully!");

        setForm({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
        setLoading(false);
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("satishyellapola@gmail.com");
    alert("Email copied!");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-cyan-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Me
        </h2>

        <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-600 text-2xl" />
              <span className="text-lg">
                satishyellapola@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-600 text-2xl" />
              <span className="text-lg">
                +91 9100372015
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-600 text-2xl" />
              <span className="text-lg">
                Hyderabad, Telangana, India
              </span>
            </div>

            <div className="flex gap-6 pt-4">

              <a
                href="https://github.com/SATISH-1711"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 hover:text-cyan-800 transition"
              >
                <FaGithub size={30} />
              </a>

              <a
                href="https://www.linkedin.com/in/satishyellapola"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 hover:text-cyan-800 transition"
              >
                <FaLinkedin size={30} />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="text-cyan-600 hover:text-cyan-800 transition"
              >
                <FaCopy size={28} />
              </button>

            </div>

          </div>

          {/* Right Side */}

          <form
            onSubmit={sendEmail}
            className="bg-white shadow-xl rounded-3xl border border-cyan-100 p-8 space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={form.from_name}
              onChange={(e) =>
                setForm({ ...form, from_name: e.target.value })
              }
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.from_email}
              onChange={(e) =>
                setForm({ ...form, from_email: e.target.value })
              }
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-xl transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}