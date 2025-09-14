import ProjectCard from "../components/ProjectCard"


export default function Projects() {

    return (
        <div className="p-8 text-center bg-gray-700 rounded-xl shadow-lg m-4">
            <h1 className="text-3xl font-bold text-white mb-4">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}