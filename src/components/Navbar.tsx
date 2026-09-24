import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'services', label: 'Services' },
];

const DROPDOWN_LINKS = [
  { id: 'methodologie', label: 'Comment ça fonctionne ?' },
  { id: 'roi-calculateur', label: 'Simulateur de ROI' },
  { id: 'etudes-cas', label: 'Études de cas réelles' },
  { id: 'faq', label: 'Questions fréquentes' },
];

export const Navbar: React.FC<NavbarProps> = React.memo(({ onOpenQuoteModal, onNavigate, activeSection }) => {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full pt-4 pb-3 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO: Wide */}
        <a 
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('accueil');
          }}
          className="flex items-center gap-2 text-white group"
        >
          {/* Stylized geometric loop logo mark */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-lime-400 to-emerald-400 flex items-center justify-center p-1.5 shadow-md shadow-lime-400/20 group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full stroke-slate-950 stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8l4 9 4-9 4 9 4-9" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white flex items-center">
            wide<span className="text-lime-400 text-3xl leading-none">.</span>
          </span>
        </a>

        {/* CENTER FLOATING PILL NAV (Screenshot match) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#102227]/90 border border-slate-700/60 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                activeSection === link.id
                  ? 'text-white bg-slate-800/80 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              onBlur={() => setTimeout(() => setPagesDropdownOpen(false), 200)}
              className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-colors"
            >
              <span>Pages</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {pagesDropdownOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 bg-[#13252a] border border-slate-700/70 rounded-2xl p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
                {DROPDOWN_LINKS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setPagesDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-300 hover:text-lime-400 hover:bg-slate-800/60 rounded-xl transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              activeSection === 'contact'
                ? 'text-white bg-slate-800/80 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* RIGHT CTA BUTTON (White pill with arrow icon inside circle) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="group relative inline-flex items-center gap-2.5 bg-white text-slate-950 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-md hover:bg-slate-100 hover:shadow-lg transition-all active:scale-98 whitespace-nowrap"
          >
            <span>Demander un devis</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800/80 text-slate-200 border border-slate-700"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto bg-[#102227] border border-slate-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-lime-400 hover:bg-slate-800/60 rounded-xl"
              >
                {link.label}
              </button>
            ))}
            
            <div className="border-t border-slate-800 pt-2 my-1">
              <div className="text-xs uppercase text-slate-500 font-semibold px-3 py-1">Pages</div>
              {DROPDOWN_LINKS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left w-full px-3 py-1.5 text-xs text-slate-300 hover:text-lime-400"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-lime-400 hover:bg-slate-800/60 rounded-xl"
            >
              Contact
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="mt-2 w-full py-2.5 bg-lime-400 text-slate-950 font-bold text-sm rounded-xl text-center"
            >
              Demander un devis
            </button>
          </div>
        </div>
      )}
    </header>
  );
});

Navbar.displayName = 'Navbar';

