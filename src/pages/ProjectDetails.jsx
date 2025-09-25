import { Link, useParams } from "react-router";
import projects from "../assets/data/projects.json";
import { VscBrowser } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";
import { useState } from "react";

export default function ProjectDetails() {
    const [mediaIndex, setMediaIndex ] = useState(0);
    const { slug } = useParams();
    const project = projects.find( proj => proj.slug === slug);

    if (!project) {
        return (
            <div className="text-white text-center p-8">
                Project Not Found
            </div>
        )
    }

    const nextMedia = () => {
        setMediaIndex((mediaIndex + 1)% project.media.length)
    }
    const prevMedia = () => {
        setMediaIndex((mediaIndex - 1 + project.media.length) % project.media.length)
    }

    return (
        <div className="p-4 bg-black rounded-xl shadow-lg m-4">
            <Link to="/projects" className="text-left text-blue-400 hover:text-blue-200 transition-colors duration-200">&larr; Back to Projects</Link>
            <h1 className="text-4xl font-bold text-white text-center my-4">{project.title}</h1>
            <div className="flex flex-wrap mt-4">
                <p className="text-gray-300 text-lg w-1/2 mb-6 p-3">{project.description}</p>

                { project.media && project.media.length > 0 && (
                    <div className="w-1/2 relative mb-8 border-4 border-blue-700 rounded-2xl">
                        <img 
                            src={project.media[mediaIndex]}
                            alt={`Media for ${project.title}`}
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                            loading="lazy"
                        />
                        
                        {project.media.length > 1 && (
                            <>
                                <button 
                                    onClick={prevMedia} 
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-white text-2xl font-bold p-2 rounded-full"
                                >
                                    &#8249;
                                </button>
                                <button 
                                    onClick={nextMedia} 
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-white text-2xl font-bold p-2 rounded-full"
                                >
                                    &#8250;
                                </button>
                            </>
                        )}
                    </div>     
                )}
            </div>
            
            <div className="flex flex-wrap">
                <div className="bg-black p-4 rounded-lg mb-4 w-1/2">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                            <span key={index} className="bg-blue-700 text-white text-sm font-semibold p-2 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="bg-black p-4 rounded-lg mb-4 w-1/2">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Project Links</h2>
                    <div className="flex justify-center space-x-10 mx-auto">
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-700 my-auto text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200" >
                                <VscBrowser size={50}/>
                            </a>
                        )}
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-700 my-auto text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200" >
                                <VscGithubInverted size={50}/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}