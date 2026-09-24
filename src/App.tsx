import React, { useState, useCallback, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { RoiCalculator } from './components/RoiCalculator.tsx';
import { MethodologySection } from './components/MethodologySection.tsx';
import { CaseStudiesSection } from './components/CaseStudiesSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

// Code-split modals so their JS is only fetched on user interaction
const QuoteModal = lazy(() => import('./components/QuoteModal.tsx').then(m => ({ default: m.QuoteModal })));
const VideoModal = lazy(() => import('./components/VideoModal.tsx').then(m => ({ default: m.VideoModal })));
const TeamModal = lazy(() => import('./components/TeamModal.tsx').then(m => ({ default: m.TeamModal })));

// Image assets
import meetingImage from './assets/images/meeting_consulting_team_1790182293311.jpg';
import avatarSarah from './assets/images/avatar_consultant_sarah_1790182306199.jpg';
import avatarMarc from './assets/images/avatar_consultant_marc_1790182320961.jpg';
import avatarElena from './assets/images/avatar_consultant_elena_1790182333155.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState<string>('financial');
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [teamModalOpen, setTeamModalOpen] = useState<boolean>(false);

  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleOpenQuoteWithService = useCallback((serviceType: string = 'financial') => {
    setQuoteDefaultService(serviceType);
    setQuoteModalOpen(true);
  }, []);

  const handleOpenFinancialQuote = useCallback(() => {
    handleOpenQuoteWithService('financial');
  }, [handleOpenQuoteWithService]);

  const handleOpenVideo = useCallback(() => {
    setVideoModalOpen(true);
  }, []);

  const handleOpenTeam = useCallback(() => {
    setTeamModalOpen(true);
  }, []);

  const handleCloseQuote = useCallback(() => {
    setQuoteModalOpen(false);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setVideoModalOpen(false);
  }, []);

  const handleCloseTeam = useCallback(() => {
    setTeamModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1518] text-slate-100 flex flex-col selection:bg-lime-400 selection:text-slate-950">
      
      {/* Top Navigation */}
      <Navbar
        onOpenQuoteModal={handleOpenFinancialQuote}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Exact Hero Section from Screenshot with Wide branding */}
        <Hero
          onOpenQuote={handleOpenFinancialQuote}
          onOpenVideo={handleOpenVideo}
          onOpenTeam={handleOpenTeam}
          onOpenService={handleOpenQuoteWithService}
          onScrollToMethodology={() => handleNavigate('methodologie')}
          meetingImage={meetingImage}
          avatarSarah={avatarSarah}
          avatarMarc={avatarMarc}
          avatarElena={avatarElena}
        />

        {/* Detailed Services breakdown */}
        <ServicesSection 
          onOpenQuote={handleOpenQuoteWithService} 
        />

        {/* Interactive ROI simulator for instant client calculations */}
        <RoiCalculator 
          onOpenQuote={handleOpenFinancialQuote} 
        />

        {/* Methodology: "Comment ça fonctionne ?" */}
        <MethodologySection 
          onOpenQuote={handleOpenFinancialQuote} 
        />

        {/* Quantified Case Studies */}
        <CaseStudiesSection />

        {/* About Wide & Experience proof */}
        <AboutSection 
          onOpenQuote={handleOpenFinancialQuote} 
        />

        {/* FAQ in French */}
        <FaqSection />

        {/* Direct Contact & Paris Office */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenFinancialQuote}
      />

      {/* Modals: Rendered on-demand with lazy code-splitting */}
      {quoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteModal
            isOpen={quoteModalOpen}
            onClose={handleCloseQuote}
            defaultService={quoteDefaultService}
          />
        </Suspense>
      )}

      {videoModalOpen && (
        <Suspense fallback={null}>
          <VideoModal
            isOpen={videoModalOpen}
            onClose={handleCloseVideo}
            onOpenQuote={() => {
              handleCloseVideo();
              handleOpenFinancialQuote();
            }}
          />
        </Suspense>
      )}

      {teamModalOpen && (
        <Suspense fallback={null}>
          <TeamModal
            isOpen={teamModalOpen}
            onClose={handleCloseTeam}
            onOpenQuote={() => {
              handleCloseTeam();
              handleOpenFinancialQuote();
            }}
            avatarSarah={avatarSarah}
            avatarMarc={avatarMarc}
            avatarElena={avatarElena}
          />
        </Suspense>
      )}

    </div>
  );
}
