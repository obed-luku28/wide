import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building } from 'lucide-react';

export const ContactSection: React.FC = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande générale',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [sending, setSending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    timerRef.current = setTimeout(() => {
      setSending(false);
      setIsSent(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-20 bg-[#0b1518] relative border-t border-slate-800 section-deferred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left info - Adresses RDC */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-lime-400 text-xs font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>Bureaux & Contact en RDC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Nos bureaux à Kinshasa & Lubumbashi
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Nos directeurs associés à Kinshasa et dans le Katanga vous répondent sous 24h pour étudier vos enjeux en toute discrétion.
            </p>

            <div className="space-y-4 pt-2">
              {/* Siège Kinshasa Gombe */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-xl bg-[#14282e] text-lime-400 flex items-center justify-center shrink-0 border border-slate-700 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white flex items-center gap-2">
                    <span>Siège Kinshasa</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 bg-lime-400/20 text-lime-300 rounded">Gombe</span>
                  </div>
                  <div className="text-slate-300 text-xs">Immeuble Crown Tower, 4ème étage</div>
                  <div className="text-slate-400 text-xs">Boulevard du 30 Juin, Gombe, Kinshasa</div>
                </div>
              </div>

              {/* Bureau Régional Katanga - Lubumbashi */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-xl bg-[#14282e] text-lime-400 flex items-center justify-center shrink-0 border border-slate-700 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white flex items-center gap-2">
                    <span>Direction Katanga</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 bg-slate-800 text-slate-300 rounded">Lubumbashi</span>
                  </div>
                  <div className="text-slate-300 text-xs">Immeuble Hypnose, 2ème niveau</div>
                  <div className="text-slate-400 text-xs">Avenue Kilela Balanda, Lubumbashi</div>
                </div>
              </div>

              {/* Antenne Kolwezi */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-xl bg-[#14282e] text-lime-400 flex items-center justify-center shrink-0 border border-slate-700 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white flex items-center gap-2">
                    <span>Antenne Lualaba</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 bg-slate-800 text-slate-300 rounded">Kolwezi</span>
                  </div>
                  <div className="text-slate-400 text-xs">Centre d'Affaires Manika, Kolwezi</div>
                </div>
              </div>

              {/* Téléphone RDC */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-xl bg-[#14282e] text-lime-400 flex items-center justify-center shrink-0 border border-slate-700 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Ligne Directe RDC</div>
                  <div className="text-slate-300 text-xs font-mono font-semibold">+243 82 500 44 00 / +243 97 120 55 00</div>
                  <div className="text-slate-500 text-[11px]">Disponible sur WhatsApp Professionnel</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-xl bg-[#14282e] text-lime-400 flex items-center justify-center shrink-0 border border-slate-700 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Courrier Électronique</div>
                  <div className="text-slate-300 text-xs font-mono font-semibold">contact@wide.cd</div>
                </div>
              </div>

              {/* Engagement */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-xl bg-[#14282e] text-lime-400 flex items-center justify-center shrink-0 border border-slate-700 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Disponibilité</div>
                  <div className="text-slate-400 text-xs">Lundi au samedi (08h00 - 18h30)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 bg-[#122328] border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl">
            {isSent ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message bien reçu !</h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                  Merci pour votre confiance. Notre équipe reprendra contact avec vous sous 24h ouvrées.
                </p>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'Demande générale', message: '' });
                  }}
                  className="px-5 py-2 rounded-full bg-lime-400 text-slate-950 font-bold text-xs hover:bg-lime-300 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white">Échanger avec un Directeur Associé</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Votre nom complet *</label>
                    <input
                      type="text"
                      required
                      placeholder="Patrick Ilunga"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#162a30] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-lime-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email professionnel *</label>
                    <input
                      type="email"
                      required
                      placeholder="p.ilunga@entreprise.cd"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#162a30] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-lime-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Téléphone (RDC ou international)</label>
                    <input
                      type="tel"
                      placeholder="+243 82 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#162a30] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-lime-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Objet de votre demande</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#162a30] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-lime-400"
                    >
                      <option value="Conseil Financier & Cash Flow">Conseil Financier & Cash Flow</option>
                      <option value="Secteur Minier & Sous-traitance">Secteur Minier & Sous-traitance Katanga</option>
                      <option value="Stratégie & Pénétration RDC">Stratégie & Croissance</option>
                      <option value="Optimisation Opérations & Supply Chain">Opérations & Supply Chain</option>
                      <option value="Audit de Gouvernance & Due Diligence">Audit & Due Diligence</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Votre message / Contexte de votre entreprise *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez votre secteur, implantation et vos priorités..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#162a30] border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-lime-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-lime-400 text-slate-950 font-bold text-xs sm:text-sm hover:bg-lime-300 transition-colors shadow-md disabled:opacity-50"
                >
                  {sending ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

