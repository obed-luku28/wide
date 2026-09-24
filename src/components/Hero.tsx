import React from 'react';
import { ArrowUpRight, Play, Star, Plus, Building2, Target, Coins, ArrowRight } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup.tsx';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenVideo: () => void;
  onOpenTeam: () => void;
  onOpenService: (serviceId: string) => void;
  onScrollToMethodology: () => void;
  meetingImage: string;
  avatarSarah: string;
  avatarMarc: string;
  avatarElena: string;
}

export const Hero: React.FC<HeroProps> = React.memo(({
  onOpenQuote,
  onOpenVideo,
  onOpenTeam,
  onOpenService,
  onScrollToMethodology,
  meetingImage,
  avatarSarah,
  avatarMarc,
  avatarElena,
}) => {
  return (
    <section id="accueil" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-grid-subtle">
      {/* Background ambient lighting glows matching the screenshot */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2">
          
          {/* LEFT COLUMN: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-7">
            
            {/* Pill Badge: Bienvenue chez Wide */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14282e]/80 border border-lime-400/25 text-lime-300 text-xs font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
              <span>Bienvenue chez Wide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-xl text-balance">
              Là où l'expertise crée l'excellence
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-lg font-normal">
              Conseil de référence en stratégie, finance et opérations. Des leviers concrets pour accélérer votre rentabilité.
            </p>

            {/* Action Buttons: Commencer + Play button */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* Primary Lime Button */}
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-3 bg-lime-400 text-slate-950 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20 active:scale-98"
              >
                <span>Commencer</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-950 text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>

              {/* Play Button */}
              <button
                onClick={onOpenVideo}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/95 text-slate-900 hover:bg-white hover:scale-105 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                aria-label="Voir la vidéo de présentation"
                title="Découvrir la vidéo"
              >
                <Play className="w-5 h-5 fill-slate-900 text-slate-900 ml-0.5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Social Proof & Team Row (Screenshot match) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-800/80">
              
              {/* Ratings block */}
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-medium ml-1">(4,5/5)</span>
                </div>
                <div className="flex items-baseline gap-2.5 mt-1.5">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">4.5</span>
                  <span className="text-xs text-slate-400 leading-snug">
                    Avis vérifiés de nos clients partenaires
                  </span>
                </div>
              </div>

              {/* Team block */}
              <div>
                <div className="text-xs font-semibold text-slate-300">
                  Directeurs associés dédiés :
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <img 
                      src={avatarSarah} 
                      alt="Consultante Sarah" 
                      width="36"
                      height="36"
                      decoding="async"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0b1518] object-cover"
                    />
                    <img 
                      src={avatarMarc} 
                      alt="Consultant Marc" 
                      width="36"
                      height="36"
                      decoding="async"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0b1518] object-cover"
                    />
                    <img 
                      src={avatarElena} 
                      alt="Consultante Elena" 
                      width="36"
                      height="36"
                      decoding="async"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0b1518] object-cover"
                    />
                  </div>

                  {/* Plus button */}
                  <button
                    onClick={onOpenTeam}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-slate-950 font-bold hover:bg-lime-400 hover:scale-105 transition-all shadow-sm"
                    aria-label="Voir l'équipe complète"
                    title="Voir l'équipe"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: 3D Perspective Smartphones */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <PhoneMockup onOpenConsultant={onOpenTeam} avatarMarc={avatarMarc} />
          </div>

        </div>

        {/* BOTTOM FLOATING 4-CARD STRIP (Screenshot Match) */}
        <div className="mt-14 lg:mt-20">
          <div className="bg-[#122328]/95 border border-slate-700/60 rounded-3xl p-3 md:p-4 backdrop-blur-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 items-stretch">
            
            {/* CARD 1: Meeting image card ("Comment ça fonctionne ?") */}
            <div 
              onClick={onScrollToMethodology}
              className="lg:col-span-3 relative group rounded-2xl overflow-hidden min-h-[170px] cursor-pointer border border-slate-700/50"
            >
              <img 
                src={meetingImage} 
                alt="Équipe Wide en réunion stratégique" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-base leading-snug">
                  Comment ça fonctionne ?
                </h3>
                <div className="flex items-center gap-1.5 text-lime-400 text-xs font-semibold mt-1 group-hover:underline">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* CARD 2: Operational Consulting */}
            <div 
              onClick={() => onOpenService('operations')}
              className="lg:col-span-3 bg-[#152a30]/80 hover:bg-[#183138] transition-colors rounded-2xl p-4 border border-slate-700/40 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center mb-3 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base group-hover:text-lime-300 transition-colors">
                  Conseil Opérationnel
                </h3>
                <p className="text-xs text-slate-300/80 leading-relaxed mt-1.5">
                  Optimisation des processus, réduction des cycles et productivité des équipes.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-lime-400/90 pt-3 flex items-center gap-1">
                <span>Découvrir l'offre</span>
                <span className="text-xs">→</span>
              </div>
            </div>

            {/* CARD 3: Strategy Consulting */}
            <div 
              onClick={() => onOpenService('strategy')}
              className="lg:col-span-3 bg-[#152a30]/80 hover:bg-[#183138] transition-colors rounded-2xl p-4 border border-slate-700/40 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center mb-3 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base group-hover:text-lime-300 transition-colors">
                  Conseil Stratégique
                </h3>
                <p className="text-xs text-slate-300/80 leading-relaxed mt-1.5">
                  Diagnostic de marché, politique tarifaire et leviers de croissance pérennes.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-lime-400/90 pt-3 flex items-center gap-1">
                <span>Découvrir l'offre</span>
                <span className="text-xs">→</span>
              </div>
            </div>

            {/* CARD 4: Financial Consulting */}
            <div 
              onClick={() => onOpenService('financial')}
              className="lg:col-span-3 bg-[#152a30]/80 hover:bg-[#183138] transition-colors rounded-2xl p-4 border border-slate-700/40 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center mb-3 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base group-hover:text-lime-300 transition-colors">
                  Conseil Financier
                </h3>
                <p className="text-xs text-slate-300/80 leading-relaxed mt-1.5">
                  Pilotage du BFR, haut de bilan, valorisation et maximisation de l'EBITDA.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-lime-400/90 pt-3 flex items-center gap-1">
                <span>Découvrir l'offre</span>
                <span className="text-xs">→</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

