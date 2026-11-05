import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-dark text-slate-100">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-dark" />
        <div className="relative z-10 max-w-4xl">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-brand-gold uppercase">
            Mumbai · Business · Innovation · Entertainment
          </p>
          <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            BUSINESS ADD-ON
          </h1>
          <p className="mt-6 text-xl text-brand-gold-light sm:text-2xl">
            Think Fast. Create Big. Build the Future.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">
            A three-day mega business, innovation & entertainment festival bringing together leaders, entrepreneurs, students, investors and creators.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/register"
              className="rounded-full bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-dark transition hover:bg-brand-gold-light"
            >
              Register Now
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-600 px-8 py-3.5 text-base font-medium text-slate-200 transition hover:border-brand-gold hover:text-brand-gold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
