import Link from "next/link";
import Image from "next/image";
import { programs } from "@/app/programs/programData";

const joinUrl = "https://www.kofc.org/get-involved/join-kofc/";
const facebookUrl =
  "https://www.facebook.com/p/St-Peter-Knights-of-Columbus-covington-61568291579406/";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Membership", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
  { label: "Members", href: "/members" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-xl">
      <div className="border-b-4 border-yellow-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8 md:py-8">
          <Link href="/" className="flex items-center gap-5 md:gap-6">
            <Image
              src="/images/branding/kofc-logo.png"
              alt="Knights of Columbus Logo"
              width={108}
              height={108}
              priority
              className="h-20 w-20 rounded-full bg-white object-contain p-2 shadow-lg md:h-[110px] md:w-[110px]"
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight md:text-4xl">
                Knights of Columbus
              </h1>
              <p className="mt-2 text-xl font-bold text-yellow-400 md:text-2xl">
                Council 12906
              </p>
              <p className="text-base text-white/90 md:text-lg">
                Covington, Louisiana
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Council 12906 on Facebook"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-blue-950"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-current"
              >
                <path d="M13.7 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5H17V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V14h2.8v8h3.4Z" />
              </svg>
            </Link>
            <Link
              href={joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-yellow-500 px-6 py-3 text-lg font-black text-blue-950 transition hover:bg-yellow-400"
            >
              Become a Knight
            </Link>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-4 text-base font-bold md:gap-x-8 md:px-8 md:text-lg">
        {navItems.slice(0, 3).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-yellow-400"
          >
            {item.label}
          </Link>
        ))}

        <details className="group relative">
          <summary className="cursor-pointer list-none transition hover:text-yellow-400 [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-1">
              Programs
              <span aria-hidden="true" className="text-sm transition group-open:rotate-180">▼</span>
            </span>
          </summary>
          <div className="absolute left-1/2 z-50 mt-3 max-h-[70vh] w-80 -translate-x-1/2 overflow-y-auto rounded-2xl border border-blue-800 bg-white p-3 text-base text-blue-950 shadow-2xl">
            <Link
              href="/programs"
              className="block rounded-xl bg-blue-950 px-4 py-3 font-black text-white transition hover:bg-blue-900"
            >
              All Programs — Central Hub
            </Link>
            <div className="mt-2 grid gap-1">
              {programs.map((program) => (
                <Link
                  key={program.slug}
                  href={`/programs/${program.slug}`}
                  className="rounded-lg px-4 py-2.5 font-bold transition hover:bg-yellow-100 hover:text-blue-900"
                >
                  {program.title}
                </Link>
              ))}
            </div>
          </div>
        </details>

        {navItems.slice(3).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-yellow-400"
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-yellow-400 transition hover:text-yellow-300 lg:hidden"
        >
          Facebook
        </Link>
      </nav>
    </header>
  );
}
