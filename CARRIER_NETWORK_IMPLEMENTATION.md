# FreightSync Carrier Network implementation

## Architecture and scope

This is an expansion of the existing Next.js FreightSync marketing website, not
a replacement TMS. The logo, brand styles, original homepage photo assets, and
existing TMS pages are retained.

The **separate FreightSync Owner Portal** remains the system of record for leads,
customer accounts, authentication, administrator permissions, onboarding,
matching, and service enrollments. This website does not create a second
database or authentication system.

## Pages and routes

| Route | Purpose |
| --- | --- |
| `/` | Prominent Carrier Network section after the existing hero; service cards, audience paths, benefits |
| `/services` | Carrier Network service overview |
| `/services/connect` | Connect explanation, audience, features, pricing, FAQ, application |
| `/services/dispatch` | Dispatch explanation, audience, features, pricing, FAQ, application |
| `/services/fleet-management` | Fleet Management explanation, audience, features, pricing, FAQ, application |
| `/pricing` | Three plans, fee and trial disclosures, mobile-scrollable comparison, FAQs |
| `/get-started` | Eight-step application |
| `/driver-network` | Driver application, including drivers without vehicles |
| `/vehicle-owner-network` | Vehicle-owner application and driver-arrangement details |
| `/dispatcher-network` | Dispatcher application and equipment/region experience |
| `/application-received` | Confirmed-only receipt and next steps |
| `POST /api/carrier-network/apply` | Validates, adapts, and forwards submissions to Owner Portal |

The Services navigation link, network footer links, and sitemap entries are added.
The existing Carrier Program remains available, with its obsolete pricing updated.

## Single pricing source

`lib/carrier-network.ts` supplies the public cards, service pages, pricing page,
application interest/review steps, calculators, local chatbot knowledge base,
and server-generated application pricing notes:

- Connect: **$49/month**.
- Dispatch: **$49/month + 5% of completed FreightSync-dispatched load revenue**.
- Fleet Management: **$49/month + 8% of completed FreightSync-managed load revenue**.
- No setup fee. No cancellation fee. Cancel anytime.
- Only the first month's $49 subscription is waived. Applicable percentage fees
  still apply to qualifying completed loads during that month.
- Dispatch fees do not apply to unrelated independently booked freight.
- Larger fleets may request custom pricing.

Calculators model standard Fleet Management after the trial, assume all entered
revenue is from completed FreightSync-managed loads, and include the $49
subscription separately from the 8% fee.

No checkout, automated billing, or payment provider was added. Customer billing
configuration remains in the Owner Portal onboarding workflow.

## Forms and captured data

One shared eight-step form handles:

1. Contact and location.
2. Multiple applicant roles, plus driver/owner/dispatcher-specific details.
3. Vehicle ownership and conditional equipment information.
4. Authority and insurance; DOT/MC are optional.
5. Multiple service needs.
6. Service interest and exact pricing/trial terms.
7. Vehicle count, revenue, timeline, and notes.
8. Preferred next step, application review, and contact acknowledgement.

Service pages preselect their plan; audience pages preselect their role.
Client and server validation are implemented. Answers stay in memory on failure,
not in persistent browser storage. Only non-PII source/UTM attribution and a
receipt reference are stored in session storage.

## Owner Portal integration

The website forwards server-side to the user-provided endpoint:

`https://portal.freightsynctms.com/api/public/leads`

The public API needs no credentials. No portal session cookie or admin credential
is forwarded. The proxy validates body size, contact details, choices, vehicle
counts, and consent; checks browser origin; rejects honeypots; applies
best-effort per-instance throttling and idempotency; forwards the submission key;
uses a timeout; and never logs application PII or displays false success.

The deployed endpoint's actual format was checked with invalid contact data:

- `vehicleYear` is a number when supplied.
- Missing DOT/MC must be omitted, not empty strings or null.
- Its service-needs enum is narrower than the website questionnaire.
- Verified categories used here are `dispatch`, `fleet_management`,
  `dispatcher_network`, and `other`.

**Every original service selection and specialist field is retained in readable
applicant notes.** Unsupported routing categories map to `other`. This preserves
the application for staff review, but does not claim to populate normalized
driver/vehicle/dispatcher profiles directly. That requires a documented extension
to the Owner Portal API or its conversion workflow.

An upstream rejection does not create a receipt. A timeout may happen after the
portal saved a lead, so ambiguous failures ask the applicant to contact FreightSync
before trying again; there are no automatic submission retries.

Idempotency and rate-limit memory are local to a running website instance.
Durable cross-instance guarantees must be enforced by the Owner Portal.

## Database and admin features

**Database tables created or modified in this website: none.**

**Admin features created or modified in this website: none.**

The published portal client already exposes:

- `/admin/network`: Carrier Network Leads with filters and sorting.
- `/admin/network/:id`: application details, status changes, plan selection,
  staff assignment, linked existing accounts/owners/drivers, internal notes,
  approval/rejection, and follow-up.
- Approved-lead conversion and onboarding checklist.
- Driver/vehicle matching and fleet management interfaces.

These are existing remote features, not features built in this workspace.
An unauthenticated request to its protected lead API was rejected. This is not
a substitute for authenticated role/access-control or database testing.

### Checks required in the Owner Portal project before full launch approval

1. Read back the test lead and verify all contact, source, UTM, service, and note data.
2. Verify normalized lead, profile, application, notes/history, match, onboarding,
   and subscription structures against the requested requirements.
3. Ensure specialist application details can populate the appropriate normalized
   profile records rather than remain only in notes.
4. Test every lead status, assignment, internal notes, follow-up, approval,
   rejection, and onboarding action as an authorized administrator.
5. Verify non-admin users cannot read or mutate leads, including direct API calls.
6. Convert an approved test lead, reuse existing customers where appropriate,
   and verify there are no duplicate accounts.
7. Confirm subscription records use $49/0%, $49/5%, and $49/8% with exact fee scope
   and first-month subscription waiver.
8. Verify matching always requires admin approval.
9. Verify durable duplicate handling, rate limiting, notifications, and billing
   readiness in the portal.

## Scheduling and separate chatbot

Online call scheduling is optional and not configured here. Set a real public
booking URL via `NEXT_PUBLIC_CARRIER_SCHEDULING_URL` through workspace environment
settings and rebuild. Without it, the confirmed receipt offers a real telephone
link to arrange a call—not a fake booking form.

The website's existing chatbot widget is loaded from the separate
`freight-sync-tms-bot.replit.app` project. The local `/api/chatbot` knowledge base
was updated to canonical pricing, but that does **not** update the externally
hosted bot. Its pricing knowledge must be synced and verified in its own project.
The existing widget was not replaced.

## Verification and commands

- Production build completed successfully.
- Type checking completed successfully after integration fixes.
- Eighteen automated server-validation/mapping tests passed.
- New page routes and existing representative TMS routes responded.
- Invalid JSON, wrong content type/origin, oversized bodies, and missing fields
  were rejected without sending applications to the portal.
- Desktop/mobile layout inspection and browser form testing were performed.
- Browser testing found the initial portal-format mismatch; mapping was corrected.
- The corrected live browser submission returned HTTP 201 and displayed the
  confirmed `/application-received` page with the receipt cookie. No reference
  number was returned to the website. Exactly one corrected submission was made
  after the initial definitive validation rejection; one marked synthetic TEST
  application was accepted. Driver/owner/dispatcher preselection and Dispatch
  plan preselection were checked without submitting additional applications.
- A non-blocking React hydration warning about an extra input style attribute
  appeared during browser checks; its source has not been established.
- Authenticated database, admin, matching, and conversion checks remain portal-side.

Run the mapping tests without changing project dependencies:

```sh
npx tsc lib/carrier-network.ts lib/carrier-application.ts \
  --outDir /tmp/freightsync-carrier-tests --module commonjs \
  --target es2020 --skipLibCheck --strict
CARRIER_TEST_LIB=/tmp/freightsync-carrier-tests \
  node --test tests/carrier-application.cjs
```

## Approval and release

No project was published. Do not represent the full cross-project expansion as
launch-verified until the Owner Portal checks and external chatbot pricing sync
are complete. Scheduling requires a booking link if online scheduling is desired.
No new payment integration or account activation is triggered by submitting an
application.
