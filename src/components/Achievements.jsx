import React from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    degree: 'Bachelor of Computer Science and Technology',
    institution: 'Nanjing University of Posts and Telecommunications (NJUPT)',
    location: 'Nanjing, China',
    status: 'In Progress',
    period: 'Present',
    badge: 'In Progress'
  },
  {
    icon: BookOpen,
    degree: 'Chinese Language and Culture',
    institution: 'Linyi University',
    location: 'Linyi, China',
    status: 'Certified',
    period: 'Completed',
    badge: 'Certified'
  },
  {
    icon: BookOpen,
    degree: 'Higher Secondary Certificate',
    institution: 'Cumilla City College',
    location: 'Cumilla, Bangladesh',
    status: 'Graduated',
    period: 'Completed',
    badge: 'Graduated'
  },
  {
    icon: BookOpen,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Boro Sangiswar High School',
    location: 'Bangladesh',
    status: 'Graduated',
    period: 'Completed',
    badge: 'Graduated'
  }
]

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Bengali', level: 'Native' },
  { name: 'Chinese', level: 'Fluent' }
]

export default function Achievements(){
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Education</p>
          <h2 className="text-4xl font-bold">Academic Background</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{item.degree}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.badge === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                        item.badge === 'Certified' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>{item.badge}</span>
                    </div>
                    <p className="text-slate-300 mb-1">{item.institution}</p>
                    <p className="text-slate-500 text-sm mb-2">{item.location}</p>
                    <p className="text-slate-400 text-sm">{item.period}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto glass-card p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">Languages</h3>
          <div className="grid grid-cols-3 gap-8">
            {languages.map((lang, idx) => (
              <div key={idx} className="text-center">
                <p className="text-blue-400 text-xl font-semibold mb-2">{lang.name}</p>
                <p className="text-slate-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
