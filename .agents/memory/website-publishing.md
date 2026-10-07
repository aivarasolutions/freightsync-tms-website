---
name: Website publishing ownership
description: Keep the GitHub-to-Vercel website separate from the Replit copy and the Owner Portal.
---

The user wants the FreightSync website connected to its existing GitHub repository and Vercel project, not replaced with a new repository or silently moved to Replit hosting.

**Why:** The user could see new pages in the Replit copy but not the public website. The existing public domain was serving the older GitHub-backed Vercel version. Replit publishing and GitHub synchronization are separate operations.

**How to apply:** Preserve the existing GitHub/Vercel publishing arrangement. Verify the actual remote source and live domain before describing a release as updated. Treat Git-provider UI status and Agent integration authorization as distinct; test repository permissions rather than trusting a green connection indicator. Never silently trigger a production release while diagnosing sync.
