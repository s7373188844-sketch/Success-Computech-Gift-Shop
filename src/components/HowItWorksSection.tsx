import React from 'react';
import { useApp } from '../context/AppContext';
import {
  MousePointerClick,
  UploadCloud,
  FileSearch,
  CheckCircle,
  PackageCheck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorksSection: React.FC = () => {
  const { lang, t, themeConfig } = useApp();

  const stepIcons = [
    <MousePointerClick key="1" className="w-6 h-6 text-red-600" />,
    <UploadCloud key="2" className="w-6 h-6 text-red-600" />,
    <FileSearch key="3" className="w-6 h-6 text-red-600" />,
    <CheckCircle key="4" className="w-6 h-6 text-emerald-600" />,
    <PackageCheck key="5" className="w-6 h-6 text-red-600" />
  ];

  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-y border-slate-200 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 mb-2 block">
            {lang === 'ta' ? 'எளிய 5 படிகள்' : 'Simple 5-Step Process'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {t.howItWorksSub}
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {t.steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-red-500 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-red-50 rounded-xl group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-red-600 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {idx < 4 && (
                <div className="hidden lg:block pt-4 text-right text-slate-400">
                  <ArrowRight className="w-4 h-4 inline group-hover:translate-x-1 text-red-600 transition-transform" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
