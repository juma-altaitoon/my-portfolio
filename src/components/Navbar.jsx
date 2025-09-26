import { Link } from "react-router";
import profile from "../assets/data/profile.json"
import { useState } from "react";


export default function Navbar() {
    const [ menuOpen, setMenuOpen ] = useState(false);

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
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >   
                        <svg width="30" height="30" fill="currentColor">
                            <rect y="7" width="32" height="4" rx="2"/>
                            <rect y="15" width="32" height="4" rx="2"/>
                            <rect y="23" width="32" height="4" rx="2"/>
                        </svg>
                    </button>
                    {/* Menu */}
                    {menuOpen && (
                        <nav className="absolute right-4 top-16 bg-blue-800 rounded-lg shadow-lg p-4 flex flex-col space-y-2 z-10">
                            <Link to="/profile" onClick={()=> setMenuOpen(false)} className="hover:text-blue-300 transition-colors duration-200">Profile</Link>
                            <Link to="/projects" onClick={()=> setMenuOpen(false)}  className="hover:text-blue-300 transition-colors duration-200">Projects</Link>
                            <Link to="/case-study" onClick={()=> setMenuOpen(false)} className="hover:text-blue-300 transition-colors duration-200">Case Study</Link>
                            <Link to="/contact" onClick={()=> setMenuOpen(false)} className="hover:text-blue-300 transition-colors duration-200">Contact</Link>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    )
}