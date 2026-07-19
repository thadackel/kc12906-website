import Link from "next/link";

const joinUrl = "https://www.kofc.org/get-involved/join-kofc/";
const facebookUrl =
  "https://www.facebook.com/p/St-Peter-Knights-of-Columbus-covington-61568291579406/";

export default function Footer() {
  return (
    <footer className="bg-blue-950 px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black">Knights of Columbus</h2>
          <p className="mt-2 text-lg font-bold text-slate-100">St. Peter Council 12906</p>
          <address className="mt-4 not-italic leading-7 text-slate-200">
            125 East 19th Ave.<br />
            Covington, LA 70433
          </address>
          <p className="mt-4 max-w-xl leading-7 text-slate-200">
            Catholic men serving St. Peter Parish and the Covington community
            through charity, unity, fraternity, and patriotism.
          </p>
          <Link
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-lg border border-blue-700 bg-blue-900 px-5 py-3 font-black transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-blue-950"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-current"
            >
              <path d="M13.7 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5H17V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V14h2.8v8h3.4Z" />
            </svg>
            Follow Council 12906 on Facebook
          </Link>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            koc12906.org
          </p>
        </div>
        <div>
          <h3 className="font-black text-yellow-400">Monthly Meeting</h3>
          <p className="mt-4 text-slate-200">St. Mary&apos;s Hall</p>
          <p className="text-slate-200">Second Tuesday of each month</p>
          <p className="text-slate-200">6:30 PM Rosary</p>
          <p className="text-slate-200">6:50 PM Meal</p>
          <p className="text-slate-200">7:05 PM Meeting</p>
        </div>
        <div>
          <h3 className="font-black text-yellow-400">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-slate-200">
            <Link href={joinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Become a Knight</Link>
            <Link href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Facebook</Link>
            <Link href="/events" className="hover:text-yellow-400">Events & Meetings</Link>
            <Link href="/programs" className="hover:text-yellow-400">Programs</Link>
            <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-blue-800 pt-6 text-center text-sm text-slate-300">
        Charity • Unity • Fraternity • Patriotism
      </div>
    </footer>
  );
}
