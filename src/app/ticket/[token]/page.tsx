export default function TicketPage({ params }: { params: { token: string } }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-dark px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-brand-navy/60 p-8 text-center">
        <h1 className="font-display text-2xl font-bold text-white">Your Ticket</h1>
        <p className="mt-4 text-sm text-slate-400">Token: {params.token}</p>
        <p className="mt-6 text-slate-500">
          Ticket details will appear here once the database is connected.
        </p>
      </div>
    </main>
  );
}
