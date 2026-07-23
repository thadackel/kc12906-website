"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/members/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const result = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;

    if (!response.ok) {
      setError(result?.error ?? "Unable to sign in. Please try again.");
      setLoading(false);
      return;
    }

    router.replace("/members");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="mt-8 grid gap-5">
      <div>
        <label htmlFor="members-password" className="block text-sm font-black uppercase tracking-[0.18em] text-blue-950">
          Council password
        </label>
        <input
          id="members-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
          className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-lg text-slate-900 outline-none ring-yellow-400 transition focus:ring-4"
        />
      </div>

      {error ? (
        <p role="alert" className="rounded-xl bg-red-50 p-4 font-bold text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-yellow-500 px-6 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Enter Members Portal"}
      </button>
    </form>
  );
}
