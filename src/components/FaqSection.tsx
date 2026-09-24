import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = React.memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Comment s\'articule la tarification des missions Wide ?',
      answer: 'Nos honoraires combinent une base forfaitaire pour l\'intervention terrain et un success fee indexé sur les gains ou économies réellement dégagés.',
    },
    {
      question: 'Quel est le délai de mobilisation d\'une équipe ?',
      answer: 'Nos directeurs associés sont opérationnels sous 5 à 10 jours ouvrés après la signature de la lettre de cadrage.',
    },
    {
      question: 'Quelle garantie de confidentialité appliquez-vous ?',
      answer: 'Un accord de non-divulgation (NDA) bilatéral strict est systématiquement signé avant tout partage de données stratégiques ou financières.',
    },
    {
      question: 'Intervenez-vous sur site ou à distance ?',
      answer: 'Nous combinons une présence physique sur vos sites et usines pour le diagnostic, complétée par un pilotage agile à distance.',
    },
    {
      question: 'Nos équipes internes sont très occupées, comment s\'adapter ?',
      answer: 'Nos experts prennent en charge l\'analyse lourde et la modélisation pour alléger le travail de vos équipes sans les surcharger.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#0d181c] relative border-t border-slate-800 section-deferred">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-lime-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Des réponses claires et transparentes sur nos modes d'intervention.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#122328] border border-slate-700/60 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-white hover:text-lime-300 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-lime-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

FaqSection.displayName = 'FaqSection';

