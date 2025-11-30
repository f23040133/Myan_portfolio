import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  {id:'home', label:'Home'},
  {id:'about', label:'About'},
  {id:'education', label:'Education'},
  {id:'skills', label:'Skills'},
  {id:'projects', label:'Projects'},
  {id:'certifications', label:'Certifications'},
  {id:'blog', label:'Blog'},
  {id:'contact', label:'Contact'}
]

export default function Navbar({ active }){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full z-30 top-0 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-wide hover:text-blue-400 transition-colors">Md Myan Uddin</a>

        <nav className="hidden md:flex gap-8 items-center">
          {links.map(l=> (
            <a key={l.id} href={`#${l.id}`} className={`transition-colors ${
              active===l.id ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'
            }`}>{l.label}</a>
          ))}
        </nav>

        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 hover:bg-slate-800 rounded">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col p-4 gap-3">
            {links.map(l=> (
              <a key={l.id} href={`#${l.id}`} onClick={()=>setOpen(false)} className={`py-2 ${
                active===l.id ? 'text-blue-400' : 'text-slate-300'
              }`}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
