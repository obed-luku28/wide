import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = React.memo(({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#091215] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-lime-400 to-emerald-400 flex items-center justify-center p-1 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full stroke-slate-950 stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8l4 9 4-9 4 9 4-9" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                wide<span className="text-lime-400 text-2xl leading-none">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Là où l'expertise crée l'excellence. Conseil de référence en stratégie, finance d'entreprise et opérations en République Démocratique du Congo.
            </p>
            <div className="text-[11px] text-lime-400/90 font-medium">
              Kinshasa · Lubumbashi · Kolwezi
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('accueil')} className="hover:text-lime-400 transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('a-propos')} className="hover:text-lime-400 transition-colors">
                  À propos du cabinet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-lime-400 transition-colors">
                  Nos expertises
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('methodologie')} className="hover:text-lime-400 transition-colors">
                  Méthodologie d'intervention
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('roi-calculateur')} className="hover:text-lime-400 transition-colors">
                  Simulateur de rentabilité
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Pôles d'Excellence</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-lime-400 transition-colors">
                  Finance d'Entreprise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-lime-400 transition-colors">
                  Secteur Minier & Sous-traitance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-lime-400 transition-colors">
                  Logistique & Chaîne de valeur
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('etudes-cas')} className="hover:text-lime-400 transition-colors">
                  Études de cas réelles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-lime-400 transition-colors">
                  Foire Aux Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Action / Contact */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Passer à l'action</div>
            <p className="text-xs text-slate-400">
              Échangez en toute discrétion avec l'un de nos directeurs associés.
            </p>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400 text-slate-950 font-bold text-xs hover:bg-lime-300 transition-colors shadow-sm"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Wide Consulting RDC SARL. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="#accueil" className="hover:text-slate-300 transition-colors">Droit OHADA & Mentions Légales</a>
            <a href="#accueil" className="hover:text-slate-300 transition-colors">Politique de Confidentialité</a>
            <a href="#accueil" className="hover:text-slate-300 transition-colors">Réglementation RDC</a>
          </div>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

