"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, LayoutDashboard, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Programs = () => {
  const programs = [
    {
      title: "AWS Certification Training",
      icon: <Cloud size={32} />,
      desc: "Prepare for a career in cloud computing with industry-recognized AWS certifications.",
      for: "Students, IT pros, Developers",
      duration: "Flexible ",
      mode: "Online Personalized",
      skills: "Compute, Storage, Networking, Security",
      careers: "Solutions Architect, Cloud Engineer",
      link: "/certifications/aws",
      color: "border-orange-200 hover:border-orange-400",
      iconColor: "text-orange-500 bg-orange-50"
    },
    {
      title: "Microsoft Azure Certification",
      icon: <LayoutDashboard size={32} />,
      desc: "Develop enterprise cloud skills using Microsoft's rapidly growing Azure platform.",
      for: "System Admins, Graduates, Developers",
      duration: "Flexible ",
      mode: "Online Personalized",
      skills: "Azure Architecture, Identity, Governance",
      careers: "Azure Administrator, DevOps Engineer",
      link: "/certifications/microsoft",
      color: "border-blue-200 hover:border-blue-400",
      iconColor: "text-blue-500 bg-blue-50"
    },
    {
      title: "Salesforce Certification",
      icon: <Database size={32} />,
      desc: "Learn one of the world's leading CRM platforms and develop skills for business roles.",
      for: "Business Pros, IT Pros, Freshers",
      duration: "Flexible ",
      mode: "Online Personalized",
      skills: "CRM Concepts, Data Mgmt, Automation",
      careers: "Salesforce Admin, CRM Specialist",
      link: "/certifications/salesforce",
      color: "border-sky-200 hover:border-sky-400",
      iconColor: "text-sky-500 bg-sky-50"
    }
  ];

  return (
    <section className="py-24 bg-bg-dark relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Featured Programs</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Explore our most popular personalized training tracks designed to get you certified and hired.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring", bounce: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="p-8 transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${prog.iconColor}`}>
                {prog.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">{prog.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{prog.desc}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-400 text-sm font-medium">Who it's for</span>
                  <span className="text-white text-sm font-semibold text-right max-w-[60%]">{prog.for}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-400 text-sm font-medium">Mode</span>
                  <span className="text-white text-sm font-semibold text-right">{prog.mode}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-400 text-sm font-medium">Key Skills</span>
                  <span className="text-white text-sm font-semibold text-right max-w-[60%] truncate">{prog.skills}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-slate-400 text-sm font-medium">Careers</span>
                  <span className="text-white text-sm font-semibold text-right max-w-[60%] truncate">{prog.careers}</span>
                </div>
              </div>

              <Link href={prog.link} className="w-full py-4 rounded-xl font-bold font-heading text-center transition-all bg-bg-dark text-white hover:bg-brand-blue hover:text-white flex items-center justify-center space-x-2 border border-slate-800 hover:border-brand-blue group">
                <span>View Program</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
