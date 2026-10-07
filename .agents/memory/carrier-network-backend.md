---
name: Carrier Network backend
description: User-selected application boundary for the Carrier Network expansion.
---

Use the FreightSync Owner Portal project in Replit for Carrier Network database, authentication, and admin features, rather than create a second system in this marketing website.

**Why:** The user selected connecting to the separate existing application and said, “yes use the FreightSync Owner Portal project we made in replit”.

**How to apply:** Integrate this website with the Owner Portal backend. Obtain its API contract or relevant source before implementing submissions and admin workflows; do not assume that access to this website grants access to the separate project.

The deployed Owner Portal API has a narrower contract than the marketing questionnaire. Verify remote acceptance before calling an integration complete, and preserve questionnaire details for staff review when the portal has no structured destination.

**Why:** Browser testing exposed a mismatch that unit tests against assumed portal formats could not catch. The separate portal's source and authenticated database are not accessible from this workspace.

**How to apply:** Use deliberately invalid contact data for contract-validation requests so discovery cannot create leads. Limit successful integration tests to clearly marked synthetic applications, and distinguish accepted submissions from authenticated database readback and admin verification.
