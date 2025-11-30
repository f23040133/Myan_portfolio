import React, { useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Download, Facebook, Send } from 'lucide-react'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:f23040133@njupt.edu.cn?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    setStatus('Opening your email client...')
    setTimeout(() => {
      setStatus('')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and entry-level positions in cybersecurity. Feel free to reach out for collaboration, networking, or any questions!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-lg border border-slate-800">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Internship Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your opportunity or question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/50"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {status && (
                <p className="text-center text-green-400 text-sm">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <a href="mailto:f23040133@njupt.edu.cn" className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="font-medium">f23040133@njupt.edu.cn</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/myan-uddin-9581a0339" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">LinkedIn</p>
              <p className="font-medium">myan-uddin-9581a0339</p>
            </div>
          </a>
          
          <a href="https://github.com/f23040133" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
              <Github className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">GitHub</p>
              <p className="font-medium">github.com/f23040133</p>
            </div>
          </a>
          
          <a href="https://www.facebook.com/share/1ChbDyuWSb/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
              <Facebook className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Facebook</p>
              <p className="font-medium">Myan Uddin</p>
            </div>
          </a>
          
          <div className="glass-card p-6 rounded-lg border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="font-medium">Nanjing, China</p>
            </div>
          </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/50">
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
