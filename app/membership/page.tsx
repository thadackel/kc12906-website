import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const reasons = [
  ["Serve", "Make a direct impact through parish and community service."],
  ["Grow", "Strengthen your Catholic faith through brotherhood and prayer."],
  ["Belong", "Build friendships with Catholic men committed to service."],
];

const inputClassName =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-200";

export default function Membership() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Membership"
          title="Become a Knight"
          subtitle="St. Peter Council 12906 welcomes Catholic men who want to serve, grow in faith, and support their families and parish."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map(([title, text]) => (
            <div key={title} className="rounded-2xl border p-8 shadow-sm">
              <h2 className="text-2xl font-black text-blue-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <section className="mx-auto mt-14 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-widest text-blue-800">
            Membership Interest Form
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Learn More About Joining
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Complete the form below and a representative of St. Peter Council 12906
            will contact you with more information about membership.
          </p>

          <form
            action="https://formsubmit.co/12906koc@gmail.com"
            method="POST"
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            <input type="hidden" name="_subject" value="New Council 12906 Membership Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <label className="font-bold text-blue-950">
              First Name
              <input className={inputClassName} type="text" name="First Name" required />
            </label>

            <label className="font-bold text-blue-950">
              Last Name
              <input className={inputClassName} type="text" name="Last Name" required />
            </label>

            <label className="font-bold text-blue-950">
              Email Address
              <input className={inputClassName} type="email" name="Email" required />
            </label>

            <label className="font-bold text-blue-950">
              Phone Number
              <input className={inputClassName} type="tel" name="Phone" required />
            </label>

            <label className="font-bold text-blue-950 md:col-span-2">
              Parish or Church
              <input className={inputClassName} type="text" name="Parish or Church" />
            </label>

            <label className="font-bold text-blue-950 md:col-span-2">
              Questions or Comments
              <textarea
                className={inputClassName}
                name="Questions or Comments"
                rows={5}
                placeholder="Tell us anything you would like us to know."
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 shadow-sm transition-colors hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
              >
                Submit Membership Interest
              </button>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                Your information will be sent to the council at 12906koc@gmail.com.
              </p>
            </div>
          </form>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-widest text-blue-800">
            Current Members
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Pay Your Annual Dues
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Pay your Council 12906 annual membership dues securely through
            Square. The checkout page will open in a new tab.
          </p>
          <Link
            href="https://checkout.square.site/merchant/8ZWJ066MCV5W6/checkout/4DW52T2RH3TWFENKNKMDJKXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 shadow-sm transition-colors hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
          >
            Pay Dues
          </Link>
        </section>
        <section className="mt-14 rounded-3xl bg-blue-950 p-10 text-center text-white">
          <h2 className="text-3xl font-black text-yellow-400">Ready to Learn More?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-100">
            Visit a meeting, speak with Grand Knight Gerald Nuss, or contact the council for more information about membership.
          </p>
          <address className="mt-5 not-italic leading-7 text-slate-100">
            Knights of Columbus<br />
            St. Peter Council 12906<br />
            125 East 19th Ave.<br />
            Covington, LA 70433
          </address>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 hover:bg-yellow-400">
            Contact the Council
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
