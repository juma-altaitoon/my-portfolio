import profile from "../assets/data/profile.json";



export default function Profile() {

    return (
        <div className="p-4 bg-transparent rounded-xl shadow-lg">
            <h1 className="text-3xl text-center font-bold text-white mb-4">About Me</h1>
            <div className="text-gray-300 h-125 space-y-4 overflow-y-scroll mt-10">
                <div className="flex fle-wrap">
                    <div className="flex flex-wrap mt-4 w-1/2 px-2">
                        <p className="text-lg font-semibold font-mono">{profile.bio}</p>
                        {/* Interests */}
                        <div className="px-2">
                            {/* <h2 className="text-2xl font-bold text-blue-400 mb-4">Interests & Goals</h2> */}
                            <h2 className="mb-2 text-2xl font-semibold text-blue-400">Interests</h2>
                            <ul className="list-disc pl-6 space-y-2 mb-4"> 
                                {profile.interests.map((interest, index) => (
                                    <li key={index} className="text-gray-300 font-semibold">
                                        {interest}
                                    </li>
                                ))}
                            </ul>
                            <h2 className="my-2 text-2xl font-semibold text-blue-400">Goals </h2>
                            <p className="text-gray-300 font-semibold font-mono">{profile.goals}</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="w-1/2 py-4 px-2 rounded-lg shadow-inner">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Skills & Technologies</h2>
                        {profile.skills.map((group, index) => (
                            <div key={index} className="mb-8 last:mb-0">
                                <h4 className="text-xl font-semibold mb-4">{group.domain}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill, skIndex) => (
                                        <span key={skIndex} className="bg-blue-800 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {/* Certifications */}
                    <div className="mb-4 w-3/4 px-2">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Certifications</h2>
                        <ul className="list-image-none space-y-4">
                            {profile.certifications.map((cert, index) => (
                                <li key={index} className="flex">
                                    <img
                                        src={cert.badge}
                                        className="w-20 h-20 my-auto mr-4"
                                    />
                                    <div>
                                        <div className="text-lg font-semibold text-white">{cert.title}</div>
                                        <p className="text-gray-300">
                                            <span className="font-bold">Issued by : </span> {cert.issuer} - {cert.description} 
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}