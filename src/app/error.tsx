'use client';

import { useEffect } from 'react';
import { AlertCircle, Home, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry, LogRocket)
    console.error('Application error:', {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
    });
  }, [error]);

  // Determine if it's an environment error
  const isEnvError = error.message?.includes('environment variable');

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-red-700 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-ink mb-4">
          {isEnvError ? 'Configuration Error' : 'Something went wrong!'}
        </h2>
        <p className="text-ink/70 mb-2">
          {isEnvError 
            ? 'The application is missing required configuration. Please check your environment variables.'
            : 'An unexpected error occurred while loading this page.'}
        </p>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-4 mb-6 p-4 bg-clay rounded-lg text-left">
            <summary className="text-sm font-medium text-red-800 cursor-pointer">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs text-red-700 overflow-auto max-h-40">
              {error.message}
            </pre>
          </details>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-pine hover:bg-moss text-cream font-medium rounded-lg transition-colors"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-pine/40 hover:bg-mist text-pine font-medium rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
