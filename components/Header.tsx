import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-xl">

      <div className="border-b-4 border-yellow-500">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

          <Link href="/" className="flex items-center gap-6">

            <Image
              src="/images/branding/kofc-logo.png"
              alt="Knights of Columbus Logo"
              width={110}
              height={110}
              className="rounded-full bg-white p-2 shadow-lg"
            />

            <div>

              <h1 className="text-4xl font-black tracking-tight">
                Knights of Columbus
              </h1>

              <p className="mt-2 text-2xl font-bold text-yellow-400">
                Council 12906
              </p>

              <p className="text-lg text-white/90">
                Covington, Louisiana
              </p>

            </div>

          </Link>

          <Link
            href="/membership"
            className="hidden rounded-lg bg-yellow-500 px-6 py-3 text-lg font-black text-blue-950 transition hover:bg-yellow-400 lg:block"
          >
            Become a Knight
          </Link>

        </div>

      </div>

      <nav className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-8 py-5 text-lg font-bold">

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-yellow-400"
          >
            {item.label}
          </Link>
        ))}

      </nav>

    </header>
  );
}