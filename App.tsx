
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col">
      <header className="sticky top-0 z-40 w-full glass-effect border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-slate-900 tracking-tight">GEORGE GHIONEA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-900">
            <a href="#about" className="hover:text-indigo-600 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            <a href="https://sites.google.com/view/george-ghionea" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-500 transition-all">Get To Know Me</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <About />
        <Contact />
      </main>

      <footer className="py-12 bg-blue-200 font-bold text-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm">
            © {new Date().getFullYear()} George Ghionea. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;