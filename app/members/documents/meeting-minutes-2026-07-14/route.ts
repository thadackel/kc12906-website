import { hasMemberSession } from "@/lib/member-auth";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET(request: Request) {
  if (!(await hasMemberSession())) {
    return Response.redirect(new URL("/members/login", request.url));
  }

  const pdfPath = path.join(
    process.cwd(),
    "private",
    "member-documents",
    "meeting-minutes-2026-07-14.pdf",
  );
  const pdf = await readFile(pdfPath);

  return new Response(pdf, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Disposition":
        'inline; filename="Council-Meeting-Minutes-2026-07-14.pdf"',
      "Content-Type": "application/pdf",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
