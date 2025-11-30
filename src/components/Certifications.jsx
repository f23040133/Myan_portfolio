import React from 'react'
import { Award, CheckCircle } from 'lucide-react'

const certifications = [
  {
    title: 'Google Cybersecurity',
    subtitle: 'Google Cybersecurity Professional Certificate',
    provider: 'Google (Coursera)',
    year: '2024',
    status: 'verified'
  },
  {
    title: 'Introduction to Cybersecurity',
    subtitle: 'Introduction to Cybersecurity',
    provider: 'Cisco Networking Academy',
    year: '2024',
    status: 'verified'
  },
  {
    title: 'CompTIA Security+',
    subtitle: 'CompTIA Security+ (In Progress)',
    provider: 'CompTIA',
    year: '2025',
    status: 'verified'
  },
  {
    title: 'Ethical Hacking Essentials',
    subtitle: 'Ethical Hacking Essentials',
    provider: 'EC-Council',
    year: '2024',
    status: 'verified'
  },
  {
    title: 'Network Security',
    subtitle: 'Network Security & Database Vulnerabilities',
    provider: 'IBM (Coursera)',
    year: '2024',
    status: 'verified'
  },
  {
    title: 'Python for Security',
    subtitle: 'Python for Cybersecurity',
    provider: 'Infosec',
    year: '2024',
    status: 'verified'
  }
]

export default function Certifications(){
  return (
    <section id="certifications" className="py-20 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Credentials</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                {cert.status === 'verified' && (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                )}
              </div>
              
              <h3 className="font-semibold text-lg mb-2 flex items-start gap-2">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm mb-3">{cert.subtitle}</p>
              
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <p className="text-slate-500 text-sm">{cert.provider}</p>
                <p className="text-blue-400 text-sm font-medium">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
