import ProjectCard from "../components/ProjectCard"
import projects from "../assets/data/projects.json";


export default function Projects() {

    return (
        <div className="px-8 py-2 text-center bg-black rounded-xl shadow-lg m-4">
            <h1 className="text-3xl font-bold text-white mb-6">My Projects</h1>
            <div className="h-130 overflow-y-auto scroll-smooth">
                <div className="m-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    )
}