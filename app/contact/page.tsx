import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-16">

        <SectionTitle
          title="Contact Council 12906"
          subtitle="We would love to hear from you"
        />

        <div className="mt-10 rounded-lg border p-8">

          <h2 className="text-2xl font-bold text-blue-900">
            Knights of Columbus Council 12906
          </h2>

          <p className="mt-4">
            Covington, Louisiana
          </p>

          <p className="mt-4">
            For membership information, upcoming events,
            or questions about our council, please contact us.
          </p>

          <div className="mt-8">

            <h3 className="font-bold">
              Meeting Information
            </h3>

            <p className="mt-2">
              Meeting schedule and location information will
              be updated soon.
            </p>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}