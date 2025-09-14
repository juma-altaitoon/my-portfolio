


export default function Contact() {

    return (
        <div className="p-8 text-center bg-gray-700 rounded-xl shadow-lg m-4">
            <h1 className="text-3xl font-bold text-white mb-4">Contact Me</h1>
            <p className="text-lg text-gray-300 mb-6">
                Reach out to me via the form below, email, or through my social media profiles.
            </p>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2"></label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your Name..."
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2"></label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-300 font-semibold mb-2"></label>
                    <textarea
                        id="message"
                        rows="5"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your Message..."
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors duration-200"                >
                    Send Message
                </button>
            </form>
        </div>
    )
}