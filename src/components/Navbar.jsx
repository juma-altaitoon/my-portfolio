import { Link } from "react-router";
import profile from "../assets/data/profile.json"


export default function Navbar() {

    return (
        <header className="bg-black text-white p-4 sticky top-0 z-10 shadow-lg rounded-b-xl">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-2xl font-bold font inter text-blue-600 hover:text-blue-700 animate-pulse">{profile.firstName} {profile.lastName}</h1>
                </Link>
                <nav className="hidden sm:flex space-x-4">
                    <Link to="/profile" className="hover:text-blue-300 transition-colors duration-200">Profile</Link>
                    <Link to="/projects" className="hover:text-blue-300 transition-colors duration-200">Projects</Link>
                    <Link to="/case-study" className="hover:text-blue-300 transition-colors duration-200">Case Study</Link>
                    <Link to="/contact" className="hover:text-blue-300 transition-colors duration-200">Contact</Link>

                </nav>
                <div className="sm:hidden">

                </div>
            </div>
        </header>
    )
}