# Vaani website — content reference

**Status:** Vaani is live on Google Play. The site contains no beta / waitlist / APK messaging.
**Single download URL:** `SITE.playStoreUrl` in `src/lib/site.ts`
(`https://play.google.com/store/apps/details?id=com.vaaniAi.vaani&hl=en_IN`).

## Pages
| Route | Purpose |
|---|---|
| `/` | Hero ("Smarter Billing for Everyday Business"), six verified features, 3-step flow, FAQ, Play Store CTA. Real screenshots section renders when `SCREENSHOTS` in `site.ts` is non-empty. |
| `/features` | Seven features: voice billing, manual invoices, products, customer ledger/dues, local storage, PDF/image sharing, thermal printing. |
| `/how-it-works` | Five-step walkthrough. |
| `/about` | Founder story, short. |
| `/contact` | Email, phone, WhatsApp, location (all from `SITE`). |
| `/privacy`, `/terms` | Legal text. Beta wording removed only; substantive review still required (see below). |
| `/investors` | Not in nav, `noindex`. Stage text updated; market-size and fundraising claims unverified. |
| `/customers`, `/pricing` | Removed; redirect to `/` (beta-era testimonials and unverified pricing tiers). |

## Rules for future edits
- Claim only features confirmed in the published app. Do not add statistics, language counts, cloud/encryption claims or pricing without a source.
- Use real screenshots only (place in `public/screenshots/`, list in `SCREENSHOTS`).
- Use `PlayStoreButton` for every Android download CTA.

## Needs owner verification
See the final audit summary: voice-billing languages, offline behaviour, printer support, pricing/plans, privacy-policy accuracy vs. app's Data safety form.
