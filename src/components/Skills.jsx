import React from 'react'
import { Shield, Code2, Lock, BookOpen } from 'lucide-react'

const skillGroups = [
  {
    icon: Shield,
    title: 'Security Tools & Platforms',
    skills: [
      { name: 'Kali Linux', icon: 'https://www.kali.org/images/kali-dragon-icon.svg', isEmoji: false },
      { name: 'Metasploit', icon: '🎯', isEmoji: true },
      { name: 'Burp Suite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg', isEmoji: false },
      { name: 'Wireshark', icon: '🦈', isEmoji: true },
      { name: 'Nmap', icon: '🗺️', isEmoji: true },
      { name: 'OWASP ZAP', icon: 'https://www.zaproxy.org/img/zap.svg', isEmoji: false },
      { name: 'VirtualBox/VMware', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', isEmoji: false },
      { name: 'Nessus', icon: '🔬', isEmoji: true }
    ]
  },
  {
    icon: Code2,
    title: 'Programming & Scripting',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', isEmoji: false },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', isEmoji: false },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', isEmoji: false },
      { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', isEmoji: false },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', isEmoji: false },
      { name: 'PowerShell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg', isEmoji: false },
      { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', isEmoji: false },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', isEmoji: false }
    ]
  },
  {
    icon: Lock,
    title: 'Security Domains',
    skills: [
      { name: 'Network Security', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg', isEmoji: false },
      { name: 'Penetration Testing', icon: '🔓', isEmoji: true },
      { name: 'Vulnerability Assessment', icon: '🔍', isEmoji: true },
      { name: 'Ethical Hacking', icon: '👨‍💻', isEmoji: true },
      { name: 'Web Application Security', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', isEmoji: false },
      { name: 'Cryptography', icon: '🔐', isEmoji: true },
      { name: 'Linux Security', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', isEmoji: false },
      { name: 'Security Analysis', icon: '📊', isEmoji: true }
    ]
  },
  {
    icon: BookOpen,
    title: 'Knowledge & Frameworks',
    skills: [
      { name: 'OWASP Top 10', icon: '📋', isEmoji: true },
      { name: 'TCP/IP Protocols', icon: '🔗', isEmoji: true },
      { name: 'Firewall Configuration', icon: '🧱', isEmoji: true },
      { name: 'Security Best Practices', icon: '✅', isEmoji: true },
      { name: 'Risk Assessment', icon: '⚠️', isEmoji: true },
      { name: 'Incident Response', icon: '🚨', isEmoji: true },
      { name: 'Network Architecture', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', isEmoji: false },
      { name: 'Cloud Security Basics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', isEmoji: false }
    ]
  }
]

export default function Skills(){
  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Technical Skills</p>
          <h2 className="text-4xl font-bold">Expertise & Tools</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <div key={idx} className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 rounded text-sm transition-all flex items-center gap-2">
                      {skill.isEmoji ? (
                        <span className="text-lg">{skill.icon}</span>
                      ) : (
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
