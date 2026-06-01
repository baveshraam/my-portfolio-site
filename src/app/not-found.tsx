import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <FileQuestion className="w-24 h-24 text-ink/30 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-ink mb-4">404</h1>
        <h2 className="text-2xl font-bold text-ink mb-4">
          Page Not Found
        </h2>
        <p className="text-ink/70 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-pine hover:bg-moss text-cream font-medium rounded-lg transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
