"use client";

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const pref = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = pref ? pref === 'dark' : prefersDark;
    setDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-black/30">
      <nav className="container-max h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">Experience Dashboard</a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#overview" className="hover:text-brand-600">Overview</a>
          <a href="#experience" className="hover:text-brand-600">Experience</a>
          <a href="#projects" className="hover:text-brand-600">Projects</a>
          <a href="#skills" className="hover:text-brand-600">Skills</a>
          <a href="#education" className="hover:text-brand-600">Education</a>
          {mounted && (
            <button aria-label="Toggle theme" onClick={toggle} className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/10">
              <span className="hidden sm:inline">{dark ? 'Dark' : 'Light'}</span>
              <span className="text-lg">{dark ? '??' : '??'}</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
