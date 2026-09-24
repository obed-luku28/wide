import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, Calculator, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = 'financial' }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [service, setService] = useState(defaultService);
  const [companySize, setCompanySize] = useState('PME (10-49 salariés)');
  const [budget, setBudget] = useState('15 000 $ - 40 000 $ USD');
  const [location, setLocation] = useState('Kinshasa (Gombe)');
  const [timeline, setTimeline] = useState('Dans les 30 jours');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    timerRef.current = setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0f1f24] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Demande de devis transmise avec succès !</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Merci <span className="font-semibold text-white">{formData.fullName || 'Cher Dirigeant'}</span>. L'un de nos directeurs associés à <span className="text-lime-300 font-semibold">{location}</span> analysera vos paramètres et vous contactera sous 24 heures ouvrées pour une étude préliminaire confidentielle.
            </p>
            <div className="p-4 rounded-2xl bg-[#142930] border border-slate-700/60 max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Pôle sollicité :</span>
                <span className="font-medium text-lime-400 capitalize">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Implantation RDC :</span>
                <span className="font-medium text-slate-200">{location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Taille de l'entreprise :</span>
                <span className="font-medium text-slate-200">{companySize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Délai estimé de cadrage :</span>
                <span className="font-medium text-slate-200">24 à 48 heures ouvrées</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-full bg-lime-400 text-slate-950 font-bold text-sm hover:bg-lime-300 transition-colors"
            >
              Fermer cette fenêtre
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-semibold mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Estimation d'honoraires & devis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Demander un devis en RDC
              </h2>
              <p className="text-slate-300 text-sm mt-1">
                Bureaux à Kinshasa et Lubumbashi. Chiffrage adapté à vos enjeux.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 pb-2 border-b border-slate-800">
                <span className={`px-2 py-0.5 rounded ${step === 1 ? 'bg-lime-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Étape 1</span>
                <span>Périmètre</span>
                <span className="text-slate-600">/</span>
                <span className={`px-2 py-0.5 rounded ${step === 2 ? 'bg-lime-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Étape 2</span>
                <span>Coordonnées</span>
              </div>

              {step === 1 ? (
                <div className="space-y-5">
                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Domaine de conseil souhaité
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'financial', label: 'Conseil Financier', desc: 'BFR, devises USD/CDF, M&A' },
                        { id: 'strategy', label: 'Conseil Stratégique', desc: 'Marché RDC, gouvernance' },
                        { id: 'operations', label: 'Conseil Opérationnel', desc: 'Mines, logistique, usines' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setService(item.id)}
                          className={`text-left p-3 rounded-2xl border transition-all ${
                            service === item.id
                              ? 'bg-lime-400/15 border-lime-400 text-white shadow-md'
                              : 'bg-[#14282e] border-slate-700/60 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          <div className="text-xs font-bold text-white">{item.label}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Location in DRC */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Localisation principale en RDC
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'Kinshasa (Gombe)',
                        'Lubumbashi (Katanga)',
                        'Kolwezi (Lualaba)',
                        'Autre province RDC',
                      ].map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => setLocation(loc)}
                          className={`py-2 px-2.5 text-center text-xs rounded-xl border transition-all ${
                            location === loc
                              ? 'bg-lime-400 text-slate-950 font-bold border-lime-400'
                              : 'bg-[#14282e] border-slate-700/60 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Company size */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Taille de votre structure
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'PME locale (< 20 p.)',
                        'Entreprise (20-100 p.)',
                        'Grande Entreprise / Mine',
                        'Institution / Bailleur',
                      ].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setCompanySize(size)}
                          className={`py-2 px-2.5 text-center text-xs rounded-xl border transition-all ${
                            companySize === size
                              ? 'bg-lime-400 text-slate-950 font-bold border-lime-400'
                              : 'bg-[#14282e] border-slate-700/60 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Budget range in USD (Standard corporate RDC) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Délai d'intervention souhaité
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-[#14282e] border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-400"
                      >
                        <option value="Urgence (< 15 jours)">Urgence (&lt; 15 jours)</option>
                        <option value="Dans les 30 jours">Dans les 30 jours</option>
                        <option value="Trimestre à venir">Trimestre à venir</option>
                        <option value="Exploratoire">Phase exploratoire / cadrage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Fourchette budgétaire envisagée (USD)
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-[#14282e] border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-400"
                      >
                        <option value="10 000 $ - 25 000 $ USD">10 000 $ - 25 000 $ USD (Audit rapide)</option>
                        <option value="25 000 $ - 60 000 $ USD">25 000 $ - 60 000 $ USD (Mission 3-6 mois)</option>
                        <option value="60 000 $ - 150 000 $ USD">60 000 $ - 150 000 $ USD (Transformation globale)</option>
                        <option value="Sur mesure">Sur-mesure / Grand Compte</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-slate-950 font-bold text-xs sm:text-sm hover:bg-lime-300 transition-colors shadow-md"
                    >
                      <span>Continuer vers vos coordonnées</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Nom et prénom du dirigeant *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Patrick Ilunga"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#14282e] border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-lime-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Société ou Organisation en RDC *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Congo Mining & Logistics SARL"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#14282e] border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-lime-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="p.ilunga@entreprise.cd"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#14282e] border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-lime-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Téléphone direct (Indicatif +243) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+243 82 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#14282e] border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-lime-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Détails de votre enjeu en RDC (optionnel)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Optimisation du BFR en devises USD/CDF, négociation bancaire à Kinshasa, restructuration opérationnelle de nos dépôts..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#14282e] border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-lime-400 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                    <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Engagement strict de confidentialité (NDA) conforme aux normes OHADA et professionnelles.</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      ← Modifier les paramètres
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-lime-400 text-slate-950 font-bold text-xs sm:text-sm hover:bg-lime-300 transition-colors shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmission en cours...</span>
                      ) : (
                        <>
                          <span>Recevoir mon estimation chiffrée</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
