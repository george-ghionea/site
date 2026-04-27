
import React from 'react';

const About: React.FC = () => {
  const skills = [
    { title: 'Architecture', desc: 'Crafting scalable, responsive Java/J2EE, MVC/N-Tiers Apps with elegant design and robust state management.' },
    { title: 'Middleware & Backend', desc: 'Developing secure Microservices with J2EE/WebSphere - JSP/Servlets/EJB - Oracle/DB2/SQL on Unix/Linux.' },
    { title: 'AI Integration', desc: 'Deploying AI, LLMs like Gemini and GPT into production-ready features that enhance user value.' },
    { title: 'Cloud Infrastructure', desc: 'AWS/GCP orchestration, CI/CD pipelines, and serverless architectures.' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Mastering the Full Lifecycle of Software</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With many years of experience, I bridge the gap between creative design and technical implementation. My approach is centered on secure, maintainable, N-Tiers Apps that drives business growth and provides exceptional user experiences.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              I specialize in architecting systems that are not only powerful but also intuitive. My focus is on delivering high-quality, scalable solutions that meet modern technical standards and business objectives.
            </p>
            <div className="flex items-center space-x-4">
               <div>                  
                  <a href="https://sites.google.com/view/george-ghionea-mobileapp" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-500 transition-all">Mobile App Contact</a>
                  <br/><br/>               
                  <h4 className="font-semibold text-slate-900">George Ghionea</h4>
                  <p className="text-sm text-slate-500">Enterprise Software Achitectures</p> 
                  <p className="text-sm text-slate-500">Romania</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 mb-2">{skill.title}</h3>
                <p className="text-sm text-slate-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;