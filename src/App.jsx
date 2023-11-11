import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Register from './pages/Register'
import Newsletter from './pages/Newsletter'
import Community from './pages/Community'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full pb-8 min-h-screen'>
      <Navbar />
      <Hero/>
      <div className='py-12 md:py-24'>
        <About />
      </div>
      <Register />
      <div className="py-6">
        <Newsletter />
      </div>
      <div className='py-12 md:py-24'>
        <Community />
      </div>
      <Footer />
    </div>
  )
}

export default App
