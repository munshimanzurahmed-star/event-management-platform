import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-dark px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-brand-gold hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 font-display text-4xl font-bold text-white">
          About BUSINESS ADD-ON
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          BUSINESS ADD-ON is a three-day business, innovation and entertainment festival in Mumbai.
          It brings together leaders, entrepreneurs, students, investors, creators and the public
          for learning, competition, networking and world-class experiences.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Tagline: <span className="text-brand-gold">Think Fast. Create Big. Build the Future.</span>
        </p>
      </div>
    </main>
  );
}
