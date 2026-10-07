---
name: Dependency download portability
description: Replit-managed installs can leave private registry URLs that break Vercel installs.
---

After installing or updating packages in Replit, check the committed dependency lockfile for Replit-internal artifact URLs before preparing a GitHub/Vercel release.

**Why:** A successful Replit installation recorded package-firewall.replit.internal download URLs. Vercel could not resolve that internal hostname and failed at dependency installation, even though the application built successfully inside Replit.

**How to apply:** For packages already approved and installed by the package manager, use the corresponding official npm artifact URLs for external deployment portability. Preserve exact versions and integrity hashes, and verify artifact checksums. Do not bypass a package-firewall rejection. Recheck after future dependency changes; a local build alone does not verify external dependency downloads.
