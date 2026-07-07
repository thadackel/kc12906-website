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

        <nav className="hidden space-x-6 md:flex">

          <a href="/" className="hover:text-yellow-400">
            Home
          </a>

          <a href="/about" className="hover:text-yellow-400">
            About
          </a>

          <a href="/events" className="hover:text-yellow-400">
            Events
          </a>

          <a href="/membership" className="hover:text-yellow-400">
            Membership
          </a>

          <a href="/contact" className="hover:text-yellow-400">
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}