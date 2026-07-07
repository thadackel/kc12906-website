import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="text-4xl font-bold text-blue-900">
          About Council 12906
        </h1>

        <p className="mt-6 text-lg">
          Knights of Columbus Council 12906 serves the Catholic
          community of Covington, Louisiana through faith,
          fellowship, and charitable service.
        </p>

        <p className="mt-6 text-lg">
          Our Knights are dedicated to supporting our parish,
          helping families, assisting those in need, and building
          a stronger community through the principles of:
        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded border p-5 text-center">
            <h2 className="font-bold text-blue-900">
              Charity
            </h2>
          </div>

          <div className="rounded border p-5 text-center">
            <h2 className="font-bold text-blue-900">
              Unity
            </h2>
          </div>

          <div className="rounded border p-5 text-center">
            <h2 className="font-bold text-blue-900">
              Fraternity
            </h2>
          </div>

          <div className="rounded border p-5 text-center">
            <h2 className="font-bold text-blue-900">
              Patriotism
            </h2>
          </div>

        </div>


        <section className="mt-12">

          <h2 className="text-3xl font-bold text-blue-900">
            Our Mission
          </h2>

          <p className="mt-4 text-lg">
            To provide charitable assistance, promote Catholic
            family life, support our clergy, and serve our neighbors
            with compassion and dedication.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}