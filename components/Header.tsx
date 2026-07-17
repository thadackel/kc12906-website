import Link from "next/link";
import Image from "next/image";

const joinUrl = "https://www.kofc.org/get-involved/join-kofc/";

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

          <Link
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-yellow-500 px-6 py-3 text-lg font-black text-blue-950 transition hover:bg-yellow-400 lg:block"
          >
            Become a Knight
          </Link>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-6 gap-y-3 px-6 py-4 text-base font-bold md:gap-x-8 md:px-8 md:text-lg">
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
