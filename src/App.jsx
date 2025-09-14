import { Routes, Route, Navigate, Router } from 'react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function App() {

  return(
    <>
      <div className='min-h-screen bg-gray-900 text-grey-200 flex flex-col font-sans'>
        <Navbar/>          
        <main className='container mx-auto flex-1 flex flex-col md:flex-row p-4'>
          <Sidebar/>
          <div className='flex-1'>    
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/case-study' element={<CaseStudy/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
    

  )
}