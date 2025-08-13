'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorComponent?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true,
      errorComponent: error.message.includes('Particles') ? 'particles' : 'animation'
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-deep-black flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-cyber-white mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-300 mb-6">
              {this.state.errorComponent === 'particles' 
                ? 'The particle system encountered an error. The page will work without animations.'
                : 'An animation component failed to load. Basic functionality is still available.'
              }
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-avalanche-red text-cyber-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;