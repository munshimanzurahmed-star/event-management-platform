export default function AdminPage() {
  return (
    <main className="min-h-screen bg-brand-dark px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-3xl font-bold text-white">Admin Dashboard</h1>
        <p className="mt-2 text-slate-400">
          Overview of registrations, tickets and event settings.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-brand-navy/50 p-6">
            <p className="text-sm text-slate-400">Total Registrations</p>
            <p className="mt-2 text-3xl font-bold text-white">—</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-brand-navy/50 p-6">
            <p className="text-sm text-slate-400">Tickets Confirmed</p>
            <p className="mt-2 text-3xl font-bold text-white">—</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-brand-navy/50 p-6">
            <p className="text-sm text-slate-400">Checked In</p>
            <p className="mt-2 text-3xl font-bold text-white">—</p>
          </div>
        </div>
      </div>
    </main>
  );
}
