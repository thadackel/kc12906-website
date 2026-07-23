# Protected members files

Files placed in this directory are **not** served by Next.js as public static assets.
They must be delivered through the authenticated route:

`/api/members/files/<relative-file-path>`

Add `?download=1` to request a download instead of an inline preview.

Recommended organization:

- `minutes/2026/2026-01-minutes.pdf`
- `documents/bylaws/council-bylaws.pdf`
- `gallery/2026/service-project/photo-01.jpg`

Do not place private council records in `public/`. Anything in `public/` can be opened without signing into the Members Portal.

The initial repository-based storage is suitable for files deployed with a release. The future Admin Dashboard will require persistent object storage because a Vercel deployment filesystem is not writable permanent storage.