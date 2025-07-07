import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#ffffff]">
      <Navbar />
      <main className=''>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App