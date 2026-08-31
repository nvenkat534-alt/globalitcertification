import React from 'react';
import { Link } from 'react-router-dom';
import Training from '../components/Training';
import SocialProof from '../components/SocialProof';

const TrainingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-dark text-white pt-12 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
          <div className="flex items-center space-x-2 text-sm font-sans font-medium text-slate-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-brand-sky">Training</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-brand-blue/20 rounded-full text-brand-sky font-bold font-heading mb-6 border border-brand-blue/30">
            EXPERT-LED IT TRAINING
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
            Master the Skills. <br className="hidden md:block" />
            <span className="text-brand-sky">Pass the Exam.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-sans leading-relaxed">
            We don't just teach theory. Our training methodology is laser-focused on equipping you with the exact knowledge, hands-on experience, and exam strategies needed to pass your certification on the first attempt.
          </p>
        </div>
      </div>
      
      {/* Metrics offset over the hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="py-4">
              <h3 className="text-5xl font-bold text-brand-blue mb-3 font-heading">50+</h3>
              <p className="text-slate-500 font-sans font-medium uppercase tracking-wider text-sm">Certified Instructors</p>
            </div>
            <div className="py-4">
              <h3 className="text-5xl font-bold text-brand-blue mb-3 font-heading">10k+</h3>
              <p className="text-slate-500 font-sans font-medium uppercase tracking-wider text-sm">Careers Advanced</p>
            </div>
            <div className="py-4">
              <h3 className="text-5xl font-bold text-brand-blue mb-3 font-heading">98%</h3>
              <p className="text-slate-500 font-sans font-medium uppercase tracking-wider text-sm">First-Attempt Pass Rate</p>
            </div>
          </div>
        </div>
      </div>

      <Training />
      
      {/* Training Delivery Formats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4 font-heading">Flexible Learning Formats</h2>
          <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto">Choose the training style that best fits your schedule and learning preferences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <i className="fas fa-chalkboard-teacher text-4xl text-brand-blue mb-6"></i>
            <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Live Instructor-Led</h3>
            <p className="text-slate-600 font-sans mb-6">Interactive online or classroom sessions with industry experts. Ask questions in real-time and engage with peers.</p>
            <ul className="space-y-3 font-sans text-sm text-slate-500 mb-8">
              <li className="flex items-center"><i className="fas fa-check text-brand-blue mr-3"></i> Fixed schedules</li>
              <li className="flex items-center"><i className="fas fa-check text-brand-blue mr-3"></i> Live Q&A</li>
              <li className="flex items-center"><i className="fas fa-check text-brand-blue mr-3"></i> High accountability</li>
            </ul>
          </div>
          
          <div className="bg-brand-dark p-10 rounded-3xl border border-slate-800 shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl font-sans uppercase tracking-widest z-10">MOST POPULAR</div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <i className="fas fa-laptop text-4xl text-brand-sky mb-6 relative z-10"></i>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading relative z-10">1-on-1 Mentorship</h3>
            <p className="text-slate-300 font-sans mb-6 relative z-10">Get a dedicated expert assigned to your exact certification goal. Personalized pacing and tailored focus areas.</p>
            <ul className="space-y-3 font-sans text-sm text-slate-400 mb-8 relative z-10">
              <li className="flex items-center"><i className="fas fa-check text-brand-sky mr-3"></i> 100% personalized pacing</li>
              <li className="flex items-center"><i className="fas fa-check text-brand-sky mr-3"></i> Focus on your weak spots</li>
              <li className="flex items-center"><i className="fas fa-check text-brand-sky mr-3"></i> Flexible scheduling</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <i className="fas fa-building text-4xl text-brand-blue mb-6"></i>
            <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Corporate Bootcamps</h3>
            <p className="text-slate-600 font-sans mb-6">Customized, intensive training blocks designed to upskill entire teams or departments simultaneously.</p>
            <ul className="space-y-3 font-sans text-sm text-slate-500 mb-8">
              <li className="flex items-center"><i className="fas fa-check text-brand-blue mr-3"></i> Volume discounts</li>
              <li className="flex items-center"><i className="fas fa-check text-brand-blue mr-3"></i> Custom curriculum</li>
              <li className="flex items-center"><i className="fas fa-check text-brand-blue mr-3"></i> Progress reporting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-brand-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">Our Proven 4-Step Methodology</h2>
            <p className="text-xl text-blue-100 font-sans max-w-2xl mx-auto">We leave nothing to chance. Our structured approach guarantees you are ready for exam day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                <span className="text-3xl font-bold font-heading">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Assessment</h3>
              <p className="text-blue-100 font-sans text-sm">We gauge your current knowledge to customize your learning path and skip redundancies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                <span className="text-3xl font-bold font-heading">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Core Learning</h3>
              <p className="text-blue-100 font-sans text-sm">Deep-dive into official curriculums via instructor-led sessions and hands-on labs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                <span className="text-3xl font-bold font-heading">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Exam Simulation</h3>
              <p className="text-blue-100 font-sans text-sm">Rigorous mock exams and practice questions that mirror the difficulty of the real test.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-dark/20 text-brand-blue">
                <i className="fas fa-trophy text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Certification</h3>
              <p className="text-blue-100 font-sans text-sm">We provide your discounted voucher and last-minute tips. You sit the exam and pass.</p>
            </div>
          </div>
        </div>
      </div>
      
      <SocialProof />
      
    </div>
  );
};

export default TrainingPage;
