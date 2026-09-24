import React from 'react';
import { Check, ArrowLeft, Bell, Search, Home, BarChart3, CreditCard, User, TrendingUp, Sparkles } from 'lucide-react';

interface PhoneMockupProps {
  onOpenConsultant?: () => void;
  avatarMarc: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = React.memo(({ onOpenConsultant, avatarMarc }) => {
  const revenueAmount = '$1,543.00';
  const npvAmount = '$89,320.00';

  return (
    <div className="relative w-full max-w-[580px] mx-auto perspective-container select-none">
      {/* Top Floating Badge */}
      <div className="relative z-30 mb-3 flex justify-end">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#132428]/90 border border-emerald-500/20 backdrop-blur-md shadow-lg text-xs md:text-sm text-slate-200">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-lime-400 text-slate-950 font-bold">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </span>
          <span className="font-medium tracking-tight">
            Accompagnement financier sur-mesure
          </span>
        </div>
      </div>

      <div className="relative flex justify-center items-center min-h-[500px] md:min-h-[560px]">
        {/* BACK PHONE */}
        <div 
          className="absolute z-10 w-[240px] md:w-[275px] h-[490px] md:h-[530px] rounded-[44px] bg-[#1a2c32] p-2.5 border-[6px] border-[#223940] phone-tilt-back transition-transform duration-500 hover:translate-z-0"
          style={{ left: '15%' }}
        >
          <div className="w-full h-full rounded-[34px] bg-[#0d1a1e] overflow-hidden flex flex-col justify-between text-slate-100 p-4 border border-slate-700/40">
            {/* Mock screen back */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-semibold text-slate-400">Profil d'actifs</span>
                <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse"></span>
              </div>

              <div className="p-3 rounded-2xl bg-[#14262c] border border-slate-700/40">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Croissance Trimestrielle</div>
                <div className="text-xl font-bold text-lime-400 mt-0.5">+34.8%</div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-lime-400 rounded-full"></div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-lime-400/10 border border-lime-400/30 text-lime-300 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold">Audit de Rentabilité</div>
                  <div className="text-[9px] text-lime-400/70">Statut : Validé</div>
                </div>
                <Sparkles className="w-4 h-4 text-lime-400" />
              </div>

              <div className="space-y-2 pt-2">
                <div className="h-9 rounded-xl bg-[#15272e] flex items-center justify-between px-3 border border-slate-800">
                  <span className="text-[10px] text-slate-300">Trésorerie opérationnelle</span>
                  <span className="text-[10px] font-mono text-white">$412,000</span>
                </div>
                <div className="h-9 rounded-xl bg-[#15272e] flex items-center justify-between px-3 border border-slate-800">
                  <span className="text-[10px] text-slate-300">Excédent brut (EBITDA)</span>
                  <span className="text-[10px] font-mono text-lime-400">+28.4%</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#132429] border border-slate-700/30 text-center">
              <span className="text-[10px] text-slate-400">Wide Performance Engine™</span>
            </div>
          </div>
        </div>

        {/* FRONT PHONE */}
        <div 
          className="relative z-20 w-[260px] md:w-[295px] h-[520px] md:h-[570px] rounded-[48px] bg-[#162327] p-2.5 border-[7px] border-[#2c4750] phone-tilt-front transition-transform duration-500"
          style={{ right: '-5%' }}
        >
          {/* Outer glossy rim */}
          <div className="w-full h-full rounded-[38px] bg-white overflow-hidden flex flex-col text-slate-800 shadow-inner">
            
            {/* Phone Top Header (Lime Accent Bar) */}
            <div className="bg-lime-400 pt-3 pb-4 px-4 text-slate-950">
              {/* Dynamic island / speaker simulation */}
              <div className="w-20 h-3.5 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-end px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <div className="flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Portefeuille</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-950/10 px-1.5 py-0.5 rounded font-mono font-bold">
                    $ USD
                  </span>
                  <Bell className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Main Revenue Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-lime-500/20">
                <div className="text-[10px] font-medium text-slate-600">Revenus Journaliers</div>
                <div className="text-xl md:text-2xl font-black tracking-tight text-slate-950 font-mono">
                  {revenueAmount}
                </div>
              </div>
            </div>

            {/* Phone Body */}
            <div className="flex-1 bg-white p-3.5 overflow-y-auto space-y-3">
              
              {/* Chart section */}
              <div className="rounded-2xl bg-slate-50 p-2.5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-slate-700">Prévision de Revenus</span>
                  <span className="text-[9px] font-semibold text-emerald-600 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +18.2%
                  </span>
                </div>

                {/* SVG Curve Chart matching screenshot */}
                <div className="relative h-20 w-full pt-1">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 70">
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a3e635" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#a3e635" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 45 C 30 50, 45 35, 75 30 C 105 25, 120 45, 150 20 C 175 0, 190 25, 200 15 L 200 70 L 0 70 Z"
                      fill="url(#chartFill)"
                    />
                    <path
                      d="M 0 45 C 30 50, 45 35, 75 30 C 105 25, 120 45, 150 20 C 175 0, 190 25, 200 15"
                      fill="none"
                      stroke="#4d7c0f"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Active highlight pin */}
                    <g transform="translate(150, 20)">
                      <circle r="4" fill="#65a30d" />
                      <circle r="2" fill="#ffffff" />
                      {/* Tooltip badge */}
                      <rect x="-32" y="-18" width="64" height="15" rx="4" fill="#0f1d21" />
                      <text x="0" y="-8" fill="#a3e635" fontSize="8" fontWeight="bold" textAnchor="middle">
                        {npvAmount}
                      </text>
                    </g>
                  </svg>
                  <div className="flex justify-between text-[8px] text-slate-400 mt-1 font-mono">
                    <span>Jan</span>
                    <span>Fév</span>
                    <span>Mar</span>
                    <span>Avr</span>
                    <span>Mai</span>
                    <span>Juin</span>
                  </div>
                </div>
              </div>

              {/* Project Indicator card */}
              <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-lime-300 flex items-center justify-center font-bold text-slate-900 text-xs">
                    +
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-medium">Indicateur Valeur Actuelle</div>
                    <div className="text-[11px] font-bold text-slate-800 font-mono">VAN : {npvAmount}</div>
                  </div>
                </div>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-lime-100 text-lime-800">
                  +12.4%
                </span>
              </div>

              {/* Consultant profile snippet */}
              <button 
                onClick={onOpenConsultant}
                className="w-full text-left rounded-xl bg-slate-50 p-2 border border-slate-100 flex items-center gap-2 hover:bg-slate-100 transition-colors"
              >
                <img 
                  src={avatarMarc} 
                  alt="Marc Pepperwood" 
                  width="32"
                  height="32"
                  decoding="async"
                  className="w-8 h-8 rounded-full object-cover border border-slate-300"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-slate-900 truncate">Marc Pepperwood</div>
                  <div className="text-[9px] text-slate-500 truncate">Directeur Conseil Financier</div>
                </div>
                <div className="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600">
                  <Search className="w-3 h-3" />
                </div>
              </button>

            </div>

            {/* Bottom App Nav */}
            <div className="h-11 bg-white border-t border-slate-100 px-5 flex items-center justify-between text-slate-400">
              <Home className="w-4 h-4 text-lime-600" />
              <BarChart3 className="w-4 h-4 hover:text-slate-600" />
              <CreditCard className="w-4 h-4 hover:text-slate-600" />
              <User className="w-4 h-4 hover:text-slate-600" />
            </div>

          </div>
        </div>

        {/* FLOATING EXPERIENCE BADGE (25+ Années d'expérience) */}
        <div className="absolute -bottom-2 right-2 md:right-8 z-30 bg-lime-400 text-slate-950 p-4 md:p-5 rounded-3xl shadow-2xl border border-lime-300/60 transform hover:scale-105 transition-transform duration-200">
          <div className="text-3xl md:text-4xl font-black tracking-tight leading-none">
            25+
          </div>
          <div className="text-[11px] md:text-xs font-bold text-slate-900 tracking-tight mt-1 whitespace-nowrap">
            Années d'Expérience
          </div>
        </div>

      </div>
    </div>
  );
});

PhoneMockup.displayName = 'PhoneMockup';

