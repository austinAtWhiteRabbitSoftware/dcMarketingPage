export function EmailSignupPlaceholder() {
  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="email-waitlist"
        className="mb-2 block text-sm font-medium text-foreground/80"
      >
        Get launch updates
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <input
          id="email-waitlist"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          disabled
          aria-disabled="true"
          className="min-h-12 w-full rounded-xl border border-border bg-surface/80 px-4 text-foreground placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="button"
          disabled
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-muted"
        >
          Coming soon
        </button>
      </div>
      <p className="mt-2 text-xs text-muted">
        We are not collecting emails yet. This field is a placeholder for a
        future waitlist.
      </p>
    </div>
  );
}
