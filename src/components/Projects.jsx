import React from 'react'
import { Terminal, Network, Shield, Bug, Github } from 'lucide-react'

const projects = [
  {
    icon: Terminal,
    title: 'Network Vulnerability Scanner',
    description: 'Developed a Python-based automated network scanning tool that identifies open ports, services, and potential vulnerabilities in local networks.',
    tags: ['Python', 'Nmap', 'Socket Programming', 'Threading'],
    outcome: 'Successfully detected 15+ common vulnerabilities in test environment',
    github: 'https://github.com/f23040133'
  },
  {
    icon: Network,
    title: 'Packet Analyzer Tool',
    description: 'Created a network packet analysis application to capture and analyze network traffic, identifying suspicious patterns and potential security threats.',
    tags: ['Python', 'Scapy', 'Wireshark', 'Tkinter'],
    outcome: 'Achieved real-time packet capture and analysis with detailed reporting',
    github: 'https://github.com/f23040133'
  },
  {
    icon: Shield,
    title: 'Password Security Checker',
    description: 'Built a web-based tool to evaluate password strength and check against common password databases, educating users about password security.',
    tags: ['JavaScript', 'HTML/CSS', 'Node.js', 'Cryptography'],
    outcome: 'Implemented SHA-256 hashing and strength metrics for secure password analysis',
    github: 'https://github.com/f23040133'
  },
  {
    icon: Bug,
    title: 'Web Application Security Testing',
    description: 'Conducted comprehensive security testing on practice web applications, identifying OWASP Top 10 vulnerabilities including SQL injection and XSS.',
    tags: ['Burp Suite', 'OWASP ZAP', 'SQL', 'Python'],
    outcome: 'Documented and reported 20+ security findings with remediation recommendations',
    github: 'https://github.com/f23040133'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div key={idx} className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400"><span className="text-blue-400 font-medium">Outcome:</span> {project.outcome}</p>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="View on GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
