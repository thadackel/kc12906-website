import { readFile } from "node:fs/promises";
import path from "node:path";

const validIds = new Set(["5", "6", "7"]);

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!validIds.has(id)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "events",
      `bbq-${id}.b64`,
    );
    const encoded = (await readFile(filePath, "utf8")).trim();
    const image = Buffer.from(encoded, "base64");

    return new Response(image, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Image unavailable", { status: 404 });
  }
}
