
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
          Enterprise Software Architecture
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Building Digital Experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">Precision & Purpose</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Specializing in Management, Software Architecture, Cybersecurity, and seamless AI integration to transform complex problems into elegant solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-red-500 transition-all shadow-lg hover:shadow-xl active:scale-95">
            Get in Touch
          </a>
          <a href="#about" className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-red-500 transition-all shadow-lg hover:shadow-xl active:scale-95">
            View Expertise
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
