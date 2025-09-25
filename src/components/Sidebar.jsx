import { Link } from 'react-router';
import profile from "../assets/data/profile.json";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { VscBrowser } from "react-icons/vsc";

export default function Sidebar() {

    return (
        <aside className="hidden md:block h-140 w-60 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-4xl shadow-lg shadow-blue-500 mx-2 space-y-4 sticky overflow-hidden">
            <img src={"Portfolio_avatar.png"} alt={`${profile.firstName}'s Avatar`} className='rounded-full w-32 h-32 my-4 mx-auto' />
            <h2 className='text-lg font-bold mb-2 text-center'>{profile.firstName} {profile.lastName}</h2>
            <p className='text-sm mb-4'>{profile.tagline}</p>
            
            <p className='flex justify-start'><SlLocationPin size={25} className='mr-2'/>{profile.location} </p>
            <p className='flex justify-start'><MdOutlineEmail size={25} className='mr-2' />{profile.email} </p>
            <div className='flex flex-wrap justify-start space-y-4 space-x-6'>
                {profile.linkedinUrl && (
                    <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" ><FaLinkedin size={60} /></a>    
                )}
                {profile.githubUrl && (
                    <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" ><VscGithubInverted size={60}/></a>
                )}
                {profile.websiteUrl && (
                     <a href={profile.websiteUrl} target="_blank" rel="noopener noreferrer" ><VscBrowser size={60}/></a>     
                )}
                <Link to={"/profile"} className='my-auto hover:underline font-bold'>more...</Link>
                {/* <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" ><FaLinkedin size={80} /></a>
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" ><VscGithubInverted size={80}/></a>
                <a href={profile.websiteUrl} target="_blank" rel="noopener noreferrer" ><VscBrowser size={80}/></a> */}
            </div>

        </aside>
    )
}