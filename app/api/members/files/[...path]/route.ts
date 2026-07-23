import { readFile } from "fs/promises";
import path from "path";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  isValidMembersSessionToken,
  MEMBERS_COOKIE_NAME,
} from "@/lib/membersAuth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const contentTypes: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function GET(
  request: Request,
  context: { params: Promise<{ path: string[] }> },
) {
  const cookieStore = await cookies();
  const session = cookieStore.get(MEMBERS_COOKIE_NAME)?.value;

  if (!isValidMembersSessionToken(session)) {
    return NextResponse.redirect(new URL("/members/login", request.url), 303);
  }

  const { path: requestedSegments } = await context.params;
  const privateRoot = path.resolve(process.cwd(), "private", "members-files");
  const requestedFile = path.resolve(privateRoot, ...requestedSegments);

  if (
    requestedFile !== privateRoot &&
    !requestedFile.startsWith(`${privateRoot}${path.sep}`)
  ) {
    return NextResponse.json({ error: "Invalid file path." }, { status: 400 });
  }

  try {
    const file = await readFile(requestedFile);
    const extension = path.extname(requestedFile).toLowerCase();
    const disposition =
      new URL(request.url).searchParams.get("download") === "1"
        ? "attachment"
        : "inline";

    return new NextResponse(file, {
      headers: {
        "Cache-Control": "private, no-store, max-age=0",
        "Content-Disposition": `${disposition}; filename="${path.basename(requestedFile).replaceAll('"', "")}"`,
        "Content-Type": contentTypes[extension] ?? "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }
}