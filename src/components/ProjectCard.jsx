import { Link } from "react-router";
import { VscBrowser } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";



export default function ProjectCard({ project }) {

    return (
    
        <div className="bg-blue-800 rounded-lg shadow-inner flex flex-col h-auto z-50 hover:shadow-white overflow-y">
            <Link to={`/projects/${project.slug}`} >
                <img src={project.thumbnail} alt= {`${project.title} thumbnail`} className="w-full h-auto rounded-lg mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-blue-100 mb-2">{project.title}</h3>
                <p className="text-gray-100 text-sm text-left flex-grow mx-1 p-2">{project.description}</p>
                {/* Tech Stack Section */}
                <div className="mb-1 p-2">
                    <div className={"mt-2 block"}>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="bg-gray-600 text-gray-200 text-xs font-semibold px-2 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
            {/* Action Buttons */}
            {/* <div className="mt-auto flex justify-center space-x-4">
                {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200" >
                        <VscBrowser size={25}/>
                    </a>
                )}
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200" >
                        <VscGithubInverted size={25}/>
                    </a>
                )}
            </div> */}
        </div>
    
    )
}