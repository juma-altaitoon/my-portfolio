


export default function Profile() {

    return (
        <div className="p-8 text-center bg-gray-700 rounded-xl shadow-lg m-4">
            <h1 className="text-3xl font-bold text-white mb-4">About Me / Profile</h1>
            <div className="text-gray-300 space-y-4">
                <p>
                    I'm Juma,...
                </p>
                <p>
                    This section displays my multi-domain skills...
                </p>
                <div className="bg-gray-700 p-6 rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold text-blue-400 mb-2">Skills & Tech</h2>
                    <p className="font-bold text-gray-200">Software Engineering:</p>
                    <p className="text-gray-400">Frontend</p>
                    <p className="font-bold text-gray-200 mt-4">Javascript + React</p>
                    <p className="text-gray-400" ></p>
                </div>
            </div>
        </div>
    )
}