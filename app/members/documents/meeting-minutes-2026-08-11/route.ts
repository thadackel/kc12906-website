import { hasMemberSession } from "@/lib/member-auth";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET(request: Request) {
  if (!(await hasMemberSession())) {
    return Response.redirect(new URL("/members/login", request.url));
  }

  const documentPath = path.join(
    process.cwd(),
    "private",
    "member-documents",
    "meeting-minutes-2026-08-11.docx",
  );
  const document = await readFile(documentPath);

  return new Response(document, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Disposition":
        'attachment; filename="Council-Meeting-Minutes-2026-08-11.docx"',
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
