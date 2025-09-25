import { Routes, Route, Navigate, Router } from 'react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ProjectDetails from './pages/ProjectDetails';
import Home2 from './pages/Home2';

export default function App() {

  return(
    <>
      <div className='min-h-screen bg-black text-grey-200 flex flex-col font-sans'>
        <Navbar/>          
        <main className='container mx-auto flex-1 flex flex-col md:flex-row py-1 px-2'>
          <Sidebar/>
          <div className='flex-1'>    
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/projects/:slug' element={<ProjectDetails />} />
            <Route path='/case-study' element={<CaseStudy/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/home' element={<Home2/>} />  
          </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
    

  )
}