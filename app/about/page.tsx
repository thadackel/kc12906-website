import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* Hero Section */}
        <section className="bg-gray-100 px-6 py-24 text-center">

          <h1 className="text-5xl font-bold text-blue-900">
            Knights of Columbus
            <br />
            Council 12906
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl">
            Serving St. Peter Parish and the Covington community
            through faith, fellowship, and charitable service.
          </p>

          <div className="mt-8">

            <a
              href="/membership"
              className="rounded bg-yellow-500 px-8 py-3 font-bold text-blue-900"
            >
              Become a Knight
            </a>

          </div>

        </section>


        {/* Mission */}
        <section className="mx-auto max-w-6xl px-6 py-16">

          <SectionTitle
            title="Our Mission"
            subtitle="Faith. Service. Brotherhood."
          />


          <p className="mx-auto mt-8 max-w-4xl text-center text-lg">

            Knights of Columbus Council 12906 is dedicated to
            serving our Catholic faith, supporting families,
            helping those in need, and strengthening our community
            through acts of charity and service.

          </p>

        </section>


        {/* Four Principles */}
        <section className="bg-gray-100 px-6 py-16">

          <div className="mx-auto max-w-6xl">

            <SectionTitle title="Our Principles" />


            <div className="mt-10 grid gap-6 md:grid-cols-4">

              {[
                "Charity",
                "Unity",
                "Fraternity",
                "Patriotism",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-lg bg-white p-6 text-center shadow"
                >

                  <h3 className="text-xl font-bold text-blue-900">
                    {item}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* Service Areas */}
        <section className="mx-auto max-w-6xl px-6 py-16">

          <SectionTitle
            title="Serving Our Community"
          />


          <div className="mt-10 grid gap-6 md:grid-cols-3">


            <div className="rounded border p-6">

              <h3 className="text-xl font-bold text-blue-900">
                Parish Support
              </h3>

              <p className="mt-3">
                Supporting our church, clergy, and Catholic families.
              </p>

            </div>


            <div className="rounded border p-6">

              <h3 className="text-xl font-bold text-blue-900">
                Community Service
              </h3>

              <p className="mt-3">
                Providing assistance through charitable programs.
              </p>

            </div>


            <div className="rounded border p-6">

              <h3 className="text-xl font-bold text-blue-900">
                Fellowship
              </h3>

              <p className="mt-3">
                Building friendships through faith and service.
              </p>

            </div>


          </div>

        </section>


      </main>

      <Footer />

    </>
  );
}