import React from 'react';
import { Search, Compass, Cog, Award, ArrowRight } from 'lucide-react';

interface MethodologySectionProps {
  onOpenQuote: () => void;
}

const STEPS = [
  {
    num: '01',
    title: 'Diagnostic 360° & Immersion',
    duration: 'Semaines 1 à 2',
    desc: 'Audit de la trésorerie, structure des coûts et identification des points de blocage opérationnels.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Modélisation & Feuille de Route',
    duration: 'Semaines 3 à 4',
    desc: 'Plan de trésorerie prévisionnel, objectifs d\'EBITDA et priorisation des actions.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'Exécution & Déploiement Terrain',
    duration: 'Mois 2 à 5',
    desc: 'Déploiement sur le terrain, refonte des processus et optimisation des contrats clés.',
    icon: Cog,
  },
  {
    num: '04',
    title: 'Audit du ROI & Pérennisation',
    duration: 'Mois 6 et suivi',
    desc: 'Mesure objective des gains générés et transmission des compétences aux équipes.',
    icon: Award,
  },
];

export const MethodologySection: React.FC<MethodologySectionProps> = React.memo(({ onOpenQuote }) => {
  return (
    <section id="methodologie" className="py-20 bg-[#0d181c] relative border-t border-slate-800 section-deferred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-lime-400 text-xs font-semibold mb-3">
            <span>Notre Approche</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comment ça fonctionne ?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Une méthode pragmatique et orientée résultats, rodée auprès des leaders du marché.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.num} 
                className="relative bg-[#122328] border border-slate-700/60 rounded-3xl p-6 flex flex-col justify-between hover:border-lime-400/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-lime-400/40 group-hover:text-lime-400 transition-colors">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#172c32] text-lime-400 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-lime-400 mb-1">
                    {s.duration}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Jalon validé</span>
                  <span className="font-mono text-lime-400 font-semibold">100% auditable</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner */}
        <div className="mt-12 bg-gradient-to-r from-[#14282e] via-[#173038] to-[#14282e] border border-lime-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-base">Vous souhaitez auditer votre situation ?</h4>
            <p className="text-slate-400 text-xs mt-0.5">Premier échange de cadrage (45 min) offert et confidentiel.</p>
          </div>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-slate-950 font-bold text-xs sm:text-sm hover:bg-lime-300 transition-colors shrink-0 shadow-md"
          >
            <span>Réserver un créneau</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
});

MethodologySection.displayName = 'MethodologySection';

