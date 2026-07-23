import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-600">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-black text-blue-950">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The page may have moved, or the address may be incorrect. Use the
          links below to return to Council 12906 information.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-yellow-500 px-7 py-4 font-black text-blue-950 transition hover:bg-yellow-400"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border-2 border-blue-950 px-7 py-4 font-black text-blue-950 transition hover:bg-blue-950 hover:text-white"
          >
            Contact the Council
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
