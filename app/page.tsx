import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-900">

        {/* Hero */}
        <section className="bg-gray-100 px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-blue-900">
            Serving Our Faith.
            <br />
            Serving Our Community.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg">
            Knights of Columbus Council 12906 proudly serves
            St. Peter Parish and the Covington community through
            Charity, Unity, Fraternity, and Patriotism.
          </p>

          <div className="mt-8">
            <button className="rounded bg-yellow-500 px-8 py-3 font-bold text-blue-900">
              Become a Knight
            </button>
          </div>

        </section>


        {/* Programs */}
        <section className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="text-center text-3xl font-bold text-blue-900">
            Our Programs
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold">
                Faith & Family
              </h3>
              <p className="mt-3">
                Supporting our parish and strengthening Catholic families.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold">
                Community Service
              </h3>
              <p className="mt-3">
                Helping those in need through charitable programs.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold">
                Brotherhood
              </h3>
              <p className="mt-3">
                Building lasting friendships through service.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}