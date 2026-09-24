import React, { useEffect } from 'react';
import { X, Briefcase } from 'lucide-react';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
  avatarSarah: string;
  avatarMarc: string;
  avatarElena: string;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
  avatarSarah,
  avatarMarc,
  avatarElena,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const consultants = [
    {
      name: 'Marc Pepperwood',
      role: 'Directeur Associé · Pôle Finance & M&A',
      avatar: avatarMarc,
      experience: '22 ans d\'expérience',
      former: 'Ex-Partner Big 4 & Directeur Financier Groupe',
      bio: 'Spécialiste de la restructuration financière, gestion de trésorerie et modélisation complexe.',
    },
    {
      name: 'Sarah Laurent',
      role: 'Directrice de Mission · Stratégie de Croissance',
      avatar: avatarSarah,
      experience: '16 ans d\'expérience',
      former: 'Diplômée HEC Paris & Ex-Directrice Stratégie',
      bio: 'Pilote les plans d\'expansion, arbitrages de portefeuille et optimisation tarifaire.',
    },
    {
      name: 'Elena Vasseur',
      role: 'Directrice Associée · Excellence Opérationnelle',
      avatar: avatarElena,
      experience: '14 ans d\'expérience',
      former: 'Ingénieure CentraleSupelec & Lean Master',
      bio: 'Experte en transformation industrielle, chaîne logistique et optimisation des flux.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0f2025] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>L'Équipe des Directeurs Associés</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Des pairs expérimentés à vos côtés
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Aucune mission n'est déléguée à des juniors : vous échangez directement avec des associés chevronnés.
          </p>
        </div>

        {/* Consultants List */}
        <div className="space-y-4">
          {consultants.map((c, i) => (
            <div
              key={i}
              className="bg-[#142a30] border border-slate-700/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-lime-400/40 transition-colors"
            >
              <img
                src={c.avatar}
                alt={c.name}
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-lime-400/40 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-white">{c.name}</h3>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-lime-400/15 text-lime-400">
                    {c.experience}
                  </span>
                </div>
                <div className="text-xs text-lime-300 font-medium mt-0.5">{c.role}</div>
                <div className="text-[11px] text-slate-400 mt-1">{c.former}</div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{c.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recruitment / Contact banner */}
        <div className="mt-6 p-4 rounded-2xl bg-[#112328] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-white">Vous souhaitez rejoindre le collectif Wide ?</div>
            <div className="text-[11px] text-slate-400">Nous recrutons des Directeurs de mission seniors.</div>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-4 py-2 rounded-full bg-lime-400 text-slate-950 font-bold text-xs hover:bg-lime-300 transition-colors shrink-0"
          >
            Postuler ou Échanger
          </button>
        </div>

      </div>
    </div>
  );
};
