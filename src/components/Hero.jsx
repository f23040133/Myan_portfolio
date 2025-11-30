import React from 'react'
import { Github, Linkedin, Mail, Shield, Facebook } from 'lucide-react'

export default function Hero(){
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        {/* Shield Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center">
            <Shield className="w-12 h-12 text-blue-400" />
          </div>
        </div>

        {/* Personal Photo */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30 overflow-hidden">
            <img 
              src="/profile.png" 
              alt="Md Myan Uddin" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="text-slate-400 text-sm flex items-center justify-center h-full">Your Photo</span>';
              }}
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Md Myan Uddin</h1>
        <p className="text-2xl md:text-3xl text-blue-400 mb-6">Aspiring Cybersecurity Engineer</p>
        
        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Computer Science student at NJUPT with a passion for cybersecurity, network security, and ethical hacking. Eager to apply knowledge in real-world security challenges.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/50">
            Get in Touch
          </a>
          <a href="#projects" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all">
            View Projects
          </a>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/f23040133" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub Profile">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/myan-uddin-9581a0339" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/share/1ChbDyuWSb/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Facebook Profile">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="mailto:f23040133@njupt.edu.cn" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Email Contact">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
