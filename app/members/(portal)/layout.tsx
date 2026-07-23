import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MEMBERS_COOKIE_NAME,
  membersPortalIsConfigured,
  membersSessionToken,
} from "@/lib/membersAuth";

export default async function MembersPortalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  if (!membersPortalIsConfigured()) {
    redirect("/members/login");
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(MEMBERS_COOKIE_NAME)?.value;

  if (session !== membersSessionToken()) {
    redirect("/members/login");
  }

  return (
    <>
      <Header />
      <div className="border-b border-blue-900 bg-blue-950 px-6 py-3 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="font-black">Council 12906 Members Portal</p>
          <form action="/api/members/logout" method="post">
            <button className="rounded-lg border border-white/40 px-4 py-2 text-sm font-black transition hover:bg-white hover:text-blue-950">
              Log out
            </button>
          </form>
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
}
