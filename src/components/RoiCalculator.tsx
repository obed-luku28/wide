import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenQuote: () => void;
}

const DOLLAR_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export const RoiCalculator: React.FC<RoiCalculatorProps> = React.memo(({ onOpenQuote }) => {
  // Inputs
  const [revenue, setRevenue] = useState<number>(3500000); // 3.5M $
  const [ebitdaMargin, setEbitdaMargin] = useState<number>(12); // 12%
  const [targetEfficiency, setTargetEfficiency] = useState<number>(14); // 14% improvement

  // Calculations memoized to avoid recomputation on unneeded renders
  const { currentEbitda, potentialSavings, newEbitda, addedValuation } = useMemo(() => {
    const curEbitda = revenue * (ebitdaMargin / 100);
    const potSavings = curEbitda * (targetEfficiency / 100);
    const nEbitda = curEbitda + potSavings;
    const valuationMultiple = 7.5; // Average B2B multiple
    const addValuation = potSavings * valuationMultiple;
    return {
      currentEbitda: curEbitda,
      potentialSavings: potSavings,
      newEbitda: nEbitda,
      addedValuation: addValuation,
    };
  }, [revenue, ebitdaMargin, targetEfficiency]);

  const estimatedWideRoi = 6.2; // 6.2x average ROI

  const formatDollar = (val: number) => DOLLAR_FORMATTER.format(val);

  return (
    <section id="roi-calculateur" className="py-20 relative bg-[#0e1a1e] border-y border-slate-800 section-deferred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-lime-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulateur Financier Interactif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Calculez l'impact financier d'une mission Wide
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Ajustez les paramètres de votre entreprise pour estimer vos gains potentiels de trésorerie et de rentabilité.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="bg-[#122429] border border-slate-700/70 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Sliders */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Slider 1: Chiffre d'affaires */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  Chiffre d'affaires annuel
                </label>
                <span className="text-base sm:text-lg font-bold font-mono text-lime-400">
                  {formatDollar(revenue)}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="30000000"
                step="250000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-lime-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>500 k$</span>
                <span>15 M$</span>
                <span>30 M$</span>
              </div>
            </div>

            {/* Slider 2: Marge d'EBITDA */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  Marge d'EBITDA actuelle
                </label>
                <span className="text-base sm:text-lg font-bold font-mono text-lime-400">
                  {ebitdaMargin} % <span className="text-xs text-slate-400 font-normal">({formatDollar(currentEbitda)})</span>
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="35"
                step="1"
                value={ebitdaMargin}
                onChange={(e) => setEbitdaMargin(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-lime-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>3 % (Tendu)</span>
                <span>15 % (Moyenne marché)</span>
                <span>35 % (Haute performance)</span>
              </div>
            </div>

            {/* Slider 3: Cible d'optimisation */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  Objectif d'optimisation BFR & coûts
                </label>
                <span className="text-base sm:text-lg font-bold font-mono text-lime-400">
                  +{targetEfficiency} %
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={targetEfficiency}
                onChange={(e) => setTargetEfficiency(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-lime-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>+5 % (Prudent)</span>
                <span>+15 % (Moyenne Wide)</span>
                <span>+30 % (Rupture stratégique)</span>
              </div>
            </div>

            {/* Trust points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Modèle d'honoraires indexé sur les résultats</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Mesure du ROI auditée à 90 jours</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#162e35] to-[#102126] border border-lime-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl"></div>

            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Impact Projeté Wide</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-lime-400/20 text-lime-300 border border-lime-400/30">
                Multiple {estimatedWideRoi}x
              </span>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Gain annuel de trésorerie net :</div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-lime-400 mt-1 tracking-tight">
                +{formatDollar(potentialSavings)}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                EBITDA révisé : <span className="text-slate-200 font-mono font-semibold">{formatDollar(newEbitda)} / an</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c181b] border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Valeur d'entreprise créée :</span>
                <span className="text-white font-mono font-bold">+{formatDollar(addedValuation)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Délai d'amortissement moyen :</span>
                <span className="text-lime-300 font-medium">4,2 mois</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-lime-400 text-slate-950 font-bold text-sm hover:bg-lime-300 transition-all shadow-lg active:scale-98"
            >
              <span>Valider ce plan d'économies</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
});

RoiCalculator.displayName = 'RoiCalculator';

