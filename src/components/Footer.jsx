import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-20 py-8 border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
        <p className="mb-2">© {new Date().getFullYear()} Md Myan Uddin — Aspiring Cybersecurity Engineer</p>
        <p className="text-sm text-slate-500">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  )
}
