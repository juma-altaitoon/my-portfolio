import React from "react";
import { useForm, ValidationError } from '@formspree/react';



export default function Contact() {
    const [ state, handleSubmit ] = useForm("mjkenboz");
    if (state.succeeded) {
        return (
            <p className="my-50 text-center text-4xl text-white font-bold"> Thanks for contacting us.</p>
        )
    }

    return (
        <div className="p-8 text-center bg-black rounded-xl shadow-lg m-4">
            <h1 className="text-3xl font-bold text-white mb-4">Contact Me</h1>
            <p className="text-lg text-gray-300 mb-6">
                Reach out to me via the form below, email, or through my social media profiles.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name..."
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-300 font-semibold mb-2"></label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Message..."
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    disabled={state.submitting}
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}