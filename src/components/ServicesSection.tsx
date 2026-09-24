import React, { useState } from 'react';
import { Building2, Target, Coins, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote: (serviceType?: string) => void;
  initialActive?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ onOpenQuote, initialActive = 'financial' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialActive);

  const services = [
    {
      id: 'financial',
      title: 'Conseil Financier & Haut de Bilan',
      badge: 'Expertise Fondatrice',
      icon: Coins,
      shortDesc: 'Pilotage de la trésorerie, ingénierie de la dette et valorisation d\'entreprise.',
      focus: 'Directions Financières, Fonds d\'investissement, Dirigeants',
      metrics: '+28% de trésorerie disponible sous 6 mois',
      deliverables: [
        'Modélisation dynamique du BFR et trésorerie prévisionnelle 13 semaines',
        'Audit de rentabilité et restructuration des centres de coûts',
        'Accompagnement levées de fonds (Séries A/B/C) et M&A',
        'Négociation bancaire et refinancement de la dette',
      ],
    },
    {
      id: 'strategy',
      title: 'Conseil Stratégique & Croissance',
      badge: 'Positionnement Marché',
      icon: Target,
      shortDesc: 'Vecteurs de croissance rentables, diversification et modèle d\'affaires pérenne.',
      focus: 'Comités de direction, Conseils d\'administration, Fondateurs',
      metrics: '+40% de parts de marché sur segments cibles',
      deliverables: [
        'Analyse concurrentielle et opportunités d\'arbitrage',
        'Optimisation du pricing power et rentabilité par offre',
        'Pénétration de nouveaux marchés et partenariats',
        'Gouvernance stratégique et alignement des actionnaires',
      ],
    },
    {
      id: 'operations',
      title: 'Conseil Opérationnel & Performance',
      badge: 'Excellence des Processus',
      icon: Building2,
      shortDesc: 'Suppression des frottements opérationnels et maximisation du rendement des équipes.',
      focus: 'Directions des Opérations, Sites industriels, Supply Chain',
      metrics: '-32% de temps de cycle de production',
      deliverables: [
        'Cartographie des flux (VSM) et élimination des gaspillages',
        'Optimisation supply chain et réduction des stocks',
        'Management visuel et indicateurs de performance temps réel',
        'Conduite du changement pour une adoption pérenne',
      ],
    },
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];
  const IconComponent = currentService.icon;

  return (
    <section id="services" className="py-20 relative bg-[#0b1518] section-deferred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-lime-400 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Nos Domaines d'Intervention</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Des expertises pointues pour des résultats d'exception
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Chaque mission est pilotée directement par un Directeur Associé senior.
          </p>
        </div>

        {/* Tab Navigation Controls (Segmented clean bar) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#122328] border border-slate-800 rounded-2xl mb-8">
          {services.map((s) => {
            const SIcon = s.icon;
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-lime-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <SIcon className="w-4 h-4" />
                <span>{s.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-[#122328]/90 border border-slate-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-lime-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-lime-400 uppercase tracking-wider">{currentService.badge}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{currentService.title}</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentService.shortDesc}
              </p>

              {/* Focus target */}
              <div className="text-xs text-slate-400 bg-[#0e1c20] p-3 rounded-xl border border-slate-800">
                <span className="font-semibold text-slate-200">Destiné à : </span>
                <span>{currentService.focus}</span>
              </div>

              {/* Deliverables checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Livrables opérationnels de la mission :</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-[#162a30]/50 p-2.5 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right KPI & Direct Action */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#162e35] to-[#0f1f23] border border-lime-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Impact Mesuré Moyen</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-lime-400 font-mono">
                  {currentService.metrics}
                </div>
                <div className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Moyenne constatée sur plus de 120 missions en RDC et à l'international.
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-700/60">
                <button
                  onClick={() => onOpenQuote(currentService.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-lime-400 text-slate-950 font-bold text-sm hover:bg-lime-300 transition-colors shadow-lg active:scale-98"
                >
                  <span>Demander un devis pour ce pôle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-slate-400">
                  Devis personnalisé sans engagement sous 24h
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

