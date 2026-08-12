# Council 12906 Members Portal deployment checklist

## Restore point

The pre-portal public website is preserved at:

- Branch: `backup/pre-members-portal-2026-07-22`
- Commit: `74f27dc9c55bcf67410b9d43deb2db4af27b40cf`

Do not delete this branch.

## Required Vercel environment variables

Configure these for Preview and Production before testing:

- `MEMBERS_PASSWORD` — the shared council password
- `MEMBERS_SESSION_SECRET` — a unique random secret of at least 32 characters

Never commit either value to GitHub.

## Security verification

1. Opening `/members` while signed out redirects to `/members/login`.
2. An incorrect password is rejected.
3. A correct password opens the portal.
4. Refreshing a protected page remains authenticated.
5. Logging out clears the session and redirects to the login page.
6. The session expires automatically after 12 hours.
7. A protected file URL redirects signed-out visitors to the login page.
8. Private files are stored under `private/members-files`, never under `public`.

## Release verification

1. Confirm the Vercel preview build succeeds.
2. Test desktop and mobile navigation.
3. Test all Members Portal section links.
4. Confirm no private content appears in GitHub unless it is appropriate for the repository.
5. Obtain final approval before merging the pull request into `main`.

## Rollback

To restore Version 1.0, reset or redeploy `main` from commit:

`74f27dc9c55bcf67410b9d43deb2db4af27b40cf`

The backup branch provides a permanent named reference to the same site state.