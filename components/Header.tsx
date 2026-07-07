import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <div>
          <h1 className="text-2xl font-bold">
            Knights of Columbus
          </h1>
          <p className="text-yellow-400">
            Council 12906 • Covington, Louisiana
          </p>
        </div>

        <nav className="hidden gap-6 md:flex">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>

        </nav>

      </div>
    </header>
  );
}