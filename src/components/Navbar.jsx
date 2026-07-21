import { Link } from "react-scroll";

const links = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "services",
    "projects",
    "contact",
];

export default function Navbar() {

    return (

        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-cyan-600">
                    Y Satish
                </h1>

                <div className="hidden md:flex gap-8">

                    {links.map((item)=>(

                        <Link
                            key={item}
                            to={item}
                            smooth
                            duration={150}
                            className="capitalize cursor-pointer hover:text-cyan-500"
                        >
                            {item}
                        </Link>

                    ))}

                </div>

            </div>

        </nav>

    );

}