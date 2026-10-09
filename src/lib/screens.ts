/** Real VAANI app screens / promo graphics, stored in public/screenshots. */
export type AppScreen = { src: string; alt: string; width: number; height: number };

export const SCREENS = {
  banner: { src: "/screenshots/banner.webp", alt: "Vaani AI Billing: smart billing, simple business. Create bills, manage items and track customer dues.", width: 1024, height: 500 },
  smartBilling: { src: "/screenshots/smart-billing.webp", alt: "Vaani home screen with voice billing, invoices, product management, customer ledger and reports", width: 720, height: 1279 },
  createBill: { src: "/screenshots/create-bill-steps.webp", alt: "Vaani New Bill screen: search products, add quantity, review the bill and generate it", width: 720, height: 1279 },
  products: { src: "/screenshots/products-inventory.webp", alt: "Vaani Items screen for adding products, categories, prices and stock", width: 720, height: 1280 },
  share: { src: "/screenshots/share-bills.webp", alt: "Vaani bill sharing as PDF, image or WhatsApp, and thermal printing", width: 720, height: 1279 },
  reports: { src: "/screenshots/reports.webp", alt: "Vaani Reports screen with sales, profit, items, payments and customers", width: 720, height: 1280 },
  offline: { src: "/screenshots/offline-billing.webp", alt: "Vaani offline billing: bills saved on your device and synced later", width: 720, height: 1280 },
  aiManager: { src: "/screenshots/ai-manager.webp", alt: "Vaani AI Manager chat answering questions about sales, dues and stock", width: 720, height: 1279 },
} satisfies Record<string, AppScreen>;
