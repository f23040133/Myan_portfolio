import React from 'react'
import { Lock, AlertTriangle, Database, Code } from 'lucide-react'

const expertise = [
  {
    icon: Lock,
    title: 'Security Auditing',
    desc: 'Comprehensive security assessments and vulnerability analysis'
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    desc: 'Advanced monitoring and incident response capabilities'
  },
  {
    icon: Database,
    title: 'Network Security',
    desc: 'Infrastructure hardening and network architecture design'
  },
  {
    icon: Code,
    title: 'Secure Development',
    desc: 'Application security and secure coding practices'
  }
]

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">About Me</p>
          <h2 className="text-4xl font-bold">Passionate About Cybersecurity</h2>
        </div>
        
        <p className="text-slate-300 text-center max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
          I'm a motivated Computer Science student at Nanjing University of Posts and Telecommunications (NJUPT), specializing in cybersecurity. I bring a unique perspective to solving security challenges. I'm actively building my expertise through hands-on projects, self-study, and practical labs. Successfully solved 100+ LeetCode problems, demonstrating strong problem-solving and algorithmic skills.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="glass-card p-6 rounded-lg hover:bg-slate-800/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
