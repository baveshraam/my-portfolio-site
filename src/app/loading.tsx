export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pine"></div>
        <p className="mt-4 text-ink/70">Loading...</p>
      </div>
    </div>
  );
}
