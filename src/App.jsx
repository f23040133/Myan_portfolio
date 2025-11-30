import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [active, setActive] = useState('home')

  useEffect(()=>{
    const sections = document.querySelectorAll('section[id]')
    const onScroll = ()=>{
      const scrollPos = window.scrollY + 120
      sections.forEach(sec=>{
        const top = sec.offsetTop
        const height = sec.offsetHeight
        if(scrollPos >= top && scrollPos < top + height){
          setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <div className="min-h-screen text-white font-sans">
      <Navbar active={active} />
      <main className="px-4 md:px-8">
        <Hero />
        <div className="max-w-7xl mx-auto">
          <About />
          <Achievements />
          <Skills />
          <Projects />
          <Certifications />
          <Blog />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
