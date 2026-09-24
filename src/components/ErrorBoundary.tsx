import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Wide app error boundary caught:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b1518] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#122328] border border-slate-700 p-8 rounded-3xl space-y-4">
            <h2 className="text-xl font-bold text-white">Une erreur inattendue est survenue</h2>
            <p className="text-sm text-slate-300">
              Le site a rencontré une difficulté d'affichage. Vous pouvez recharger la page en toute sécurité.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-lime-400 text-slate-950 rounded-full font-bold text-sm hover:bg-lime-300 transition-colors"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
