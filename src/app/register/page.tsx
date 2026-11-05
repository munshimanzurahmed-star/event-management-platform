import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-brand-dark px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-lg">
        <Link href="/" className="text-sm text-brand-gold hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 font-display text-3xl font-bold text-white">
          Register for BUSINESS ADD-ON
        </h1>
        <p className="mt-4 text-slate-400">
          Registration will be available once the database is connected and ticket categories are seeded.
        </p>
        <div className="mt-10 rounded-2xl border border-slate-800 bg-brand-navy/50 p-8">
          <p className="text-center text-slate-500">
            Connect your Neon database and run the seed script to enable live registration.
          </p>
        </div>
      </div>
    </main>
  );
}
