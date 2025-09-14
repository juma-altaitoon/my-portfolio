import { Link } from 'react-router';
import avatar from '../assets/Portfolio_avatar.png';

export default function Sidebar() {

    return (
        <aside className="hidden md:block w-64 bg-blue-900 text-white p-4 rounded-xl shadow-lg m-4 z-50">
            <img src={avatar} alt="Juma's Avatar" className='rounded-full w-24 h-24 mb-4' />
            <h2 className='text-lg font-bold text-gray-300 mb-2'>Juma Altaitoon</h2>
            <p className='text-sm text-grey-600 mb-4'>Full Stack Engineer | Cybersecurity | ML</p>
            <div className='block py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                <p>Email: juma.altaitoon@gmail.com</p>
                <p>Location: Kingdom of Bahrain (BH)</p>
                <p>LinkedIn: <a href='https://linkedin.com/in/juma-altaitoon' className='text-blue-500'>LinkedIn.com</a></p>
                <p>Github: <a href='https://github.com/juma-altaitoon' className='text-blue-500'>github.com</a></p>
            </div>
            <Link to={"/profile"} className='hover-underline'>more...</Link>
        </aside>
    )
}