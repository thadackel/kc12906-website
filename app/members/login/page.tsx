import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import LoginForm from "./LoginForm";

export default function MembersLoginPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-100 px-6 py-20">
        <section className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">
          <div className="text-center">
            <Image
              src="/images/branding/kofc-logo.png"
              alt="Knights of Columbus logo"
              width={96}
              height={96}
              className="mx-auto h-24 w-24 rounded-full bg-white object-contain p-2 shadow"
            />
            <p className="mt-6 text-sm font-black uppercase tracking-[0.24em] text-yellow-600">
              Council 12906
            </p>
            <h1 className="mt-3 text-4xl font-black text-blue-950">Members Portal</h1>
            <p className="mt-4 leading-7 text-slate-600">
              Enter the council password to view meeting minutes, announcements,
              documents, calendars, photographs, and council history.
            </p>
          </div>
          <LoginForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
