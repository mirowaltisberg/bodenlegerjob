"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body className="bg-slate-50 antialiased">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Etwas ist schiefgelaufen
            </h2>
            <p className="text-slate-600 mb-6">
              Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-xl bg-[#c17a3a] px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-[#d08a4a] transition-colors"
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
