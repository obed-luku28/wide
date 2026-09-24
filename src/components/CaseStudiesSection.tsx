import React, { useState, useMemo } from 'react';
import { Award } from 'lucide-react';

const STUDIES = [
  {
    id: 1,
    category: 'finance',
    categoryLabel: 'Conseil Financier',
    client: 'Société Minière & Sous-traitance Katanga',
    sector: 'Mines & Énergie (Kolwezi / Lubumbashi)',
    headline: '+38% de marge nette et 4,8M $ de liquidités dégagées',
    metrics: [
      { label: 'Trésorerie libérée', value: '+4,8 M $' },
      { label: 'Délai BFR clients', value: '-26 jours' },
      { label: 'EBITDA opérationnel', value: '+5,4 pts' },
    ],
    description: 'Optimisation de la trésorerie USD/CDF, renégociation bancaire et mise en conformité ARSP.',
    quote: "Wide a sécurisé notre trésorerie opérationnelle avec une rigueur remarquable.",
    author: 'Dieudonné Mwamba, Directeur Financier',
  },
  {
    id: 2,
    category: 'ops',
    categoryLabel: 'Conseil Opérationnel',
    client: 'LogiCongo Corridor Ouest',
    sector: 'Transport Fluvial & Routier (Kinshasa - Matadi)',
    headline: '-24% sur les coûts logistiques et fiabilité de livraison',
    metrics: [
      { label: 'Coûts de structure', value: '-24 %' },
      { label: 'Taux de rotation bateaux', value: '+35 %' },
      { label: 'Disponibilité flotte', value: '96,8 %' },
    ],
    description: 'Refonte des flux logistiques Matadi-Kinshasa et mise en place du suivi de flotte en temps réel.',
    quote: 'Une présence terrain immédiate qui a débloqué nos goulets d\'étranglement.',
    author: 'Aimé Mukendi, Directeur des Opérations',
  },
  {
    id: 3,
    category: 'strategy',
    categoryLabel: 'Conseil Stratégique',
    client: 'CongoTech Services SAS',
    sector: 'FinTech & Distribution Télécoms (Kinshasa - Gombe)',
    headline: 'Levée de fonds de 8,5M $ et expansion interprovinciale',
    metrics: [
      { label: 'Financement levé', value: '8,5 M $' },
      { label: 'Volume transactions', value: '+165 %' },
      { label: 'Nouveaux hubs RDC', value: '5 provinces' },
    ],
    description: 'Expansion provinciale, structuration de la gouvernance et levée de fonds auprès d\'investisseurs.',
    quote: 'Leur maîtrise du marché congolais a rassuré nos partenaires et investisseurs.',
    author: 'Sandrine Kasongo, Directrice Générale',
  },
];

export const CaseStudiesSection: React.FC = React.memo(() => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'finance' | 'ops' | 'strategy'>('all');

  const filtered = useMemo(() => {
    return activeFilter === 'all' 
      ? STUDIES 
      : STUDIES.filter(s => s.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="etudes-cas" className="py-20 bg-[#0b1518] relative section-deferred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-lime-400 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Chiffres & Rigueur en RDC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Des réussites quantifiées sur le sol congolais
            </h2>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center gap-1 p-1 bg-[#122328] border border-slate-800 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'finance', label: 'Finance' },
              { id: 'ops', label: 'Opérations' },
              { id: 'strategy', label: 'Stratégie' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-lime-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="bg-[#122328] border border-slate-700/60 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-500 transition-all duration-300"
            >
              <div>
                {/* Sector & tag */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-semibold text-lime-400">{study.categoryLabel}</span>
                  <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    {study.sector.split('(')[0].trim()}
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-mono mb-1">{study.client}</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                  {study.headline}
                </h3>

                {/* Quantitative metrics row */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-[#0d181c] rounded-2xl border border-slate-800 mb-4">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-base font-bold font-mono text-lime-400">{m.value}</div>
                      <div className="text-[9px] text-slate-400 leading-tight mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                  {study.description}
                </p>
              </div>

              {/* Verified testimonial quote */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs italic text-slate-300 mb-2">
                  « {study.quote} »
                </p>
                <div className="text-[11px] font-semibold text-slate-400">
                  {study.author}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

CaseStudiesSection.displayName = 'CaseStudiesSection';

