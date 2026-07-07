import Header from "@/components/Header";
import Footer from "@/components/Footer";

const events = [
  {
    title: "Council Meeting",
    date: "First Tuesday of Each Month",
    description:
      "Monthly council meeting for members, planning, and fellowship.",
  },
  {
    title: "Community Service Projects",
    date: "Throughout the Year",
    description:
      "Opportunities to serve our parish and the Covington community.",
  },
  {
    title: "Faith and Family Events",
    date: "Scheduled Events",
    description:
      "Activities that strengthen Catholic families and our parish community.",
  },
];

export default function Events() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="text-4xl font-bold text-blue-900">
          Upcoming Events
        </h1>

        <p className="mt-4 text-lg">
          Stay connected with Knights of Columbus Council 12906
          activities, meetings, and service opportunities.
        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-lg border p-6 shadow-sm"
            >

              <h2 className="text-xl font-bold text-blue-900">
                {event.title}
              </h2>

              <p className="mt-3 font-semibold text-yellow-600">
                {event.date}
              </p>

              <p className="mt-3">
                {event.description}
              </p>

            </div>
          ))}

        </div>

      </main>

      <Footer />
    </>
  );
}