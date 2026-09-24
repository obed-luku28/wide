import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

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

  const chapters = [
    { time: '00:00', title: 'Introduction : Le constat d\'inefficience financière', duration: '1m 15s' },
    { time: '01:15', title: 'La matrice Wide : Audit 360° et cartographie du cash', duration: '2m 30s' },
    { time: '03:45', title: 'Alignement opérationnel et élimination des goulets', duration: '1m 50s' },
    { time: '05:35', title: 'Cas client réel : +42% de marge nette en 9 mois', duration: '2m 10s' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0e1c20] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#122429]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white tracking-wide uppercase">Présentation · Wide Consulting</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-gradient-to-br from-[#091316] via-[#102328] to-[#152e35] flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
          
          {/* Subtle animated ambient lines */}
          <div className="absolute inset-0 bg-grid-subtle opacity-40"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-500/10 rounded-full blur-2xl"></div>

          {/* Video top status */}
          <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
            <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-slate-700">
              Chapitre {activeChapter + 1} / 4 : {chapters[activeChapter].title}
            </span>
            <span className="font-mono text-lime-400">1080p · Haute Définition</span>
          </div>

          {/* Interactive Screen Center Graphic */}
          <div className="relative z-10 my-auto text-center space-y-3">
            <div className="inline-flex p-3 rounded-2xl bg-lime-400/10 border border-lime-400/30 text-lime-400 mb-1">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Méthodologie de Valorisation d'Entreprise
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              Identifiez dès les 6 premières semaines des leviers concrets d'économies et de rentabilité.
            </p>
          </div>

          {/* Bottom Player Controls */}
          <div className="relative z-10 pt-4 space-y-2">
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
              <div 
                className="h-full bg-lime-400 transition-all duration-300"
                style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center font-bold hover:bg-lime-300 transition-colors"
                  aria-label={isPlaying ? "Mettre en pause" : "Lire"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button
                  onClick={() => setActiveChapter(0)}
                  className="p-1.5 hover:text-white"
                  title="Recommencer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 hover:text-white"
                  title={isMuted ? "Activer le son" : "Couper le son"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-slate-400">
                  {chapters[activeChapter].time} / 07:45
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote();
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Chapters Grid */}
        <div className="p-4 sm:p-5 bg-[#102328] border-t border-slate-800">
          <div className="text-xs font-semibold text-slate-400 mb-2">Sommaire de la présentation vidéo :</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`text-left p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                  activeChapter === idx
                    ? 'bg-lime-400/10 border-lime-400/50 text-white'
                    : 'bg-[#142930] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="truncate pr-2">
                  <span className="font-mono text-lime-400 font-bold mr-1.5">0{idx + 1}.</span>
                  <span>{chap.title}</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 shrink-0">{chap.duration}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
