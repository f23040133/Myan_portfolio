import React from 'react'

export default function ProjectCard({p}){
  return (
    <div className="glass-card p-5 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="text-slate-300 mt-2">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-slate-800 rounded">{t}</span>)}
      </div>
      <ul className="mt-3 text-slate-300 list-disc ml-5">
        {p.highlights.map(h=> <li key={h}>{h}</li>)}
      </ul>
      <div className="mt-4 flex gap-3">
        <a href={p.github} className="text-accent underline text-sm">GitHub</a>
        <a href={p.demo} className="text-accent underline text-sm">Demo</a>
      </div>
    </div>
  )
}
