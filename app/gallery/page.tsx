import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const photos = [
  {
    title: "Community Service",
    description:
      "Knights serving our parish and local community.",
  },
  {
    title: "Faith Events",
    description:
      "Supporting Catholic family and parish activities.",
  },
  {
    title: "Council Fellowship",
    description:
      "Building friendships through brotherhood.",
  },
];

export default function Gallery() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">

        <SectionTitle
          title="Photo Gallery"
          subtitle="Celebrating service, faith, and fellowship"
        />


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {photos.map((photo) => (

            <div
              key={photo.title}
              className="rounded-lg border bg-gray-100 p-8 text-center"
            >

              <div className="flex h-48 items-center justify-center rounded bg-gray-200">

                <span className="text-gray-500">
                  Photo Coming Soon
                </span>

              </div>


              <h2 className="mt-5 text-xl font-bold text-blue-900">
                {photo.title}
              </h2>


              <p className="mt-3">
                {photo.description}
              </p>

            </div>

          ))}

        </div>


      </main>

      <Footer />

    </>
  );
}