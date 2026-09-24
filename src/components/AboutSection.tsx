import React from 'react';
import { Shield, Check } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = React.memo(({ onOpenQuote }) => {
  return (
    <section id="a-propos" className="py-20 bg-[#0c181b] relative border-t border-slate-800 section-deferred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-lime-400 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>À Propos de Wide en RDC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
              L'excellence du conseil stratégique et financier au cœur de la RDC
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Implanté en République Démocratique du Congo, Wide accompagne les groupes industriels, PME et institutions avec les plus hauts standards internationaux, ancrés dans les réalités du terrain congolais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#122328] border border-slate-700/60 space-y-1">
                <div className="text-lime-400 font-bold text-sm flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  Pragmatisme Terrain en RDC
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Présence directe à Kinshasa, Lubumbashi et Kolwezi. Intervention sur vos sites opérationnels et usines.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#122328] border border-slate-700/60 space-y-1">
                <div className="text-lime-400 font-bold text-sm flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  Maîtrise Fiscale & Réglementaire
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Conformité totale avec le droit OHADA, les exigences ARSP et le code minier congolais.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-colors shadow-md"
              >
                <span>Échanger avec un associé</span>
              </button>
            </div>
          </div>

          {/* Right Stats & Highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-[#13252a] border border-slate-700/70 rounded-3xl p-6 text-center space-y-1">
              <div className="text-4xl font-black font-mono text-lime-400">25+</div>
              <div className="text-xs font-semibold text-slate-200">Années d'expérience</div>
              <div className="text-[10px] text-slate-400">expertises combinées</div>
            </div>

            <div className="bg-[#13252a] border border-slate-700/70 rounded-3xl p-6 text-center space-y-1">
              <div className="text-4xl font-black font-mono text-lime-400">120+</div>
              <div className="text-xs font-semibold text-slate-200">Missions Réalisées</div>
              <div className="text-[10px] text-slate-400">en RDC et Afrique Centrale</div>
            </div>

            <div className="bg-[#13252a] border border-slate-700/70 rounded-3xl p-6 text-center space-y-1">
              <div className="text-4xl font-black font-mono text-lime-400">98%</div>
              <div className="text-xs font-semibold text-slate-200">Recommandation</div>
              <div className="text-[10px] text-slate-400">dirigeants partenaires</div>
            </div>

            <div className="bg-[#13252a] border border-slate-700/70 rounded-3xl p-6 text-center space-y-1">
              <div className="text-4xl font-black font-mono text-lime-400">4.5/5</div>
              <div className="text-xs font-semibold text-slate-200">Satisfaction Certifiée</div>
              <div className="text-[10px] text-slate-400">enquêtes de satisfaction</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

