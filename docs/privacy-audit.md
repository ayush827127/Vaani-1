# Vaani AI Billing — Technical Privacy Audit

Status: **read-only inspection complete; no app, backend, Play Console or live-policy changes made.**
Audit date: 2026-10-09. Auditor: Claude (source review only — not legal advice).

## 1. Scope and verification limits

| Item | Finding | Verified? |
|---|---|---|
| App source | `D:\Vaani\billing\vaani` — Flutter/Dart, Android-only, `applicationId`/namespace `com.vaaniAi.vaani`, `pubspec` version `1.0.0+7` | Yes (`android/app/build.gradle.kts`, `pubspec.yaml`) |
| Backend source | `D:\Vaani\billing\backend` — Node/Express + Prisma, deployed per `render.yaml` (Render free tier; DB is Neon per code comments) | Yes (code); live deployment not inspected |
| Other folders | `D:\Vaani\vaani` (older Flutter copy, `1.0.0+1`), `D:\Vaani\Vaani_App` (Ionic/Capacitor, `io.ionic.starter`) are **not** the published package and were not audited | Yes |
| Source = published build? | **Cannot be confirmed.** `billing/vaani` has an uncommitted `pubspec.yaml` change, a `build/.../app-release.aab` dated 2026-10-09 and an older `aab_extract/` (2026-09-26). I could not see which versionCode is live on Play. | **No — owner must confirm the live version code** |
| Play Data safety form / Play policy URL | Not accessible from here (Play page did not render via fetch). The brief states it says "no data collected / none shared". | Unverified — treated as given |
| Live privacy policy | The version in this website repo (`src/app/privacy/page.tsx`, "Last updated: August 2026") | Yes |
| Build variants | Only `release` signing config (key.properties); no flavors | Yes |
| Secrets | `.env` is bundled as a Flutter asset (`pubspec.yaml` assets). Key names only inspected: `BACKEND_API_BASE_URL` (https), `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_UPLOAD_PRESET` (unsigned preset). No AI key ships in the app. I did **not** open `D:\Vaani\api secret key.txt`. | Yes |

## 2. Executive summary (severity by evidence)

**The "no data collected, none shared" Data safety declaration is contradicted by the code.** After login the app automatically uploads the shop's business and customer data to our own backend and uploads images to Cloudinary. The existing website privacy policy is closer to reality in some ways (cloud sync, SMS/WhatsApp) and wrong in others (IndexedDB, "encrypted at rest", CA portal, WhatsApp/SMS receipts).

| # | Severity | Finding | Evidence |
|---|---|---|---|
| 1 | **Critical** | Data safety says nothing collected, but the app collects phone number (OTP login), shop profile, customer names/phones/emails/addresses, items, invoices, payments, GSTIN, UPI ID, and images, and sends them to our backend. | `features/sync/repositories/data_sync_repository.dart:226-250, 665-780`; `sync_api_client.dart:14,36`; `subscription_api_client.dart:127,148`; `otp_service.dart:64,81` |
| 2 | **High** | Sync is automatic, hourly and on resume, once logged in. No opt-in or off switch was found. | `features/sync/services/data_sync_scheduler.dart`; `main.dart:46,52` |
| 3 | **High** | Voice transcript **plus the full item catalog and customer list (names and phone numbers)** is sent to our backend, which forwards it to Groq (`api.groq.com`, model `openai/gpt-oss-20b`). Neither the policy nor the listing discloses this. | `features/billing/services/voice_action_parser.dart:~454-490` (prompt build), `:191-197` (POST `/api/shop/voice/parse`); `backend/src/modules/shop-voice/shop-voice.service.js` |
| 4 | **High** | No in-app or web account-deletion path. A `deleteAccount` string exists in l10n but nothing uses it; `ShopRepository.deleteShopData()` (local DB reset only) has no callers; backend has no shop/account delete route. Google Play requires an in-app deletion path and a web deletion URL for apps with accounts. The policy promises deletion "by contacting us". | `shop_repository.dart:114-115`; grep for callers; `backend/src/modules/*/*.routes.js` |
| 5 | **High** | Policy/website inaccuracies: says data is stored in "IndexedDB" (the app uses SQLite via `sqflite`), "encrypted at rest" (unverified — depends on Render/Neon/Cloudinary, not our code), SMS/WhatsApp receipts and "CA Portal" (no such code found). | `privacy/page.tsx` vs `core/db/database_helper.dart`, `pubspec.yaml` |
| 6 | **Medium** | Server-side `ErrorLog` stores request path, stack and up to 1000 chars of the request body (`bodyPreview`) on any 5xx — may capture phone numbers, customer names, invoice data. No retention limit found. | `backend/src/middleware/error.middleware.js:15-30`; `prisma/schema.prisma` `model ErrorLog` |
| 7 | **Medium** | Images (item photos, customer images, shop logo) go to Cloudinary through an **unsigned** upload preset embedded in the app; returned `secure_url`s are public-by-URL. Anyone with the cloud name/preset (extractable from the AAB) can upload to that account. | `cloudinary_upload_service.dart:20-33`; `.env` asset |
| 8 | **Medium** | OTP SMS: customer phone number is sent to a third-party SMS gateway (NinzaSMS, `ninzasms.in.net`). Not disclosed. OTPs are held in process memory (10-min TTL), not the DB. | `backend/src/modules/shop-otp/shop-otp.service.js:5-40` |
| 9 | **Medium** | Speech recognition uses Android's `speech_to_text` plugin with `hi_IN`; no on-device-only flag was set, so the OS speech service (typically Google) may process audio off-device. The app itself does not record or store audio. | `voice_billing_screen.dart:94-96`; `voice_recognition_service.dart` |
| 10 | **Medium** | `debugPrint` writes transcripts, the full LLM prompt (catalog + customer names/phones) and the raw response; these also reach logcat in release builds. Also `morgan('dev')` on the backend logs URLs. | `voice_action_parser.dart` (`_logChunked(prompt)`); `backend/src/app.js:65` |
| 11 | **Medium** | `allowBackup` is not set, so Android's default (true) applies: the app DB, shared prefs (including `shop_backend_token`, `user_backend_token`) can be included in Google/ADB backups. Tokens last 180 days by default. | `AndroidManifest.xml`; `shop_repository`/`constants.dart:keyShopBackendToken`; `backend/src/config/env.js:22` |
| 12 | **Low** | Tokens stored in plain `SharedPreferences` (not Keystore-backed). | `constants.dart` |
| 13 | **Low** | Backend `cors({origin:'*'})`; `helmet()` enabled; auth/global rate limiting exists. | `backend/src/app.js:57-61` |
| 14 | **Low** | A local pre-wipe production DB export (13 shops, 30 invoices, etc.) sits at `backend/backups/` — gitignored, not in any repo, but is live personal data on a dev machine. | `backend/.gitignore:4`; file listing (structure only inspected) |
| 15 | **Low / info** | Positives: no analytics, ads, crash-reporting or Firebase SDKs in `pubspec.yaml`; HTTPS-only endpoints; no cleartext flag; location permission is capped to API ≤30 for Bluetooth scanning and no location API is used; READ_CONTACTS is requested at point of use for one picked contact. | `pubspec.yaml`, `AndroidManifest.xml` |

## 3. Data-flow inventory

Legend — **L** local only · **B** our backend · **T** third party · **S** SDK/OS.

| Category | Data elements | Collection | Processing / destination | Purpose | Retention / deletion | Optional? | Evidence | Confidence / open questions |
|---|---|---|---|---|---|---|---|---|
| Account | Shop phone number, owner name | Entered at signup/login | **B** `/api/shop/auth/register,login,send-otp,verify-otp,change-phone`; **T** NinzaSMS receives phone+OTP | Authentication | Kept in `Shop`/`User` tables; no delete path found | Required | `otp_service.dart`, `subscription_api_client.dart:127-169`, `shop-otp.service.js` | High. Retention unknown |
| Shop profile | Shop name, address, GSTIN, currency/GST settings, UPI ID, logo | Setup/profile screens | L (SQLite) → **B** sync; logo → **T** Cloudinary | Operate shop, invoices, UPI QR | As above | Mostly optional fields | `data_sync_repository.dart:226-244` | High |
| Customers | Name, phone, email, address, balances, last visit, image; optionally picked from device contacts | Manual entry; contact picker (READ_CONTACTS) | L → **B** sync; image → **T** Cloudinary; name+phone also → **T** Groq via voice prompt | Ledger, billing | As above | Optional | `data_sync_repository.dart:700-713`, `customer_list_screen.dart`, `voice_action_parser.dart` | High |
| Products / inventory | Name, SKU, barcode, category, cost/selling price, MRP, GST, stock, aliases, photos | Manual, bulk .xlsx import, barcode scan | L → **B**; photos → **T** Cloudinary; names/aliases/price/stock → **T** Groq via voice prompt | Billing, stock | As above | Required for use | `data_sync_repository.dart:665-697`, `bulk_item_import_service.dart` | High |
| Invoices & payments | Invoice no., customer name, line items, totals, GST, discounts, payment mode, notes, received/pending, stock movements, payment transactions | Created in app | L → **B** sync | Billing, ledger | As above | Required | `data_sync_repository.dart:716-780` | High |
| Voice | Audio (OS speech service), transcript text, catalog + customer list in prompt | Microphone (RECORD_AUDIO) | Audio: **S** Android speech recognizer (not controlled by app). Transcript+context: **B** → **T** Groq | Voice billing | App does not store audio; transcript not stored in sync payload; backend/Groq retention **unknown** | Optional feature | `voice_billing_screen.dart:94`, `voice_action_parser.dart`, `shop-voice.service.js` | Medium — Groq retention terms and OS speech behaviour must be checked |
| Subscription / payments | Plan id, UPI payment reference, amount, claim status | Pay-via-UPI flow | **B** `/api/shop/payment-claims`; payment itself handled by the user's UPI app | Activate paid plan | Server records; no delete | Optional | `subscription_api_client.dart:238-262`, `upi_payment_service.dart` | High; app does not see card/UPI credentials |
| Staff / members | Invitee phones, roles, permissions | Manage-members screens | **B** `/api/shop/members*` | Multi-user access | Server | Optional | `member_api_client.dart` | High |
| Device / diagnostics | HTTP method, path, status, stack, shopId, body preview on 5xx; request logs | Automatic (server) | **B** `ErrorLog` table; Render logs (`morgan`) | Debugging | No retention rule found | Automatic | `error.middleware.js` | High; host-level logs (IP) are Render's — unverified |
| Local-only | Printer settings, theme, locale, notification state, backups exported by user via share sheet | — | L | Settings | Cleared on uninstall; (see allowBackup note) | — | `backup_restore_screen.dart`, `constants.dart` | High |
| Not found | Advertising ID, device IDs, analytics, crash SDKs, location | — | — | — | — | — | `pubspec.yaml`, grep | High (source only; transitive plugin behaviour not exhaustively traced) |

**Cannot be determined from source:** Render/Neon/Cloudinary/Groq/NinzaSMS retention and sub-processing, encryption-at-rest, host IP logs, Android/Google speech-service handling, whether live backend matches this source.

## 4. Discrepancy table

| Topic | Play listing (as stated) | Current website policy | Actual behaviour | Correction needed |
|---|---|---|---|---|
| Data collected | None | Account, voice, business, device data | Phone, names, customer PII, financial/invoice data, images, UPI ID, diagnostics | Update Data safety (see §6); policy rewrite (§5) |
| Shared with third parties | None | "Service providers (hosting, SMS/WhatsApp), CA portal, authorities" | Groq (voice text + customer/catalog), Cloudinary (images), NinzaSMS (phone+OTP), Render/Neon hosting | Name processors accurately; drop CA portal/WhatsApp unless real |
| Local storage | — | "IndexedDB" | SQLite (`sqflite`) | Fix |
| Cloud sync | — | "Syncs to encrypted cloud servers" | Automatic hourly sync to backend; encryption at rest unverified | Say "sent over HTTPS"; no at-rest claim |
| Voice | — | "Processed to convert speech…; de-identified use to improve recognition" | Audio by OS recognizer; text to Groq; no de-identified training use found | Remove improvement claim unless real |
| Deletion | — | By emailing us | No deletion path; backend can't delete a shop | **Build** deletion or document manual process; Play requires in-app + web URL |
| Operator | — | "Ayush Gupta, Founder" + phone + address | No legal entity verified | Owner to confirm operator name/entity |
| Children | — | Not for under 18 | Consistent | Keep |

## 5. Corrected privacy-policy draft (needs owner confirmation of `[…]` items)

> **Privacy Policy — Vaani AI Billing**
> Effective date: `[date of publication]`
>
> **Who we are.** Vaani AI Billing ("Vaani", "we") is operated by `[LEGAL NAME / PROPRIETOR — owner to confirm]`, `[registered address — owner to confirm]`. Contact: `[support email]`, `[phone]`.
>
> **What the app does.** Vaani is an Android app that helps shopkeepers create bills, manage products, customers and dues, and print or share invoices.
>
> **Information we collect.**
> - *Account:* your mobile number and owner name, used to sign in with an SMS one-time password.
> - *Shop information you enter:* shop name, address, GSTIN, UPI ID, logo and tax settings.
> - *Customer information you enter:* names, phone numbers, email, address, balances, and photos. If you use "Pick from Contacts", the contact you choose is copied into your customer list. Please make sure you have a right to store your customers' details.
> - *Business records:* products, prices, stock, bills, payments and ledger entries.
> - *Photos:* images you add to products, customers or your shop logo.
> - *Voice:* when you use voice billing, the app uses your phone's speech recognition service (which may process audio on Google or your device vendor's servers under their terms). Vaani does not save the audio. The recognised text, together with your product list and customer names/numbers, is sent to our server and then to an AI service to work out the bill items.
> - *Subscription:* the plan you choose and the payment reference you submit. Payments are made through your own UPI app; we do not receive your UPI PIN or bank credentials.
> - *Technical logs:* when our server encounters an error it may log the request details, including part of the data sent, to help us fix problems.
>
> **Where data is stored.** Your data is kept on your phone. After you sign in, the app automatically copies it to our server [and to backup] roughly every hour and when you open the app. Images are uploaded to Cloudinary. `[Owner to confirm: hosting provider/region.]`
>
> **Who processes data for us.** Render (server hosting), Neon (database) `[confirm]`, Cloudinary (image hosting), Groq (AI processing of voice text), NinzaSMS (sending OTP SMS). They process data to provide these services. We do not sell your data. We may disclose information if legally required.
>
> **Retention and deletion.** `[Owner to decide and implement: how users delete their account and data; retention period for server data, error logs and images. Do not publish until a real mechanism exists.]`
>
> **Security.** Data is sent to our servers over HTTPS. We use sign-in tokens, access controls and rate limiting. No system is completely secure.
>
> **Your choices.** You can deny microphone, camera, contacts and notification permissions in Android settings (some features then won't work). You can request access, correction or deletion by contacting `[support email]`.
>
> **Children.** Vaani is a business tool not intended for people under 18.
>
> **Changes.** We will update the effective date when this policy changes and, for material changes, notify users in the app `[confirm]`.
>
> **Legal review.** `[Have a qualified professional confirm applicability of India's DPDP Act 2023 and Play requirements before publishing.]`

## 6. Proposed Google Play Data safety answers (not submitted)

Overall: **"Does your app collect or share any of the required user data types?" → Yes.** Data encrypted in transit → **Yes** (HTTPS everywhere). Users can request deletion → **Only after a deletion mechanism exists** (currently No in practice). Providers acting on our behalf (Groq, Cloudinary, SMS gateway, hosting) are generally "service providers" and Google excludes transfers to them from "sharing" — **owner/legal to confirm**, especially for Groq receiving customer names/phones.

| Play data type | Collected? | Shared? | Required/optional | Purpose | Evidence |
|---|---|---|---|---|---|
| Name | Yes (owner, customers) | Service providers only | Required (owner) / optional | App functionality, account | sync payloads |
| Phone number | Yes | Service providers (SMS gateway, Groq via prompt) | Required | Account mgmt, app functionality | `otp_service.dart`, `voice_action_parser.dart` |
| Email address | Yes (optional customer email; shop email if entered) | No | Optional | App functionality | `data_sync_repository.dart:704` |
| Address | Yes (shop, customers) | No | Optional | App functionality | `:229,705` |
| User IDs | Yes (shop/user ids, tokens) | No | Required | Account mgmt | `constants.dart` |
| Purchase history / other financial info | Yes (invoices, balances, GSTIN, UPI ID) | No (service provider hosting only) | Required for use | App functionality | `:716-780` |
| Photos | Yes (items, customers, logo) | Service provider (Cloudinary) | Optional | App functionality | `cloudinary_upload_service.dart` |
| Voice or sound recordings | **Needs decision.** App stores none; OS recognizer processes audio. Transcript text goes to backend/Groq. Declare per Play's guidance after confirming how `speech_to_text` is classified. | Groq receives text | Optional | App functionality | `voice_billing_screen.dart` |
| Other user-generated content (transcripts) | Yes (transient, in request) — ephemeral only if not logged (see finding 10) | Service provider (Groq) | Optional | App functionality | `shop-voice.service.js` |
| Crash logs / diagnostics | Yes (server ErrorLog) | No | Automatic | Analytics/debugging | `error.middleware.js` |
| Contacts | Only the single contact the user picks, copied into a customer record — declare under Name/Phone; confirm whether Play also wants "Contacts" | No | Optional | App functionality | `customer_list_screen.dart` |
| Location, device ID, ads, health, messages, calendar, files/docs | No | — | — | — | manifest & grep |

## 7. Code and backend fixes recommended (none applied)

| Fix | Impact | App release? |
|---|---|---|
| Add in-app "Delete account" calling a new authenticated backend endpoint that deletes Shop/User/Synced* rows (and Cloudinary assets via server-signed delete); add a public web deletion-request page | Required for Play policy; nontrivial backend work | **Yes** (app) + backend deploy |
| Gate or disclose cloud sync with first-run consent text and a settings toggle | Changes real behaviour; product decision | Yes |
| Remove `debugPrint` of transcripts/prompts in release (`kReleaseMode` guard) | None to users | Yes |
| Stop storing `bodyPreview` or scrub PII; add retention job for `ErrorLog` | Backend only | No |
| Set `android:allowBackup="false"` or `dataExtractionRules` excluding prefs/DB; move tokens to `flutter_secure_storage` | Backups of app data stop; new dependency | Yes |
| Switch Cloudinary to server-signed uploads | Backend + app change | Yes |
| Voice consent dialog before first mic use explaining OS speech service + Groq | UX text | Yes |
| Minimise voice prompt: send customer **names only** (not phones), cap list size | Slight parse-accuracy risk; test | Yes |
| Restrict CORS and `morgan` format | Backend only | No |

## 8. Validation performed

Static source review only (manifest, `pubspec.yaml`, sync/voice/OTP/subscription/members clients, backend routes, Prisma schema, error middleware). **No code was built, run, or modified in the app or backend; no `flutter analyze`/tests were run**, since no code changed. No network traffic was captured, so runtime behaviour (e.g. what the OS speech service sends) is unverified. Passing checks would not establish legal compliance.

## 9. Required human inputs

1. Live Play versionCode/versionName and confirmation that `billing/vaani` at that commit built it.
2. Legal operator name/entity, address, support email and phone to show in the policy.
3. Retention periods and deletion decision (build the deletion feature or state manual handling).
4. Confirm hosting regions/providers (Render, Neon), and review Groq, Cloudinary, NinzaSMS terms/retention.
5. Whether to make sync opt-in.
6. Whether speech recognition should be forced on-device.
7. Legal review (DPDP Act 2023 applicability, consent, children, cross-border transfer).
8. Confirm the Play Console's currently saved Data safety answers and privacy-policy URL.

## 10. Publishing and Play Console steps (after the above are resolved)

1. Finalise policy text; update `src/app/privacy/page.tsx` (website) — stable URL `https://vaani-1.vercel.app/privacy`; deploy via Vercel.
2. Add a public account-deletion page (e.g. `/delete-account`) once a process exists.
3. Play Console → Policy and programs → App content → **Privacy policy**: set the URL above. → **Data safety**: replace answers with the confirmed §6 table, → **Account deletion**: add the web URL.
4. If code fixes are included, bump `version` in `pubspec.yaml`, build the AAB, upload to a release track and complete the review.
5. Confirm the in-app login screen's "Privacy Policy" text (`termsPrivacyNotice`) actually links to the same URL (currently plain text, no link found).
6. Re-verify that `/privacy` and the Play link resolve to the identical version.

**App update required?** Yes for: account deletion, consent/disclosure UI, release-log scrubbing, allowBackup/token storage, signed Cloudinary uploads. **No** for: policy text, Data safety form, backend log/retention changes, CORS.
