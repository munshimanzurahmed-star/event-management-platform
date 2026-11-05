import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-dark px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-brand-navy/60 p-8">
        <h1 className="text-center font-display text-2xl font-bold text-white">
          Admin Login
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Sign in to manage the event
        </p>
        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm text-slate-300">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-brand-dark px-4 py-2.5 text-white outline-none focus:border-brand-gold"
              placeholder="admin@businessaddon.in"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-brand-dark px-4 py-2.5 text-white outline-none focus:border-brand-gold"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-gold py-2.5 font-semibold text-brand-dark transition hover:bg-brand-gold-light"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          <Link href="/" className="text-brand-gold hover:underline">
            ← Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
